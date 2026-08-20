// Import DOM utility functions
// 导入 DOM 工具函数
import {
	$,
	$$,
	$id,
	createElement,
	on,
	off,
	addClass,
	removeClass
} from './util.dom.js';

// Import theme utilities
// 导入主题工具函数
import { THEMES, getCurrentTheme, applyTheme, getThemeMode, isDarkMode, toggleDarkMode } from './util.theme.js';

// Import i18n utilities
// 导入国际化工具函数
import { t, setLanguage, getCurrentLanguage, initI18n } from './util.i18n.js';

// Default settings
// 默认设置
const DEFAULT_SETTINGS = {
	notify: false,
	sound: false,
	theme: 'theme-miku',
	themeMode: 'system' // 'system' | 'light' | 'dark'
};

// Load settings from localStorage
// 从 localStorage 加载设置
function loadSettings() {
	let s = localStorage.getItem('settings');
	try {
		s = s ? JSON.parse(s) : {};
	} catch {
		s = {};
	}
	return {
		...DEFAULT_SETTINGS,
		...s
	};
}

// Save settings to localStorage
// 保存设置到 localStorage
function saveSettings(settings) {
	const {
		notify,
		sound,
		theme,
		themeMode,
		language
	} = settings;
	localStorage.setItem('settings', JSON.stringify({
		notify,
		sound,
		theme,
		themeMode: themeMode || 'system',
		language
	}));
}

// Apply settings to the document
// 应用设置到文档
function applySettings(settings) {
	initI18n(settings);
}

// Ask for browser notification permission
// 请求浏览器通知权限
function askNotificationPermission(callback) {
	if (Notification.requestPermission.length === 0) {
		Notification.requestPermission().then(callback);
	} else {
		Notification.requestPermission(callback);
	}
}

// Setup the settings panel UI
// 设置设置面板 UI
function setupSettingsPanel() {
	const settingsSidebar = $id('settings-sidebar');
	const settingsContent = $id('settings-content');
	const settingsTitle = $id('settings-title');
	if (!settingsSidebar || !settingsContent) return;

	const settings = loadSettings();
	const currentTheme = getCurrentTheme();
	const currentMode = settings.themeMode || 'system';
	const currentLang = getCurrentLanguage();
	
	// Update settings title
	if (settingsTitle) {
		settingsTitle.textContent = t('settings.title', 'Settings');
	}

	// Create settings content HTML
	settingsContent.innerHTML = `
		<!-- Theme Mode (Light / Dark / System) -->
		<div class="settings-section">
			<div class="settings-section-title">${t('settings.theme_mode', '色彩模式')}</div>
			<div class="theme-mode-segmented-btn" id="theme-mode-segmented-btn">
				<button type="button" class="mode-btn ${currentMode === 'light' ? 'active' : ''}" data-mode="light">
					${t('settings.theme_mode_light', '☀️ 浅色')}
				</button>
				<button type="button" class="mode-btn ${currentMode === 'dark' ? 'active' : ''}" data-mode="dark">
					${t('settings.theme_mode_dark', '🌙 深色')}
				</button>
				<button type="button" class="mode-btn ${currentMode === 'system' ? 'active' : ''}" data-mode="system">
					${t('settings.theme_mode_system', '📱 跟随系统')}
				</button>
			</div>
		</div>

		<!-- Material You Dynamic Color Palettes -->
		<div class="settings-section">
			<div class="settings-section-title">${t('settings.theme_palette', 'Material You 调色板')}</div>
			<div class="theme-selector" id="theme-selector">
				${THEMES.map(theme => {
					const themeLabel = currentLang === 'zh' ? theme.nameZh : (currentLang === 'ja' ? theme.nameJa : theme.name.split(' ')[0]);
					return `
						<div class="theme-item ${currentTheme.id === theme.id ? 'active' : ''}" data-theme-id="${theme.id}" style="background: ${theme.color};" title="${theme.name}">
							<span style="position: absolute; bottom: 4px; font-size: 10px; font-weight: 600; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.8);">${themeLabel}</span>
						</div>
					`;
				}).join('')}
			</div>
		</div>

		<!-- Notification Settings -->
		<div class="settings-section">
			<div class="settings-section-title">${t('settings.notification', 'Notification Settings')}</div>
			<div class="settings-item">
				<div class="settings-item-label">
					<div>${t('settings.desktop_notifications', 'Desktop Notifications')}</div>
				</div>
				<label class="switch">
					<input type="checkbox" id="settings-notify" ${settings.notify ? 'checked' : ''}>
					<span class="slider"></span>
				</label>
			</div>
			<div class="settings-item">
				<div class="settings-item-label">
					<div>${t('settings.sound_notifications', 'Sound Notifications')}</div>
				</div>
				<label class="switch">
					<input type="checkbox" id="settings-sound" ${settings.sound ? 'checked' : ''}>
					<span class="slider"></span>
				</label>
			</div>
		</div>
		
		<!-- Language Settings -->
		<div class="settings-section">
			<div class="settings-section-title">${t('settings.language', 'Language Settings')}</div>
			<div class="settings-item">
				<div class="settings-item-label">
					<div>${t('settings.language_switch', 'Language')}</div>
				</div>
				<div class="language-selector">
					<select id="settings-language" class="language-select">
						<option value="zh" ${currentLang === 'zh' ? 'selected' : ''}>🇨🇳 中文</option>
						<option value="en" ${currentLang === 'en' ? 'selected' : ''}>🇺🇸 English</option>
						<option value="ja" ${currentLang === 'ja' ? 'selected' : ''}>🇯🇵 日本語</option>
					</select>
				</div>
			</div>
		</div>
	`;

	// Mode Segmented Buttons Event Listener
	const modeBtns = settingsContent.querySelectorAll('.mode-btn');
	modeBtns.forEach(btn => {
		on(btn, 'click', (e) => {
			const mode = e.currentTarget.dataset.mode;
			settings.themeMode = mode;
			saveSettings(settings);
			applyTheme(settings.theme || currentTheme.id, mode);
			modeBtns.forEach(b => b.classList.remove('active'));
			e.currentTarget.classList.add('active');
		});
	});

	// Theme Palette Item Selection Event Listener
	const themeItems = settingsContent.querySelectorAll('.theme-item');
	themeItems.forEach(item => {
		on(item, 'click', (e) => {
			const themeId = e.currentTarget.dataset.themeId;
			if (themeId) {
				settings.theme = themeId;
				saveSettings(settings);
				applyTheme(themeId, settings.themeMode);
				themeItems.forEach(i => i.classList.remove('active'));
				e.currentTarget.classList.add('active');
			}
		});
	});

	const notifyCheckbox = $('#settings-notify', settingsContent);
	const soundCheckbox = $('#settings-sound', settingsContent);
	const languageSelect = $('#settings-language', settingsContent);
	
	// Language select event handler
	on(languageSelect, 'change', e => {
		const newLanguage = e.target.value;
		settings.language = newLanguage;
		setLanguage(newLanguage);
		saveSettings(settings);
		applySettings(settings);
		
		setTimeout(() => {
			setupSettingsPanel();
		}, 100);
	});
	
	on(notifyCheckbox, 'change', e => {
		const checked = e.target.checked;
		if (checked) {
			if (!('Notification' in window)) {
				alert('Notifications are not supported by your browser.');
				e.target.checked = false;
				return;
			}
			askNotificationPermission(permission => {
				if (permission === 'granted') {
					settings.notify = true;
					settings.sound = false;
					if (soundCheckbox) soundCheckbox.checked = false;
					saveSettings(settings);
					applySettings(settings);
					if (!settingsSidebar._notificationShown) {
						new Notification('Notifications enabled', {
							body: 'You will receive alerts here.'
						});
						settingsSidebar._notificationShown = true;
					}
				} else {
					settings.notify = false;
					e.target.checked = false;
					saveSettings(settings);
					applySettings(settings);
					alert('Please allow notifications in your browser settings.');
				}
			});
		} else {
			settings.notify = false;
			saveSettings(settings);
			applySettings(settings);
			if (settingsSidebar._notificationShown) {
				settingsSidebar._notificationShown = false;
			}
		}
	});

	on(soundCheckbox, 'change', e => {
		settings.sound = e.target.checked;
		if (settings.sound) {
			settings.notify = false;
			if (notifyCheckbox) notifyCheckbox.checked = false;
		}
		saveSettings(settings);
		applySettings(settings);
	});
}

// Check if device is mobile
function isMobile() {
	return window.innerWidth <= 1024;
}

// Open the settings panel
function openSettingsPanel() {
	const settingsSidebar = $id('settings-sidebar');
	const sidebar = $id('sidebar');
	const sidebarMask = $id('mobile-sidebar-mask');
	
	if (!settingsSidebar || !sidebar) return;
	
	if (isMobile()) {
		sidebar.classList.remove('mobile-open');
		settingsSidebar.style.display = 'flex';
		settingsSidebar.offsetHeight;
		settingsSidebar.classList.add('mobile-open');
		if (sidebarMask) {
			sidebarMask.classList.add('active');
		}
	} else {
		settingsSidebar.style.display = 'flex';
		settingsSidebar.offsetHeight;
		settingsSidebar.classList.add('open');
	}
	
	setupSettingsPanel();
}

// Close the settings panel
function closeSettingsPanel() {
	const settingsSidebar = $id('settings-sidebar');
	const sidebarMask = $id('mobile-sidebar-mask');

	if (!settingsSidebar) return;

	const animationEnded = () => {
		settingsSidebar.style.display = 'none';
		settingsSidebar.removeEventListener('transitionend', animationEnded);
	};

	if (isMobile()) {
		settingsSidebar.classList.remove('mobile-open');
		if (sidebarMask) {
			sidebarMask.classList.remove('active');
		}
		settingsSidebar.addEventListener('transitionend', animationEnded);
		setTimeout(() => {
			if (!settingsSidebar.classList.contains('mobile-open')) {
				settingsSidebar.style.display = 'none';
			}
		}, 350);
	} else {
		settingsSidebar.classList.remove('open');
		settingsSidebar.addEventListener('transitionend', animationEnded);
		setTimeout(() => {
			if (!settingsSidebar.classList.contains('open')) {
				settingsSidebar.style.display = 'none';
			}
		}, 350);
	}
}

// Initialize settings on page load
function initSettings() {
	const settings = loadSettings();
	applySettings(settings);
	
	// Apply theme and color mode
	applyTheme(settings.theme || 'theme-sapphire', settings.themeMode || 'system');
	
	window.addEventListener('languageChange', () => {
		const settingsTitle = $id('settings-title');
		if (settingsTitle) {
			settingsTitle.textContent = t('settings.title', 'Settings');
		}
	});
}

// Maximum notification text length
const MAX_NOTIFY_TEXT_LEN = 100;

function truncateText(text) {
	return text.length > MAX_NOTIFY_TEXT_LEN ? text.slice(0, MAX_NOTIFY_TEXT_LEN) + '...' : text;
}

// Play sound notification
function playSoundNotification() {
	try {
		const ctx = new (window.AudioContext || window.webkitAudioContext)();
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.frequency.value = 1000;
		osc.connect(gain);
		gain.connect(ctx.destination);
		osc.start();
		gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
		setTimeout(() => {
			osc.stop();
			ctx.close();
		}, 600);
	} catch (e) {
		console.error('Sound notification failed', e);
	}
}

// Show desktop notification
function showDesktopNotification(roomName, text, msgType, sender) {
	if (!('Notification' in window) || Notification.permission !== 'granted') return;
	let body;
	const senderPrefix = sender ? `${sender}:` : '';
	if (msgType === 'image' || msgType === 'private image') {
		body = `${senderPrefix}${t('notification.image', '[image]')}`;
		if (msgType === 'private image') {
			body = `${t('notification.private', '(Private)')}${body}`;
		}
	} else if (msgType === 'text' || msgType === 'private text') {
		body = `${senderPrefix}${truncateText(text)}`;
		if (msgType === 'private text') {
			body = `${t('notification.private', '(Private)')}${body}`;
		}
	} else {
		body = truncateText(text);
	}
	new Notification(`#${roomName}`, {
		body
	});
}

// Notify message entry point
export function notifyMessage(roomName, msgType, text, sender) {
	const settings = loadSettings();
	if (settings.notify) {
		showDesktopNotification(roomName, text, msgType, sender);
	} else if (settings.sound) {
		playSoundNotification();
	}
}

export {
	openSettingsPanel,
	closeSettingsPanel,
	initSettings
};