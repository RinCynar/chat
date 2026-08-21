// Import necessary modules
// 导入必要的模块
import {
	createAvatarSVG
} from './util.avatar.js';
import {
	roomsData,
	activeRoomIndex
} from './room.js';
import {
	escapeHTML,
	textToHTML
} from './util.string.js';
import {
	$,
	$id,
	createElement,
	on,
	off,
	addClass,
	removeClass
} from './util.dom.js';
import {
	formatFileSize
} from './util.file.js';
import {
	isImageFile,
	isVideoFile,
	isAudioFile,
	isMediaFile
} from './util.media.js';
import {
	t
} from './util.i18n.js';

// Render the chat area
// 渲染聊天区域
export function renderChatArea() {
	const chatArea = $id('chat-area');
	if (!chatArea) return;
	if (activeRoomIndex < 0 || !roomsData[activeRoomIndex]) {
		chatArea.innerHTML = '';
		return;
	}
	chatArea.innerHTML = '';
	roomsData[activeRoomIndex].messages.forEach(m => {
		if (m.type === 'me') addMsg(m.text, true, m.msgType || 'text', m.timestamp);
		else if (m.type === 'system') addSystemMsg(m.key ? t(m.key, m.text) : m.text, true, m.timestamp, m.key);
		else addOtherMsg(m.text, m.userName, m.avatar, true, m.msgType || 'text', m.timestamp);
	});
}

// Add a message to the chat area
// 添加消息到聊天区域
export function addMsg(text, isHistory = false, msgType = 'text', timestamp = null) {
	let ts = isHistory ? timestamp : (timestamp || Date.now());
	if (!ts) return;
	if (!isHistory && activeRoomIndex >= 0) {
		roomsData[activeRoomIndex].messages.push({
			type: 'me',
			text,
			msgType,
			timestamp: ts
		})
	}	const chatArea = $id('chat-area');
	if (!chatArea) return;
	let className = 'bubble me' + (msgType.includes('_private') ? ' private-message' : '');
	const date = new Date(ts);
	const time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');	let contentHtml = '';	if (msgType === 'image' || msgType === 'image_private') {
		// Handle image messages (can contain both text and images)
		if (typeof text === 'object' && text.images && Array.isArray(text.images)) {
			// New multi-image format: {text: "", images: ["data:image...", "data:image..."]}
			const messageText = text.text ? textToHTML(text.text) : '';
			const imageElements = text.images.map(imgData => {
				const safeImgSrc = escapeHTML(imgData).replace(/javascript:/gi, '');
				return `<img src="${safeImgSrc}" alt="image" class="bubble-img">`;
			}).join('');
					if (messageText && imageElements) {
				// Mixed content: text + images
				contentHtml = `<div class="mixed-content">
					<div class="message-text">${messageText}</div>
					${imageElements}
				</div>`;
			} else if (imageElements) {
				// Images only
				contentHtml = imageElements;
			} else {
				// Fallback to text only
				contentHtml = messageText;
			}
		} else if (typeof text === 'object' && text.image) {
			// Legacy single image format: {text: "", image: "data:image..."}
			const safeImgSrc = escapeHTML(text.image).replace(/javascript:/gi, '');
			const messageText = text.text ? textToHTML(text.text) : '';
			
			if (messageText) {
				// Mixed content: text + image
				contentHtml = `<div class="mixed-content">
					<div class="message-text">${messageText}</div>
					<img src="${safeImgSrc}" alt="image" class="bubble-img">
				</div>`;
			} else {
				// Image only
				contentHtml = `<img src="${safeImgSrc}" alt="image" class="bubble-img">`;
			}
		} else {
			// Legacy format: plain image data URL
			const safeImgSrc = escapeHTML(text).replace(/javascript:/gi, '');
			contentHtml = `<img src="${safeImgSrc}" alt="image" class="bubble-img">`;
		}
	} else if (msgType === 'file' || msgType === 'file_private') {
		// Handle file messages
		contentHtml = renderFileMessage(text, true);
		// Add file-bubble class for special timestamp positioning
		className += ' file-bubble';
	} else {
		contentHtml = textToHTML(text)
	}
	const div = createElement('div', {
		class: className
	}, `<span class="bubble-content">${contentHtml}</span><span class="bubble-meta">${time}</span>`);
	chatArea.appendChild(div);
	chatArea.scrollTop = chatArea.scrollHeight
}

// Add a message from another user to the chat area
// 添加来自其他用户的消息到聊天区域
export function addOtherMsg(msg, userName = '', avatar = '', isHistory = false, msgType = 'text', timestamp = null) {
	if (!userName && activeRoomIndex >= 0) {
		const rd = roomsData[activeRoomIndex];
		// 优先使用文件消息自带的 userName 字段
		if (msg && msg.userName) {
			userName = msg.userName;
		} else if (rd && msg && msg.clientId && rd.userMap[msg.clientId]) {
			userName = rd.userMap[msg.clientId].userName || rd.userMap[msg.clientId].username || rd.userMap[msg.clientId].name || t('ui.anonymous', 'Anonymous')
		}
	}
	userName = userName || t('ui.anonymous', 'Anonymous');
	let ts = isHistory ? timestamp : (timestamp || Date.now());
	if (!ts) return;
	const chatArea = $id('chat-area');
	if (!chatArea) return;
	const bubbleWrap = createElement('div', {
		class: 'bubble-other-wrap'
	});	let contentHtml = '';	if (msgType === 'image' || msgType === 'image_private') {
		// Handle image messages (can contain both text and images)
		if (typeof msg === 'object' && msg.images && Array.isArray(msg.images)) {
			// New multi-image format: {text: "", images: ["data:image...", "data:image..."]}
			const messageText = msg.text ? textToHTML(msg.text) : '';
			const imageElements = msg.images.map(imgData => {
				const safeImgSrc = escapeHTML(imgData).replace(/javascript:/gi, '');
				return `<img src="${safeImgSrc}" alt="image" class="bubble-img">`;
			}).join('');
					if (messageText && imageElements) {
				// Mixed content: text + images
				contentHtml = `<div class="mixed-content">
					<div class="message-text">${messageText}</div>
					${imageElements}
				</div>`;
			} else if (imageElements) {
				// Images only
				contentHtml = imageElements;
			} else {
				// Fallback to text only
				contentHtml = messageText;
			}
		} else if (typeof msg === 'object' && msg.image) {
			// Legacy single image format: {text: "", image: "data:image..."}
			const safeImgSrc = escapeHTML(msg.image).replace(/javascript:/gi, '');
			const messageText = msg.text ? textToHTML(msg.text) : '';
			
			if (messageText) {
				// Mixed content: text + image
				contentHtml = `<div class="mixed-content">
					<div class="message-text">${messageText}</div>
					<img src="${safeImgSrc}" alt="image" class="bubble-img">
				</div>`;
			} else {
				// Image only
				contentHtml = `<img src="${safeImgSrc}" alt="image" class="bubble-img">`;
			}
		} else {
			// Legacy format: plain image data URL
			const safeImgSrc = escapeHTML(msg).replace(/javascript:/gi, '');
			contentHtml = `<img src="${safeImgSrc}" alt="image" class="bubble-img">`;
		}
	} else if (msgType === 'file' || msgType === 'file_private') {
		// Handle file messages
		contentHtml = renderFileMessage(msg, false);	} else {
		contentHtml = textToHTML(msg)
	}
	const safeUserName = escapeHTML(userName);
	const date = new Date(ts);
	const time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
	let bubbleClasses = 'bubble other';
	if (msgType && msgType.includes('_private')) {
		bubbleClasses += ' private-message'
	}
	if (msgType === 'file' || msgType === 'file_private') {
		bubbleClasses += ' file-bubble';
	}
	bubbleWrap.innerHTML = `<span class="avatar"></span><div class="bubble-other-main"><div class="${bubbleClasses}"><div class="bubble-other-name">${safeUserName}</div><span class="bubble-content">${contentHtml}</span><span class="bubble-meta">${time}</span></div></div>`;
	const svg = createAvatarSVG(userName);
	const avatarEl = $('.avatar', bubbleWrap);
	if (avatarEl) {
		const cleanSvg = svg.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
		avatarEl.innerHTML = cleanSvg
	}
	chatArea.appendChild(bubbleWrap);
	chatArea.scrollTop = chatArea.scrollHeight
}

// Add a system message to the chat area
// 添加系统消息到聊天区域
export function addSystemMsg(text, isHistory = false, timestamp = null, key = null) {
	if (!isHistory && activeRoomIndex >= 0) {
		const ts = timestamp || Date.now();
		roomsData[activeRoomIndex].messages.push({
			type: 'system',
			text,
			key,
			timestamp: ts
		});
	}
	const chatArea = $id('chat-area');
	if (!chatArea) return;
	const safeText = textToHTML(key ? t(key, text) : text);
	const div = createElement('div', {
		class: 'bubble system'
	}, `<span class="bubble-content">${safeText}</span>`);
	chatArea.appendChild(div);
	chatArea.scrollTop = chatArea.scrollHeight;
}

// Update the style of the chat input area
// 更新聊天输入区域的样式
export function updateChatInputStyle() {
	const rd = roomsData[activeRoomIndex];
	const chatInputArea = $('.chat-input-area');
	const placeholder = $('.input-field-placeholder');
	const inputMessageInput = $('.input-message-input');
	if (!chatInputArea || !placeholder || !inputMessageInput) return;	if (rd && rd.privateChatTargetId) {
		addClass(chatInputArea, 'private-mode');
		addClass(inputMessageInput, 'private-mode');
		placeholder.textContent = `${t('ui.private_message_to', 'Private Message to')} ${escapeHTML(rd.privateChatTargetName)}`
	} else {
		removeClass(chatInputArea, 'private-mode');
		removeClass(inputMessageInput, 'private-mode');
		placeholder.textContent = t('ui.message', 'Message')
	}
	const html = inputMessageInput.innerHTML.replace(/<br\s*\/?>(\s*)?/gi, '').replace(/&nbsp;/g, '').replace(/\u200B/g, '').trim();
	placeholder.style.opacity = (html === '') ? '1' : '0'
}

// Setup image preview functionality
// 设置图片预览功能
export function setupImagePreview() {
	window.showImageModal = showImageModal;
	on($id('chat-area'), 'click', function(e) {
		const target = e.target;
		if (target.tagName === 'IMG' && (target.closest('.bubble-content') || target.closest('.bubble') || target.closest('.file-image-thumb-wrap'))) {
			showImageModal(target.src);
		}
	});
}

// Show the image modal
// 显示图片模态框
export function showImageModal(src) {
	const modal = createElement('div', {
		class: 'img-modal-bg'
	}, `<div class="img-modal-blur"></div><div class="img-modal-content img-modal-content-overflow"><img src="${src}"class="img-modal-img"/><span class="img-modal-close">&times;</span></div>`);
	document.body.appendChild(modal);
	on($('.img-modal-close', modal), 'click', () => modal.remove());
	on(modal, 'click', (e) => {
		if (e.target === modal) modal.remove()
	});
	const img = $('img', modal);
	let scale = 1;
	let isDragging = false;
	let lastX = 0,
		lastY = 0;
	let offsetX = 0,
		offsetY = 0;
	img.ondragstart = function(e) {
		e.preventDefault()
	};
	on(img, 'wheel', function(ev) {
		ev.preventDefault();
		const prevScale = scale;
		scale += ev.deltaY < 0 ? 0.1 : -0.1;
		scale = Math.max(0.2, Math.min(5, scale));
		if (scale === 1) {
			offsetX = 0;
			offsetY = 0
		}
		updateTransform()
	});

	function updateTransform() {
		img.style.transform = `translate(${offsetX}px,${offsetY}px)scale(${scale})`;
		img.style.cursor = scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
	}
	on(img, 'mousedown', function(ev) {
		if (scale <= 1) return;
		isDragging = true;
		lastX = ev.clientX;
		lastY = ev.clientY;
		img.style.cursor = 'grabbing';
		document.body.style.userSelect = 'none'
	});

	function onMouseMove(ev) {
		if (!isDragging) return;
		offsetX += ev.clientX - lastX;
		offsetY += ev.clientY - lastY;
		lastX = ev.clientX;
		lastY = ev.clientY;
		updateTransform()
	}

	function onMouseUp() {
		if (isDragging) {
			isDragging = false;
			img.style.cursor = 'grab';
			document.body.style.userSelect = ''
		}
	}
	on(window, 'mousemove', onMouseMove);
	on(window, 'mouseup', onMouseUp);
	on(img, 'dblclick', function() {
		scale = 1;
		offsetX = 0;
		offsetY = 0;
		updateTransform()
	});
	const cleanup = () => {
		off(window, 'mousemove', onMouseMove);
		off(window, 'mouseup', onMouseUp);
		document.body.style.userSelect = ''
	};
	on(modal, 'remove', cleanup);
	on($('.img-modal-close', modal), 'click', cleanup);
	updateTransform()
}

// Render file message content
// 渲染文件消息内容
function renderFileMessage(fileData, isSender) {
	const {
		fileId,
		fileName,
		originalSize,
		totalVolumes,
		fileCount,
		isArchive,
		thumbnail
	} = fileData;
	
	// For archive files, show file count and total size
	let displayName, displayMeta;
	if (isArchive && fileCount) {
		displayName = `${fileCount}${t('file.files', ' files')}`;
		displayMeta = `${t('file.total', 'Total')}: ${formatFileSize(originalSize)}`;
	} else {
		displayName = fileName;
		displayMeta = formatFileSize(originalSize);
	}
	
	const safeDisplayName = escapeHTML(displayName);

	// Check actual file transfer status
	const transfer = window.fileTransfers ? window.fileTransfers.get(fileId) : null;
	let statusText = '';
	let progressWidth = '0%';
	let downloadBtnStyle = 'display: none;';
	let showProgress = false;
	
	if (transfer) {
		if (transfer.status === 'sending') {
			const progress = (transfer.sentVolumes / transfer.totalVolumes) * 100;
			progressWidth = `${progress}%`;
			statusText = `${t('file.sending', 'Sending')} ${transfer.sentVolumes}/${transfer.totalVolumes}`;
			showProgress = true;
		} else if (transfer.status === 'receiving') {
			const progress = (transfer.receivedVolumes.size / transfer.totalVolumes) * 100;
			progressWidth = `${progress}%`;
			statusText = `${t('file.receiving', 'Receiving')} ${transfer.receivedVolumes.size}/${transfer.totalVolumes}`;
			showProgress = true;
		} else if (transfer.status === 'completed') {
			downloadBtnStyle = isSender ? 'display: none;' : 'display: flex;';
		}
	} else if (isSender) {
		downloadBtnStyle = 'display: none;';
	} else {
		downloadBtnStyle = 'display: flex;';
	}
	
	// Check if this is a media file with preview available
	const previewSrc = (transfer && (transfer.objectUrl || transfer.thumbnail)) || thumbnail || fileData.previewUrl;
	const isImg = isImageFile(fileName) && !isArchive;
	const isVid = isVideoFile(fileName) && !isArchive;
	const isAud = isAudioFile(fileName) && !isArchive;
	
	let fileIcon = '📄';
	if (isArchive) fileIcon = '📦';
	else if (isImg) fileIcon = '🖼️';
	else if (isVid) fileIcon = '🎬';
	else if (isAud) fileIcon = '🎵';

	// Image Card with Zoom
	if (isImg && previewSrc) {
		return `
			<div class="file-message image-file-message" data-file-id="${fileId}">
				<div class="file-image-card">
					<div class="file-image-thumb-wrap" onclick="window.showImageModal('${previewSrc}')" title="${safeDisplayName}">
						<img src="${previewSrc}" alt="${safeDisplayName}" class="file-image-thumb bubble-img" loading="lazy">
						<div class="file-image-zoom-badge">
							<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
								<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 14z"/>
							</svg>
						</div>
					</div>
					<div class="file-main-content">
						<div class="file-info">
							<div class="file-icon">🖼️</div>
							<div class="file-details">
								<div class="file-name" title="${safeDisplayName}">${safeDisplayName}</div>
								<div class="file-meta">${displayMeta}</div>
							</div>
						</div>
						<button class="file-download-btn ${downloadBtnStyle === 'display: none;' ? '' : 'show'}" style="${downloadBtnStyle}" onclick="window.downloadFile('${fileId}')" title="${t('action.download', 'Download')}">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
						</button>
					</div>
					${showProgress ? `<div class="file-progress-container">
						<div class="file-progress-bar">
							<div class="file-progress" style="width: ${progressWidth}"></div>
						</div>
						<div class="file-status">${statusText}</div>
					</div>` : ''}
				</div>
			</div>
		`;
	}

	// Video Card with Inline Player
	if (isVid && previewSrc) {
		return `
			<div class="file-message video-file-message" data-file-id="${fileId}">
				<div class="file-video-card">
					<div class="file-video-player-wrap">
						<video src="${previewSrc}" controls preload="metadata" playsinline class="file-video-player"></video>
					</div>
					<div class="file-main-content">
						<div class="file-info">
							<div class="file-icon">🎬</div>
							<div class="file-details">
								<div class="file-name" title="${safeDisplayName}">${safeDisplayName}</div>
								<div class="file-meta">${displayMeta}</div>
							</div>
						</div>
						<button class="file-download-btn ${downloadBtnStyle === 'display: none;' ? '' : 'show'}" style="${downloadBtnStyle}" onclick="window.downloadFile('${fileId}')" title="${t('action.download', 'Download')}">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
						</button>
					</div>
					${showProgress ? `<div class="file-progress-container">
						<div class="file-progress-bar">
							<div class="file-progress" style="width: ${progressWidth}"></div>
						</div>
						<div class="file-status">${statusText}</div>
					</div>` : ''}
				</div>
			</div>
		`;
	}

	// Audio Card with Inline Player
	if (isAud && previewSrc) {
		return `
			<div class="file-message audio-file-message" data-file-id="${fileId}">
				<div class="file-audio-card">
					<div class="file-main-content">
						<div class="file-info">
							<div class="file-icon">🎵</div>
							<div class="file-details">
								<div class="file-name" title="${safeDisplayName}">${safeDisplayName}</div>
								<div class="file-meta">${displayMeta}</div>
							</div>
						</div>
						<button class="file-download-btn ${downloadBtnStyle === 'display: none;' ? '' : 'show'}" style="${downloadBtnStyle}" onclick="window.downloadFile('${fileId}')" title="${t('action.download', 'Download')}">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
						</button>
					</div>
					<div class="file-audio-player-wrap">
						<audio src="${previewSrc}" controls preload="metadata" class="file-audio-player"></audio>
					</div>
					${showProgress ? `<div class="file-progress-container">
						<div class="file-progress-bar">
							<div class="file-progress" style="width: ${progressWidth}"></div>
						</div>
						<div class="file-status">${statusText}</div>
					</div>` : ''}
				</div>
			</div>
		`;
	}

	return `
		<div class="file-message" data-file-id="${fileId}">
			<div class="file-main-content">
				<div class="file-info">
					<div class="file-icon">${fileIcon}</div>
					<div class="file-details">
						<div class="file-name" title="${safeDisplayName}">${safeDisplayName}</div>
						<div class="file-meta">${displayMeta}</div>
					</div>
				</div>
				<button class="file-download-btn show" style="${downloadBtnStyle}" onclick="window.downloadFile('${fileId}')" title="${t('action.download', 'Download')}">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
				</button>
			</div>
			${showProgress ? `<div class="file-progress-container">
				<div class="file-progress-bar">
					<div class="file-progress" style="width: ${progressWidth}"></div>
				</div>
				<div class="file-status">${statusText}</div>
			</div>` : ''}
		</div>
	`;
}

// Automatically adjust the height of the input area
// 自动调整输入区域的高度
export function autoGrowInput() {
	const input = $('.input-message-input');
	if (!input) return;
	const html = input.innerHTML.replace(/<br\s*\/?>(\s*)?/gi, '').replace(/&nbsp;/g, '').replace(/\u200B/g, '').trim();
	if (html === '') {
		input.style.height = '24px';
	} else {
		input.style.height = 'auto';
		input.style.height = Math.min(120, Math.max(24, input.scrollHeight)) + 'px';
	}
}

// Handle pasting text as plain text
// 处理粘贴为纯文本
function handlePasteAsPlainText(element) {
	if (!element) return;
	on(element, 'paste', function(e) {
		e.preventDefault();
		let text = '';
		if (e.clipboardData || window.clipboardData) {
			text = (e.clipboardData || window.clipboardData).getData('text/plain')
		}
		if (document.queryCommandSupported('insertText')) {
			document.execCommand('insertText', false, text)
		} else {
			const selection = window.getSelection();
			if (selection.rangeCount) {
				const range = selection.getRangeAt(0);
				range.deleteContents();
				const textNode = document.createTextNode(text);
				range.insertNode(textNode);
				range.setStartAfter(textNode);
				range.setEndAfter(textNode);
				selection.removeAllRanges();
				selection.addRange(range)
			}
		}
	})
}

// Setup input placeholder functionality
// 设置输入框占位符功能
export function setupInputPlaceholder() {
	const input = $('.input-message-input');
	const placeholder = $('.input-field-placeholder');
	if (!input || !placeholder) return;

	function checkEmpty() {
		const html = input.innerHTML.replace(/<br\s*\/?>(\s*)?/gi, '').replace(/&nbsp;/g, '').replace(/\u200B/g, '').trim();
		if (html === '') {
			placeholder.style.opacity = '1'
		} else {
			placeholder.style.opacity = '0'
		}
		autoGrowInput()
	}
	on(input, 'input', checkEmpty);
	on(input, 'blur', checkEmpty);
	on(input, 'focus', checkEmpty);
	handlePasteAsPlainText(input);
	checkEmpty();
	autoGrowInput();
	updateChatInputStyle()
}