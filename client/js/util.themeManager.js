// Theme Manager with Material You Design Support
// 主题管理器 - 支持Material You设计

/**
 * 主题数据结构
 * Theme data structure
 */
const THEMES = {
  dark: {
    id: 'dark',
    name: 'Dark',
    nameZH: '深色',
    colors: {
      primary: '#e0e0ff',
      secondary: '#ccc2db',
      tertiary: '#efb8c8',
      background: '#1c1b1f'
    }
  },
  light: {
    id: 'light',
    name: 'Light',
    nameZH: '浅色',
    colors: {
      primary: '#6d0066',
      secondary: '#4a4458',
      tertiary: '#633b48',
      background: '#fffbfe'
    }
  }
};

/**
 * Storage keys
 */
const STORAGE_KEYS = {
  theme: 'nodecrypt_theme_mode',
  systemPreference: 'nodecrypt_system_preference'
};

/**
 * Get system theme preference
 * 获取系统主题偏好
 */
function getSystemThemePreference() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

/**
 * Initialize theme based on preference or system setting
 * 根据偏好或系统设置初始化主题
 * Default is always dark
 */
export function initTheme() {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    let theme = savedTheme || 'dark'; // Default to dark

    // Apply the theme
    applyTheme(theme);

    // Listen for system theme changes if using system preference
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const savedPreference = localStorage.getItem(STORAGE_KEYS.systemPreference);
        if (savedPreference === 'true') {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  } catch (error) {
    console.error('Error initializing theme:', error);
    applyTheme('dark'); // Fallback to dark
  }
}

/**
 * Apply theme to the document
 * 应用主题到文档
 */
export function applyTheme(themeName) {
  if (!THEMES[themeName]) {
    console.warn(`Theme "${themeName}" not found, using dark theme`);
    themeName = 'dark';
  }

  const root = document.documentElement;

  // Remove old theme class
  root.classList.remove('light-theme', 'dark-theme');

  // Apply new theme class
  if (themeName === 'light') {
    root.classList.add('light-theme');
    document.body.classList.add('light-theme');
  } else {
    root.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }

  // Save preference
  localStorage.setItem(STORAGE_KEYS.theme, themeName);

  // Dispatch custom event for other components to listen
  window.dispatchEvent(new CustomEvent('themechange', {
    detail: { theme: themeName }
  }));
}

/**
 * Toggle between dark and light theme
 * 在深色和浅色主题之间切换
 */
export function toggleTheme() {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  return newTheme;
}

/**
 * Get current theme
 * 获取当前主题
 */
export function getCurrentTheme() {
  const saved = localStorage.getItem(STORAGE_KEYS.theme);
  if (saved) {
    return saved;
  }

  // Default to dark
  return 'dark';
}

/**
 * Get all available themes
 * 获取所有可用主题
 */
export function getAllThemes() {
  return Object.values(THEMES);
}

/**
 * Get theme by ID
 * 根据ID获取主题
 */
export function getThemeById(themeId) {
  return THEMES[themeId] || THEMES['dark'];
}

/**
 * Enable or disable system preference
 * 启用或禁用系统偏好
 */
export function setUseSystemPreference(use) {
  localStorage.setItem(STORAGE_KEYS.systemPreference, use.toString());
  
  if (use) {
    const systemTheme = getSystemThemePreference();
    applyTheme(systemTheme);
  }
}

/**
 * Check if using system preference
 * 检查是否使用系统偏好
 */
export function isUsingSystemPreference() {
  const saved = localStorage.getItem(STORAGE_KEYS.systemPreference);
  return saved === 'true';
}

/**
 * Update theme colors dynamically
 * 动态更新主题颜色（可选功能）
 */
export function updateThemeColors(themeName, customColors) {
  const root = document.documentElement;

  if (customColors.primary) {
    root.style.setProperty('--color-primary', customColors.primary);
  }
  if (customColors.secondary) {
    root.style.setProperty('--color-secondary', customColors.secondary);
  }
  if (customColors.tertiary) {
    root.style.setProperty('--color-tertiary', customColors.tertiary);
  }
}

/**
 * Get CSS variable value
 * 获取CSS变量值
 */
export function getCSSVariable(variableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

/**
 * Export theme data for export/import
 * 导出主题数据用于导入导出
 */
export function exportThemeSettings() {
  return {
    theme: getCurrentTheme(),
    useSystemPreference: isUsingSystemPreference(),
    timestamp: new Date().toISOString()
  };
}

/**
 * Import theme settings
 * 导入主题设置
 */
export function importThemeSettings(settings) {
  if (settings.theme && THEMES[settings.theme]) {
    applyTheme(settings.theme);
  }
  
  if (typeof settings.useSystemPreference === 'boolean') {
    setUseSystemPreference(settings.useSystemPreference);
  }
}
