// Theme utility functions with Material You (Material Design 3) Color Systems
// Material You (Material Design 3) 动态色彩主题工具函数

export const THEMES = [
	{
		id: 'theme-sapphire',
		name: 'Sapphire Ocean',
		nameZh: '海蓝宝石',
		color: '#0B57D0',
		secondaryColor: '#535F70',
		tertiaryColor: '#7D5260',
		palette: {
			'--md-sys-color-primary': '#0B57D0',
			'--md-sys-color-on-primary': '#FFFFFF',
			'--md-sys-color-primary-container': '#D3E3FD',
			'--md-sys-color-on-primary-container': '#041E49',
			'--md-sys-color-secondary': '#535F70',
			'--md-sys-color-on-secondary': '#FFFFFF',
			'--md-sys-color-secondary-container': '#D7E3F8',
			'--md-sys-color-on-secondary-container': '#101C2B',
			'--md-sys-color-tertiary': '#6750A4',
			'--md-sys-color-on-tertiary': '#FFFFFF',
			'--md-sys-color-tertiary-container': '#EADDFF',
			'--md-sys-color-on-tertiary-container': '#21005D',
			'--md-sys-color-surface': '#F8F9FA',
			'--md-sys-color-on-surface': '#1F1F1F',
			'--md-sys-color-surface-variant': '#E1E3E1',
			'--md-sys-color-on-surface-variant': '#444746',
			'--md-sys-color-surface-container-lowest': '#FFFFFF',
			'--md-sys-color-surface-container-low': '#F3F4F6',
			'--md-sys-color-surface-container': '#EDEFF1',
			'--md-sys-color-surface-container-high': '#E7E9EC',
			'--md-sys-color-surface-container-highest': '#E1E3E6',
			'--md-sys-color-outline': '#747775',
			'--md-sys-color-outline-variant': '#C4C7C5',
			'--md-sys-color-error': '#BA1A1A',
			'--md-sys-color-error-container': '#FFDAD6',
			'--md-sys-color-on-error-container': '#410002',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.08)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(11, 87, 208, 0.05) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(103, 80, 164, 0.04) 0px, transparent 50%), #F8F9FA'
		}
	},
	{
		id: 'theme-sage',
		name: 'Botanical Sage',
		nameZh: '鼠尾草绿',
		color: '#2E6C56',
		secondaryColor: '#4F6354',
		tertiaryColor: '#3D6373',
		palette: {
			'--md-sys-color-primary': '#2E6C56',
			'--md-sys-color-on-primary': '#FFFFFF',
			'--md-sys-color-primary-container': '#CCE8DB',
			'--md-sys-color-on-primary-container': '#002116',
			'--md-sys-color-secondary': '#4F6354',
			'--md-sys-color-on-secondary': '#FFFFFF',
			'--md-sys-color-secondary-container': '#D2E8D5',
			'--md-sys-color-on-secondary-container': '#0D1F14',
			'--md-sys-color-tertiary': '#6750A4',
			'--md-sys-color-on-tertiary': '#FFFFFF',
			'--md-sys-color-tertiary-container': '#EADDFF',
			'--md-sys-color-on-tertiary-container': '#21005D',
			'--md-sys-color-surface': '#F7F9F7',
			'--md-sys-color-on-surface': '#191C1A',
			'--md-sys-color-surface-variant': '#DBE5DE',
			'--md-sys-color-on-surface-variant': '#404944',
			'--md-sys-color-surface-container-lowest': '#FFFFFF',
			'--md-sys-color-surface-container-low': '#F1F5F2',
			'--md-sys-color-surface-container': '#EBF0EC',
			'--md-sys-color-surface-container-high': '#E5EAE6',
			'--md-sys-color-surface-container-highest': '#DFE5E0',
			'--md-sys-color-outline': '#707973',
			'--md-sys-color-outline-variant': '#BFC9C2',
			'--md-sys-color-error': '#BA1A1A',
			'--md-sys-color-error-container': '#FFDAD6',
			'--md-sys-color-on-error-container': '#410002',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.08)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(46, 108, 86, 0.06) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(61, 99, 115, 0.04) 0px, transparent 50%), #F7F9F7'
		}
	},
	{
		id: 'theme-coral',
		name: 'Sunset Coral',
		nameZh: '日落暖珊瑚',
		color: '#B93E2B',
		secondaryColor: '#775651',
		tertiaryColor: '#705C2E',
		palette: {
			'--md-sys-color-primary': '#B93E2B',
			'--md-sys-color-on-primary': '#FFFFFF',
			'--md-sys-color-primary-container': '#FFDAD3',
			'--md-sys-color-on-primary-container': '#410001',
			'--md-sys-color-secondary': '#775651',
			'--md-sys-color-on-secondary': '#FFFFFF',
			'--md-sys-color-secondary-container': '#FFDAD4',
			'--md-sys-color-on-secondary-container': '#2C1512',
			'--md-sys-color-tertiary': '#6750A4',
			'--md-sys-color-on-tertiary': '#FFFFFF',
			'--md-sys-color-tertiary-container': '#EADDFF',
			'--md-sys-color-on-tertiary-container': '#21005D',
			'--md-sys-color-surface': '#FFF8F6',
			'--md-sys-color-on-surface': '#231917',
			'--md-sys-color-surface-variant': '#F5DDD9',
			'--md-sys-color-on-surface-variant': '#534340',
			'--md-sys-color-surface-container-lowest': '#FFFFFF',
			'--md-sys-color-surface-container-low': '#FFF0EE',
			'--md-sys-color-surface-container': '#FAEA8',
			'--md-sys-color-surface-container-high': '#F5E4E1',
			'--md-sys-color-surface-container-highest': '#EFE0DC',
			'--md-sys-color-outline': '#857370',
			'--md-sys-color-outline-variant': '#D8C2BE',
			'--md-sys-color-error': '#BA1A1A',
			'--md-sys-color-error-container': '#FFDAD6',
			'--md-sys-color-on-error-container': '#410002',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.08)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(185, 62, 43, 0.05) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(119, 86, 81, 0.04) 0px, transparent 50%), #FFF8F6'
		}
	},
	{
		id: 'theme-lavender',
		name: 'Lavender Iris',
		nameZh: '薰衣草紫',
		color: '#6750A4',
		secondaryColor: '#625B71',
		tertiaryColor: '#7D5260',
		palette: {
			'--md-sys-color-primary': '#6750A4',
			'--md-sys-color-on-primary': '#FFFFFF',
			'--md-sys-color-primary-container': '#EADDFF',
			'--md-sys-color-on-primary-container': '#21005D',
			'--md-sys-color-secondary': '#625B71',
			'--md-sys-color-on-secondary': '#FFFFFF',
			'--md-sys-color-secondary-container': '#E8DEF8',
			'--md-sys-color-on-secondary-container': '#1D192B',
			'--md-sys-color-tertiary': '#834C69',
			'--md-sys-color-on-tertiary': '#FFFFFF',
			'--md-sys-color-tertiary-container': '#FFD8E8',
			'--md-sys-color-on-tertiary-container': '#330823',
			'--md-sys-color-surface': '#FEF7FF',
			'--md-sys-color-on-surface': '#1D1B20',
			'--md-sys-color-surface-variant': '#E7E0EC',
			'--md-sys-color-on-surface-variant': '#49454F',
			'--md-sys-color-surface-container-lowest': '#FFFFFF',
			'--md-sys-color-surface-container-low': '#F7F2FA',
			'--md-sys-color-surface-container': '#F3EDF7',
			'--md-sys-color-surface-container-high': '#ECE6F0',
			'--md-sys-color-surface-container-highest': '#E6E0E9',
			'--md-sys-color-outline': '#79747E',
			'--md-sys-color-outline-variant': '#CAC4D0',
			'--md-sys-color-error': '#BA1A1A',
			'--md-sys-color-error-container': '#FFDAD6',
			'--md-sys-color-on-error-container': '#410002',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.08)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(103, 80, 164, 0.06) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(125, 82, 96, 0.04) 0px, transparent 50%), #FEF7FF'
		}
	},
	{
		id: 'theme-teal',
		name: 'Ocean Teal',
		nameZh: '远洋水绿',
		color: '#006874',
		secondaryColor: '#4A6267',
		tertiaryColor: '#525E7D',
		palette: {
			'--md-sys-color-primary': '#006874',
			'--md-sys-color-on-primary': '#FFFFFF',
			'--md-sys-color-primary-container': '#9EEFFD',
			'--md-sys-color-on-primary-container': '#001F24',
			'--md-sys-color-secondary': '#4A6267',
			'--md-sys-color-on-secondary': '#FFFFFF',
			'--md-sys-color-secondary-container': '#CCE8ED',
			'--md-sys-color-on-secondary-container': '#051F23',
			'--md-sys-color-tertiary': '#6750A4',
			'--md-sys-color-on-tertiary': '#FFFFFF',
			'--md-sys-color-tertiary-container': '#EADDFF',
			'--md-sys-color-on-tertiary-container': '#21005D',
			'--md-sys-color-surface': '#F4FAFB',
			'--md-sys-color-on-surface': '#161C1D',
			'--md-sys-color-surface-variant': '#DAE4E6',
			'--md-sys-color-on-surface-variant': '#3F484A',
			'--md-sys-color-surface-container-lowest': '#FFFFFF',
			'--md-sys-color-surface-container-low': '#EDF5F6',
			'--md-sys-color-surface-container': '#E7F0F1',
			'--md-sys-color-surface-container-high': '#E1EAEC',
			'--md-sys-color-surface-container-highest': '#DBE5E6',
			'--md-sys-color-outline': '#6F797B',
			'--md-sys-color-outline-variant': '#BFC8CA',
			'--md-sys-color-error': '#BA1A1A',
			'--md-sys-color-error-container': '#FFDAD6',
			'--md-sys-color-on-error-container': '#410002',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.08)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(0, 104, 116, 0.05) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(74, 98, 103, 0.04) 0px, transparent 50%), #F4FAFB'
		}
	},
	{
		id: 'theme-midnight',
		name: 'Obsidian Dark',
		nameZh: '黑曜暗夜',
		color: '#A8C7FA',
		secondaryColor: '#BDC7DC',
		tertiaryColor: '#D0BCFF',
		isDark: true,
		palette: {
			'--md-sys-color-primary': '#A8C7FA',
			'--md-sys-color-on-primary': '#062E6F',
			'--md-sys-color-primary-container': '#0842A0',
			'--md-sys-color-on-primary-container': '#D3E3FD',
			'--md-sys-color-secondary': '#BDC7DC',
			'--md-sys-color-on-secondary': '#273141',
			'--md-sys-color-secondary-container': '#3E4758',
			'--md-sys-color-on-secondary-container': '#D9E3F9',
			'--md-sys-color-tertiary': '#D0BCFF',
			'--md-sys-color-on-tertiary': '#381E72',
			'--md-sys-color-tertiary-container': '#4F378B',
			'--md-sys-color-on-tertiary-container': '#EADDFF',
			'--md-sys-color-surface': '#111318',
			'--md-sys-color-on-surface': '#E2E2E9',
			'--md-sys-color-surface-variant': '#44474E',
			'--md-sys-color-on-surface-variant': '#C4C7D0',
			'--md-sys-color-surface-container-lowest': '#0C0E13',
			'--md-sys-color-surface-container-low': '#191C20',
			'--md-sys-color-surface-container': '#1E2025',
			'--md-sys-color-surface-container-high': '#282A2F',
			'--md-sys-color-surface-container-highest': '#33353A',
			'--md-sys-color-outline': '#8E9099',
			'--md-sys-color-outline-variant': '#44474E',
			'--md-sys-color-error': '#FFB4AB',
			'--md-sys-color-error-container': '#93000A',
			'--md-sys-color-on-error-container': '#FFDAD6',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.4)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(168, 199, 250, 0.08) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(208, 188, 255, 0.05) 0px, transparent 50%), #111318'
		}
	}
];

// Get current theme from settings
// 从设置中获取当前主题
export function getCurrentTheme() {
	try {
		const settings = JSON.parse(localStorage.getItem('settings') || '{}');
		
		if (!settings.theme) {
			settings.theme = THEMES[0].id;
			localStorage.setItem('settings', JSON.stringify(settings));
			return THEMES[0];
		}
		
		const themeId = settings.theme;
		// Backward compatibility for old theme ids (theme1, theme2, etc.)
		if (themeId === 'theme1') return THEMES[0];
		if (themeId === 'theme2') return THEMES[1];
		if (themeId === 'theme3') return THEMES[2];
		if (themeId === 'theme4') return THEMES[3];
		if (themeId === 'theme5') return THEMES[4];
		if (themeId === 'theme6' || themeId === 'theme7') return THEMES[5];
		
		return THEMES.find(theme => theme.id === themeId) || THEMES[0];
	} catch {
		return THEMES[0];
	}
}

// Apply theme to the document with smooth Material 3 transitions
// 应用主题到文档
export function applyTheme(themeId) {
	const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
	if (!theme) return false;
	
	const root = document.documentElement;
	
	// Apply all Material Design 3 tokens to root
	if (theme.palette) {
		Object.entries(theme.palette).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	}
	
	// Set dark mode attribute on root for dark theme styles
	if (theme.isDark) {
		root.setAttribute('data-theme', 'dark');
		document.body.classList.add('dark-mode');
	} else {
		root.removeAttribute('data-theme');
		document.body.classList.remove('dark-mode');
	}
	
	// Apply dynamic background to main chat area
	const mainElement = document.querySelector('.main');
	if (mainElement) {
		mainElement.style.background = 'var(--md-sys-color-app-bg)';
	}
	
	// Broadcast theme change event
	window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
	
	return true;
}

// Initialize theme on page load
// 页面加载时初始化主题
export function initTheme() {
	const currentTheme = getCurrentTheme();
	applyTheme(currentTheme.id);
}

// Get theme by ID
// 根据ID获取主题
export function getThemeById(themeId) {
	return THEMES.find(theme => theme.id === themeId) || THEMES[0];
}

// Get all available themes
// 获取所有可用主题
export function getAllThemes() {
	return THEMES;
}
