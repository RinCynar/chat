// UI logic for NodeCrypt web client (Material Design 3 Edition)
// NodeCrypt 网页客户端的 UI 逻辑 (Material Design 3 升级版)

import {
	createAvatarSVG
} from './util.avatar.js';
import {
	roomsData,
	activeRoomIndex,
	togglePrivateChat,
	exitRoom
} from './room.js';
import {
	escapeHTML
} from './util.string.js';
import {
	$id
} from './util.dom.js';
import {
	closeSettingsPanel
} from './util.settings.js';
import {
	t
} from './util.i18n.js';
import {
	renderChatArea,
	updateChatInputStyle
} from './chat.js';
import {
	toggleDarkMode,
	updateQuickModeToggleIcons
} from './util.theme.js';

// Simple encryption/decryption using base64 and character shifting for share links
function simpleEncrypt(text) {
	if (!text) return '';
	const base64 = btoa(unescape(encodeURIComponent(text)));
	return base64.split('').map(char => {
		const code = char.charCodeAt(0);
		return String.fromCharCode(code + 3);
	}).join('');
}

function simpleDecrypt(encrypted) {
	if (!encrypted) return '';
	try {
		const shifted = encrypted.split('').map(char => {
			const code = char.charCodeAt(0);
			return String.fromCharCode(code - 3);
		}).join('');
		return decodeURIComponent(escape(atob(shifted)));
	} catch (error) {
		console.warn('Failed to decrypt data:', error);
		return '';
	}
}

// Validate room data
function validateRoomData(roomData) {
	if (!roomData) {
		return { valid: false, error: 'No room data available' };
	}
	if (!roomData.roomName || roomData.roomName.trim() === '') {
		return { valid: false, error: 'Room name is required' };
	}
	return { valid: true };
}

// Show Material 3 Toast Notification
export function showToast(message, duration = 2500) {
	let toast = document.getElementById('md-toast');
	if (!toast) {
		toast = document.createElement('div');
		toast.id = 'md-toast';
		toast.style.cssText = `
			position: fixed;
			bottom: 84px;
			left: 50%;
			transform: translateX(-50%) translateY(20px);
			background: var(--md-sys-color-on-surface, #1F1F1F);
			color: var(--md-sys-color-surface, #FFFFFF);
			padding: 10px 20px;
			border-radius: var(--md-sys-shape-corner-full, 9999px);
			font-size: 13.5px;
			font-weight: 500;
			box-shadow: var(--md-sys-elevation-3, 0 4px 12px rgba(0,0,0,0.15));
			z-index: 10000;
			opacity: 0;
			pointer-events: none;
			transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
			display: flex;
			align-items: center;
			gap: 8px;
		`;
		document.body.appendChild(toast);
	}
	toast.textContent = message;
	toast.style.opacity = '1';
	toast.style.transform = 'translateX(-50%) translateY(0)';
	
	clearTimeout(toast._timer);
	toast._timer = setTimeout(() => {
		toast.style.opacity = '0';
		toast.style.transform = 'translateX(-50%) translateY(20px)';
	}, duration);
}

// Copy text to clipboard with fallback
function copyToClipboard(text, successMessage = t('action.copied', 'Copied to clipboard!'), errorPrefix = t('action.copy_failed', 'Copy failed, url:')) {
	if (!text) {
		showToast(t('action.nothing_to_copy', 'Nothing to copy'));
		return;
	}

	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(text).then(() => {
			showToast(successMessage);
		}).catch((error) => {
			console.error('Clipboard write failed:', error);
			showFallbackCopy(text, errorPrefix);
		});
	} else {
		showFallbackCopy(text, errorPrefix);
	}
}

// Show fallback copy method
function showFallbackCopy(text, prefix) {
	if (typeof prompt === 'function') {
		prompt(prefix, text);
	} else {
		showToast(t('action.copy_not_supported', 'Copy not supported in this environment'));
	}
}

// Execute menu action with error handling
function executeMenuAction(action, closeMenuCallback) {
	try {
		switch (action) {
			case 'share':
				handleShareAction();
				break;
			case 'exit':
				handleExitAction();
				break;
			default:
				console.warn('Unknown menu action:', action);
		}
	} catch (error) {
		console.error('Menu action failed:', error);
		showToast(t('action.action_failed', 'Action failed. Please try again.'));
	} finally {
		closeMenuCallback && closeMenuCallback();
	}
}

// Handle share action
function handleShareAction() {
	const validation = validateRoomData(roomsData[activeRoomIndex]);
	if (!validation.valid) {
		showToast(`${t('action.cannot_share', 'Cannot share:')} ${validation.error}`);
		return;
	}

	const rd = roomsData[activeRoomIndex];
	const roomName = rd.roomName.trim();
	const password = rd.password || '';
	
	// Encrypt room name and password
	const encryptedRoom = simpleEncrypt(roomName);
	const encryptedPwd = password ? simpleEncrypt(password) : '';
	
	// Create share URL with encrypted data
	let url = `${location.origin}${location.pathname}?r=${encodeURIComponent(encryptedRoom)}`;
	if (encryptedPwd) {
		url += `&p=${encodeURIComponent(encryptedPwd)}`;
	}
	
	copyToClipboard(url, t('action.share_copied', '加密分享链接已复制到剪贴板！'), t('action.copy_url_failed', 'Copy failed, url:'));
}

// Handle exit action
function handleExitAction() {
	try {
		const result = exitRoom();
		if (!result) {
			location.reload();
		}
	} catch (error) {
		console.error('Exit room failed:', error);
		location.reload();
	}
}

// Render the main header (Material Design 3 Top App Bar)
export function renderMainHeader() {
	const rd = roomsData[activeRoomIndex];
	let roomName = rd ? rd.roomName : 'Room';
	let onlineCount = rd && rd.userList ? rd.userList.length : 0;
	if (rd && !rd.userList.some(u => u.clientId === rd.myId)) {
		onlineCount += 1;
	}
	const safeRoomName = escapeHTML(roomName);
	
	const mainHeaderEl = $id("main-header");
	if (!mainHeaderEl) return;

	mainHeaderEl.innerHTML = `
		<button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open Sidebar" title="打开房间列表">
			<svg viewBox="0 0 24 24" fill="currentColor">
				<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
			</svg>
		</button>
		
		<div class="main-header-center" id="main-header-center">
			<div class="main-header-flex">
				<div class="group-title">
					<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--md-sys-color-primary)">
						<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
					</svg>
					<span>#${safeRoomName}</span>
				</div>
				<span class="main-header-members">${onlineCount} ${t('ui.members', 'members')}</span>
			</div>
		</div>
		
		<div class="main-header-actions">
			<button class="theme-mode-toggle-btn" id="header-theme-toggle-btn" aria-label="Toggle Dark Mode" title="切换深色/浅色模式"></button>

			<button class="more-btn" id="quick-share-btn" aria-label="Share Room" title="${t('action.share', 'Share')}">
				<svg viewBox="0 0 24 24" fill="currentColor">
					<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
				</svg>
			</button>
			
			<button class="mobile-info-btn" id="mobile-info-btn" aria-label="Open Members" title="在线成员">
				<svg viewBox="0 0 24 24" fill="currentColor">
					<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
				</svg>
			</button>
			
			<button class="more-btn" id="more-btn" aria-label="More Options" title="更多选项">
				<svg viewBox="0 0 24 24" fill="currentColor">
					<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
				</svg>
			</button>
			
			<div class="more-menu" id="more-menu">
				<div class="more-menu-item" data-action="share">
					<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
						<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
					</svg>
					<span>${t('action.share', 'Share')}</span>
				</div>
				<div class="more-menu-item" data-action="exit">
					<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
						<path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
					</svg>
					<span>${t('action.exit', 'Quit')}</span>
				</div>
			</div>
		</div>
	`;

	const quickShareBtn = $id('quick-share-btn');
	if (quickShareBtn) {
		quickShareBtn.onclick = handleShareAction;
	}

	const headerThemeToggleBtn = $id('header-theme-toggle-btn');
	if (headerThemeToggleBtn) {
		headerThemeToggleBtn.onclick = () => {
			toggleDarkMode();
		};
	}

	updateQuickModeToggleIcons();
	setupMoreBtnMenu();
	setupMobileUIHandlers();
}

// Setup mobile UI event handlers (M3 Modal Drawers & Sheets)
export function setupMobileUIHandlers() {
	const sidebar = document.getElementById('sidebar');
	const rightbar = document.getElementById('rightbar');
	const settingsSidebar = document.getElementById('settings-sidebar');
	const mobileMenuBtn = document.getElementById('mobile-menu-btn');
	const mobileInfoBtn = document.getElementById('mobile-info-btn');
	const sidebarMask = document.getElementById('mobile-sidebar-mask');
	const rightbarMask = document.getElementById('mobile-rightbar-mask');

	function isMobile() {
		return window.innerWidth <= 1024;
	}

	function updateMobileBtnDisplay() {
		if (isMobile()) {
			if (mobileMenuBtn) mobileMenuBtn.style.display = 'flex';
			if (mobileInfoBtn) mobileInfoBtn.style.display = 'flex';
		} else {
			if (mobileMenuBtn) mobileMenuBtn.style.display = 'none';
			if (mobileInfoBtn) mobileInfoBtn.style.display = 'none';
			if (sidebar) sidebar.classList.remove('mobile-open');
			if (rightbar) rightbar.classList.remove('mobile-open');
			if (sidebarMask) sidebarMask.classList.remove('active');
			if (rightbarMask) rightbarMask.classList.remove('active');
		}
	}

	updateMobileBtnDisplay();
	window.addEventListener('resize', updateMobileBtnDisplay);

	if (mobileMenuBtn && sidebar && sidebarMask) {
		mobileMenuBtn.onclick = function(e) {
			e.stopPropagation();
			sidebar.classList.add('mobile-open');
			sidebarMask.classList.add('active');
		};
		
		sidebarMask.onclick = function() {
			if (settingsSidebar && settingsSidebar.classList.contains('mobile-open')) {
				closeSettingsPanel();
			} else {
				sidebar.classList.remove('mobile-open');
				sidebarMask.classList.remove('active');
			}
		};
	}

	if (mobileInfoBtn && rightbar && rightbarMask) {
		mobileInfoBtn.onclick = function(e) {
			e.stopPropagation();
			rightbar.classList.add('mobile-open');
			rightbarMask.classList.add('active');
		};
		
		rightbarMask.onclick = function() {
			rightbar.classList.remove('mobile-open');
			rightbarMask.classList.remove('active');
		};
	}

	// Consolidated click event listener for closing sidebars
	document.addEventListener('click', function(ev) {
		const settingsBtn = $id('settings-btn');
		const isSettingsButtonClick = settingsBtn && settingsBtn.contains(ev.target);
		const isSettingsBackButtonClick = $id('settings-back-btn') && $id('settings-back-btn').contains(ev.target);

		if (settingsSidebar && (settingsSidebar.classList.contains('open') || settingsSidebar.classList.contains('mobile-open'))) {
			if (!settingsSidebar.contains(ev.target) && !isSettingsButtonClick && !isSettingsBackButtonClick) {
				closeSettingsPanel();
			}
		}

		if (isMobile()) {
			if (sidebar && sidebar.classList.contains('mobile-open')) {
				if (!sidebar.contains(ev.target) && ev.target !== mobileMenuBtn && (!mobileMenuBtn || !mobileMenuBtn.contains(ev.target))) {
					sidebar.classList.remove('mobile-open');
					if (sidebarMask) sidebarMask.classList.remove('active');
				}
			}
			if (rightbar && rightbar.classList.contains('mobile-open')) {
				if (!rightbar.contains(ev.target) && ev.target !== mobileInfoBtn && (!mobileInfoBtn || !mobileInfoBtn.contains(ev.target))) {
					rightbar.classList.remove('mobile-open');
					if (rightbarMask) rightbarMask.classList.remove('active');
				}
			}
		}
	});
}

// Render the user/member list
export function renderUserList(updateHeader = false) {
	const userListEl = $id('member-list');
	if (!userListEl) return;
	userListEl.innerHTML = '';
	const rd = roomsData[activeRoomIndex];
	if (!rd) return;
	
	const me = rd.userList.find(u => u.clientId === rd.myId);
	const others = rd.userList.filter(u => u.clientId !== rd.myId);
	
	if (me) userListEl.appendChild(createUserItem(me, true));
	others.forEach(u => userListEl.appendChild(createUserItem(u, false)));
	
	if (updateHeader) {
		renderMainHeader();
	}
}

// Create a user list item
export function createUserItem(user, isMe) {
	const div = document.createElement('div');
	const rd = roomsData[activeRoomIndex];
	const isPrivateTarget = rd && user.clientId === rd.privateChatTargetId;
	div.className = 'member' + (isMe ? ' me' : '') + (isPrivateTarget ? ' private-chat-active' : '');
	const rawName = user.userName || user.username || user.name || '';
	const safeUserName = escapeHTML(rawName);
	
	div.innerHTML = `
		<span class="avatar"></span>
		<div class="member-info">
			<div class="member-name">${safeUserName}${isMe ? t('ui.me', ' (me)') : ''}</div>
		</div>
		${!isMe ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="var(--md-sys-color-on-surface-variant)" style="opacity: 0.6;">
			<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
		</svg>` : ''}
	`;
	
	const avatarEl = div.querySelector('.avatar');
	if (avatarEl) {
		const svg = createAvatarSVG(rawName);
		const cleanSvg = svg.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
		avatarEl.innerHTML = cleanSvg;
	}
	
	if (!isMe) {
		div.onclick = () => togglePrivateChat(user.clientId, safeUserName);
	}
	return div;
}

// Setup the 'more' button menu
export function setupMoreBtnMenu() {
	const btn = $id('more-btn');
	const menu = $id('more-menu');
	if (!btn || !menu) return;
	let animating = false;

	function openMenu() {
		menu.style.display = 'block';
		menu.classList.remove('close');
		menu.offsetHeight;
		menu.classList.add('open');
	}

	function closeMenu() {
		if (animating) return;
		animating = true;
		menu.classList.remove('open');
		menu.classList.add('close');
		setTimeout(() => {
			if (menu.classList.contains('close')) menu.style.display = 'none';
			animating = false;
		}, 200);
	}

	btn.onclick = function(e) {
		e.stopPropagation();
		if (menu.classList.contains('open')) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	menu.onclick = function(e) {
		const item = e.target.closest('.more-menu-item');
		if (item) {
			const action = item.dataset.action;
			executeMenuAction(action, closeMenu);
		}
	};

	document.addEventListener('click', function hideMenu(ev) {
		if (!menu.contains(ev.target) && ev.target !== btn && (!btn.contains(ev.target))) {
			closeMenu();
		}
	});
}

// Prevent space and special character input in usernames/room names
export function preventSpaceInput(input) {
	if (!input) return;
	input.addEventListener('keydown', function(e) {
		if (e.key === ' ' || (/[\u0000-\u007f]/.test(e.key) && /[\p{P}\p{S}]/u.test(e.key) && e.key !== "'")) {
			e.preventDefault();
		}
	});
	input.addEventListener('input', function(e) {
		input.value = input.value.replace(/[\s\p{P}\p{S}]/gu, function(match) {
			return match === "'" ? "'" : '';
		});
	});
}

// Login form submit handler
export function loginFormHandler(modal) {
	return function(e) {
		e.preventDefault();
		let userName, roomName, password, btn, roomInput, warnTip;
		if (modal) {
			userName = document.getElementById('userName-modal').value.trim();
			roomName = document.getElementById('roomName-modal').value.trim();
			password = document.getElementById('password-modal').value.trim();
			btn = modal.querySelector('.login-btn');
			roomInput = document.getElementById('roomName-modal');
		} else {
			userName = document.getElementById('userName').value.trim();
			roomName = document.getElementById('roomName').value.trim();
			password = document.getElementById('password').value.trim();
			btn = document.querySelector('#login-form .login-btn');
			roomInput = document.getElementById('roomName');
		}
		
		const exists = roomsData.some(rd => rd.roomName && rd.roomName.toLowerCase() === roomName.toLowerCase());
		if (roomInput) {
			roomInput.style.borderColor = '';
			if (roomInput._warnTip) {
				roomInput.parentNode.removeChild(roomInput._warnTip);
				roomInput._warnTip = null;
			}
		}
		
		if (exists) {
			if (roomInput) {
				roomInput.style.borderColor = 'var(--md-sys-color-error, #BA1A1A)';
				warnTip = document.createElement('div');
				warnTip.style.cssText = 'color: var(--md-sys-color-error, #BA1A1A); font-size: 12px; margin-top: 4px; font-weight: 500;';
				warnTip.textContent = t('ui.node_exists', '房间已存在');
				roomInput.parentNode.appendChild(warnTip);
				roomInput._warnTip = warnTip;
				roomInput.focus();
			}
			if (btn) {
				btn.disabled = false;
				btn.innerText = t('ui.enter', '进入房间');
			}
			return;
		}

		if (btn) {
			btn.disabled = true;
			btn.innerText = t('ui.connecting', '正在建立加密连接...');
		}

		window.joinRoom(userName, roomName, password, modal, function(success) {
			if (!success && btn) {
				btn.disabled = false;
				btn.innerText = t('ui.enter', '进入房间');
			}
		});
	};
}

// Generate Material Design 3 Outlined Login Form
export function generateLoginForm(isModal = false) {
	const idPrefix = isModal ? '-modal' : '';
	return `
		<div class="input-group">
			<input id="userName${idPrefix}" type="text" autocomplete="username" required minlength="1" maxlength="15" placeholder=" ">
			<label for="userName${idPrefix}" class="floating-label">${t('ui.username', 'Username')}</label>
		</div>
		<div class="input-group">
			<input id="roomName${idPrefix}" type="text" required minlength="1" maxlength="15" placeholder=" ">
			<label for="roomName${idPrefix}" class="floating-label">${t('ui.node_name', 'Room Name')}</label>
		</div>
		<div class="input-group">
			<input id="password${idPrefix}" type="password" autocomplete="${isModal ? 'off' : 'current-password'}" minlength="1" maxlength="15" placeholder=" ">
			<label for="password${idPrefix}" class="floating-label">${t('ui.node_password', 'Room Password')} <span class="optional">${t('ui.optional', '(optional)')}</span></label>
		</div>
		<button type="submit" class="login-btn">
			<span>${t('ui.enter', '进入房间')}</span>
			<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
				<path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-7.85-1.42 1.42L16.86 11H5v2z"/>
			</svg>
		</button>
	`;
}

export function openLoginModal() {
	const modal = document.createElement('div');
	modal.className = 'login-modal';
	modal.innerHTML = `
		<div class="login-modal-bg"></div>
		<div class="login-modal-card">
			<button class="login-modal-close" aria-label="关闭">&times;</button>
			<h1>${t('ui.enter_node', '进入新房间')}</h1>
			<form id="login-form-modal">${generateLoginForm(true)}</form>
		</div>
	`;
	document.body.appendChild(modal);
	modal.querySelector('.login-modal-close').onclick = () => modal.remove();
	preventSpaceInput(modal.querySelector('#userName-modal'));
	preventSpaceInput(modal.querySelector('#roomName-modal'));
	preventSpaceInput(modal.querySelector('#password-modal'));
	const form = modal.querySelector('#login-form-modal');
	form.addEventListener('submit', loginFormHandler(modal));
	autofillRoomPwd('-modal');
}

// Setup member list tabs (if enabled)
export function setupTabs() {
	const memberTabsEl = document.getElementById("member-tabs");
	if (!memberTabsEl) return;
	const tabs = memberTabsEl.children;
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].onclick = function() {
			for (let j = 0; j < tabs.length; j++) tabs[j].classList.remove("active");
			this.classList.add("active");
		};
	}
}

// Autofill room and password from URL
export function autofillRoomPwd(formPrefix = '') {
	const params = new URLSearchParams(window.location.search);
	
	const encryptedRoom = params.get('r');
	const encryptedPwd = params.get('p');
	const plaintextRoom = params.get('node');
	const plaintextPwd = params.get('pwd');
	
	let roomValue = '';
	let pwdValue = '';
	let isPlaintext = false;
	
	if (encryptedRoom) {
		roomValue = simpleDecrypt(decodeURIComponent(encryptedRoom));
		if (encryptedPwd) {
			pwdValue = simpleDecrypt(decodeURIComponent(encryptedPwd));
		}
	} else if (plaintextRoom) {
		roomValue = decodeURIComponent(plaintextRoom);
		if (plaintextPwd) {
			pwdValue = decodeURIComponent(plaintextPwd);
		}
		isPlaintext = true;
		
		if (window.addSystemMsg) {
			window.addSystemMsg(t('system.security_warning', '⚠️ This link uses an old format. Room data is not encrypted.'), true);
		}
	}

	if (roomValue) {
		const roomInput = document.getElementById(formPrefix + 'roomName');
		if (roomInput) {
			roomInput.value = roomValue;
			roomInput.readOnly = true;
		}
		
		const pwdInput = document.getElementById(formPrefix + 'password');
		if (pwdInput) {
			pwdInput.value = pwdValue;
			pwdInput.readOnly = true;
			if (!pwdValue) {
				pwdInput.placeholder = ' ';
			}
		}
	}
	
	if (roomValue || pwdValue) {
		window.history.replaceState({}, '', location.pathname);
	}
}

// Initialize login form
export function initLoginForm() {
	const loginFormContainer = document.getElementById('login-form');
	if (loginFormContainer && loginFormContainer.children.length === 0) {
		loginFormContainer.innerHTML = generateLoginForm(false);
	}
	document.body.classList.add('login-page');
}

// Listen for language change events to refresh UI
window.addEventListener('languageChange', () => {
	renderMainHeader();
	renderUserList(false);
	renderChatArea();
	updateChatInputStyle();
});

window.addEventListener('regenerateLoginForm', () => {
	const loginFormContainer = document.getElementById('login-form');
	if (loginFormContainer) {
		loginFormContainer.innerHTML = generateLoginForm(false);
	}
});

// Initialize flip card functionality
export function initFlipCard() {
	const flipCard = document.getElementById('flip-card');
	const helpBtn = document.getElementById('help-btn');
	const backBtn = document.getElementById('back-btn');
	
	if (!flipCard || !helpBtn || !backBtn) return;
	
	const flipCardInner = flipCard.querySelector('.flip-card-inner');
	if (!flipCardInner) return;
	
	let isFlipped = false;
	
	function toggleFlip() {
		isFlipped = !isFlipped;
		if (isFlipped) {
			flipCardInner.classList.add('flipped');
		} else {
			flipCardInner.classList.remove('flipped');
		}
	}
	
	helpBtn.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		toggleFlip();
	});
	
	backBtn.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		toggleFlip();
	});
}
