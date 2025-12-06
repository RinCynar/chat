// Theme utility functions - Material You Design
// 主题工具函数 - Material You 设计

/**
 * Available themes: 'dark' (default) and 'light'
 * 可用主题：'dark'（默认）和 'light'
 */
const THEMES = {
	DARK: 'dark',
	LIGHT: 'light'
};

// Default theme is dark
// 默认主题为深色
const DEFAULT_THEME = THEMES.DARK;

/**
 * Get current theme from settings
 * 从设置中获取当前主题
 */
export function getCurrentTheme() {
	try {
		const settings = JSON.parse(localStorage.getItem('settings') || '{}');
		
		// If no theme is set (first-time visitor), use dark as default
		// 如果没有设置主题（首次访问），使用深色作为默认
		if (!settings.theme) {
			settings.theme = DEFAULT_THEME;
			localStorage.setItem('settings', JSON.stringify(settings));
			return DEFAULT_THEME;
		}
		
		// Validate theme value
		// 验证主题值
		const theme = settings.theme;
		if (theme === THEMES.DARK || theme === THEMES.LIGHT) {
			return theme;
		}
		
		// If invalid theme, reset to default
		// 如果主题无效，重置为默认
		return DEFAULT_THEME;
	} catch {
		// If there's an error, use dark as fallback
		// 如果出现错误，使用深色作为备选
		return DEFAULT_THEME;
	}
}

/**
 * Apply theme to the document
 * 应用主题到文档
 */
export function applyTheme(themeId) {
	// Validate theme
	// 验证主题
	if (themeId !== THEMES.DARK && themeId !== THEMES.LIGHT) {
		console.warn(`Invalid theme "${themeId}", using default dark theme`);
		themeId = DEFAULT_THEME;
	}
	
	// Apply theme to body element
	// 将主题应用到 body 元素
	document.body.setAttribute('data-theme', themeId);
	
	// Save to settings
	// 保存到设置
	try {
		const settings = JSON.parse(localStorage.getItem('settings') || '{}');
		settings.theme = themeId;
		localStorage.setItem('settings', JSON.stringify(settings));
	} catch (error) {
		console.error('Failed to save theme preference:', error);
	}
	
	// Dispatch custom event for theme change
	// 触发主题变更自定义事件
	window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme: themeId } }));
	
	return true;
}

/**
 * Toggle between dark and light themes
 * 在深色和浅色主题之间切换
 */
export function toggleTheme() {
	const currentTheme = getCurrentTheme();
	const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
	applyTheme(newTheme);
	return newTheme;
}

/**
 * Initialize theme on page load
 * 页面加载时初始化主题
 */
export function initTheme() {
	const currentTheme = getCurrentTheme();
	applyTheme(currentTheme);
}

/**
 * Check if current theme is dark
 * 检查当前主题是否为深色
 */
export function isDarkTheme() {
	return getCurrentTheme() === THEMES.DARK;
}

/**
 * Get all available themes
 * 获取所有可用主题
 */
export function getAllThemes() {
	return Object.values(THEMES);
}

/**
 * Export theme constants
 * 导出主题常量
 */
export { THEMES, DEFAULT_THEME };
