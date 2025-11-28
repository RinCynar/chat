// Theme UI Component
// 主题UI组件 - 处理主题切换按钮和设置

import {
  toggleTheme,
  getCurrentTheme,
  getAllThemes,
  getThemeById,
  applyTheme,
  isUsingSystemPreference,
  setUseSystemPreference
} from './util.themeManager.js';

import { t } from './util.i18n.js';

/**
 * Create theme toggle button in settings
 * 在设置中创建主题切换按钮
 */
export function createThemeToggleButton() {
  const container = document.createElement('div');
  container.className = 'settings-item';

  const label = document.createElement('div');
  label.className = 'settings-item-label';
  label.innerHTML = `
    <div>${t('settings.theme_mode')}</div>
    <div class="settings-item-description">${t('settings.theme_mode_desc')}</div>
  `;

  const toggleSwitch = document.createElement('label');
  toggleSwitch.className = 'switch';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = getCurrentTheme() === 'light';
  checkbox.addEventListener('change', (e) => {
    applyTheme(e.target.checked ? 'light' : 'dark');
  });

  const slider = document.createElement('span');
  slider.className = 'slider';

  toggleSwitch.appendChild(checkbox);
  toggleSwitch.appendChild(slider);

  container.appendChild(label);
  container.appendChild(toggleSwitch);

  return container;
}

/**
 * Create system preference toggle
 * 创建系统偏好切换
 */
export function createSystemPreferenceToggle() {
  const container = document.createElement('div');
  container.className = 'settings-item';

  const label = document.createElement('div');
  label.className = 'settings-item-label';
  label.innerHTML = `
    <div>${t('settings.follow_system')}</div>
    <div class="settings-item-description">${t('settings.follow_system_desc')}</div>
  `;

  const toggleSwitch = document.createElement('label');
  toggleSwitch.className = 'switch';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = isUsingSystemPreference();
  checkbox.addEventListener('change', (e) => {
    setUseSystemPreference(e.target.checked);
  });

  const slider = document.createElement('span');
  slider.className = 'slider';

  toggleSwitch.appendChild(checkbox);
  toggleSwitch.appendChild(slider);

  container.appendChild(label);
  container.appendChild(toggleSwitch);

  return container;
}

/**
 * Add theme toggle button to header or sidebar
 * 在顶部添加主题切换按钮
 */
export function addThemeToggleToHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  // Check if button already exists
  if (header.querySelector('.theme-toggle-btn')) return;

  const themeButton = document.createElement('button');
  themeButton.className = 'theme-toggle-btn';
  themeButton.setAttribute('title', t('settings.toggle_theme'));
  themeButton.setAttribute('aria-label', t('settings.toggle_theme'));
  
  const currentTheme = getCurrentTheme();
  themeButton.innerHTML = currentTheme === 'dark' 
    ? '🌙' // Moon for dark mode
    : '☀️';  // Sun for light mode

  themeButton.addEventListener('click', () => {
    const newTheme = toggleTheme();
    themeButton.innerHTML = newTheme === 'dark' ? '🌙' : '☀️';
  });

  // Listen for theme changes from other sources
  window.addEventListener('themechange', (e) => {
    themeButton.innerHTML = e.detail.theme === 'dark' ? '🌙' : '☀️';
  });

  // Add styles inline since we might not have direct CSS control
  Object.assign(themeButton.style, {
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    marginLeft: 'auto',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  themeButton.addEventListener('mouseover', () => {
    themeButton.style.backgroundColor = 'var(--color-surface-variant)';
  });

  themeButton.addEventListener('mouseout', () => {
    themeButton.style.backgroundColor = 'transparent';
  });

  header.appendChild(themeButton);
}

/**
 * Initialize theme UI components
 * 初始化主题UI组件
 */
export function initThemeUI() {
  // Add theme toggle to header if needed
  addThemeToggleToHeader();

  // Listen for settings panel updates
  window.addEventListener('settingspanelopen', () => {
    const settingsContent = document.querySelector('.settings-content');
    if (settingsContent) {
      updateThemeSettings();
    }
  });
}

/**
 * Update theme settings in the settings panel
 * 更新设置面板中的主题设置
 */
export function updateThemeSettings() {
  const container = document.querySelector('[data-settings-section="appearance"]');
  if (!container) return;

  // Clear existing content
  const existingToggle = container.querySelector('.theme-toggle');
  if (existingToggle) {
    existingToggle.remove();
  }

  // Add new toggle
  const themeToggleDiv = document.createElement('div');
  themeToggleDiv.className = 'theme-toggle';
  themeToggleDiv.appendChild(createThemeToggleButton());
  
  const systemPrefDiv = document.createElement('div');
  systemPrefDiv.appendChild(createSystemPreferenceToggle());
  
  container.appendChild(themeToggleDiv);
  container.appendChild(systemPrefDiv);
}

/**
 * Register keyboard shortcut for theme toggle
 * 注册快捷键用于主题切换
 */
export function registerThemeShortcut(shortcutKey = 'Shift+T') {
  document.addEventListener('keydown', (e) => {
    // Check for Shift+T or Cmd/Ctrl+Shift+T
    if ((e.shiftKey && e.key === 'T') || (e.ctrlKey && e.shiftKey && e.key === 'T') || (e.metaKey && e.shiftKey && e.key === 'T')) {
      e.preventDefault();
      toggleTheme();
    }
  });
}

/**
 * Create a theme preview card
 * 创建主题预览卡片
 */
export function createThemePreviewCard(themeName) {
  const card = document.createElement('div');
  card.className = 'theme-preview-card';
  
  const theme = getThemeById(themeName);
  if (!theme) return card;

  card.innerHTML = `
    <div class="theme-preview-header" style="background-color: ${theme.colors.primary}">
      <h4>${theme.name}</h4>
    </div>
    <div class="theme-preview-body">
      <div class="color-sample" style="background-color: ${theme.colors.secondary}"></div>
      <div class="color-sample" style="background-color: ${theme.colors.tertiary}"></div>
    </div>
  `;

  return card;
}
