// Import DOM helpers
// 导入 DOM 辅助函数
import {
	$,
	on
} from './util.dom.js';
import 'emoji-picker-element';
// Add emoji picker styles to document
// 向文档添加 emoji 选择器样式
const addEmojiPickerStyles = () => {
	if (document.querySelector('#emoji-picker-styles')) return;
	const style = document.createElement('style');
	style.id = 'emoji-picker-styles';
	style.textContent = `
		emoji-picker {
			--background: var(--md-sys-color-surface-container-highest, #E6E0E9);
			--border-color: var(--md-sys-color-outline-variant, rgba(0,0,0,0.1));
			--border-radius: var(--md-sys-shape-corner-xl, 20px);
			--emoji-padding: 0.4rem;
			--category-emoji-size: 1.2rem;
			--indicator-color: var(--md-sys-color-primary, #0B57D0);
			--font-family: var(--md-sys-font, sans-serif);
			position: absolute;
			bottom: 56px;
			left: 0;
			z-index: 50;
			box-shadow: var(--md-sys-elevation-3, 0 4px 16px rgba(0,0,0,0.15));
			display: none;
			opacity: 0;
			transform: translateY(-8px) scale(0.95);
			transition: opacity 0.2s ease, transform 0.2s ease;
		}
		emoji-picker.show {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		@media (max-width: 768px) {
			emoji-picker {
				left: -10px;
				max-width: 90vw;
			}
		}
	`;
	document.head.appendChild(style);
};
// Setup emoji picker for chat input
// 为聊天输入框设置 emoji 选择器
export function setupEmojiPicker({
	btnSelector = '.chat-emoji-btn',
	inputSelector = '.input-message-input'
} = {}) {
	const btn = $(btnSelector);
	const input = $(inputSelector);
	if (!btn || !input) return;
	try {
		addEmojiPickerStyles();
		const oldPicker = $('emoji-picker', btn.parentNode);
		if (oldPicker) oldPicker.remove();
		const picker = document.createElement('emoji-picker');
		picker.style.display = 'none';
		btn.parentNode.style.position = 'relative';
		btn.parentNode.appendChild(picker);
		// Emoji click event
		// 监听 emoji 点击事件
		picker.addEventListener('emoji-click', event => {
			insertEmoji(input, event.detail.unicode);
			hidePickerWithAnimation();
		});
		
		function showPickerWithAnimation() {
			picker.style.display = 'block';
			// 强制触发重绘，然后添加打开动画
			picker.offsetHeight; // 强制重绘
			picker.classList.add('show');
		}
		
		function hidePickerWithAnimation() {
			picker.classList.remove('show');
			setTimeout(() => {
				picker.style.display = 'none';
			}, 300);
		}
		
		// Button click toggles picker
		// 按钮点击切换选择器显示
		on(btn, 'click', (ev) => {
			ev.stopPropagation();
			if (picker.style.display === 'none') {
				showPickerWithAnimation();
			} else {
				hidePickerWithAnimation();
			}
		});
		// Hide picker when clicking outside
		// 点击外部隐藏选择器
		on(document, 'click', (ev) => {
			if (!picker.contains(ev.target) && ev.target !== btn) {
		hidePickerWithAnimation();
			}
		});
	} catch (error) {
		console.error('Failed to initialize emoji picker:', error)
	}
}
// Insert emoji into input at cursor
// 在光标处插入 emoji 到输入框
function insertEmoji(input, emoji) {
	input.focus();
	if (document.getSelection && window.getSelection) {
		let sel = window.getSelection();
		if (!sel.rangeCount) return;
		let range = sel.getRangeAt(0);
		range.deleteContents();
		range.insertNode(document.createTextNode(emoji));
		range.collapse(false);
		sel.removeAllRanges();
		sel.addRange(range)
	} else {
		input.innerText += emoji
	}
	input.dispatchEvent(new Event('input'))
}