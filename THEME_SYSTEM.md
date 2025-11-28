# Material You Design Theme System

## Overview 概述

NodeCrypt now features a complete Material You design theme system with full dark/light mode support. The system provides:

NodeCrypt 现在采用完整的 Material You 设计主题系统，支持深色/浅色模式。系统提供：

- **Deep dark theme as default** - 深色主题作为默认主题
- **Light theme support** - 支持浅色主题
- **System preference detection** - 系统偏好检测
- **Smooth transitions** - 平滑过渡效果
- **Material You color palette** - Material You 色板
- **Accessibility focused** - 可访问性导向设计

## Files Added 新增文件

### CSS Files
- `client/css/theme-modern.css` - Main theme system with CSS variables and Material You colors
- `client/css/theme-modern-extended.css` - Extended component styles (buttons, cards, modals, etc.)

### JavaScript Files
- `client/js/util.themeManager.js` - Core theme management functions
- `client/js/theme-ui.js` - UI components for theme switching

## Usage 使用方法

### Automatic Initialization 自动初始化

The theme system initializes automatically when the app loads:

应用加载时主题系统自动初始化：

```javascript
import { initTheme } from './util.themeManager.js';
import { initThemeUI } from './theme-ui.js';

// These are called in main.js during DOMContentLoaded
initTheme();     // Initialize theme
initThemeUI();   // Initialize theme UI components
```

### Programmatic Control 程序化控制

```javascript
import { 
  toggleTheme, 
  applyTheme, 
  getCurrentTheme,
  setUseSystemPreference 
} from './util.themeManager.js';

// Toggle between dark and light
toggleTheme(); // Returns new theme name

// Apply specific theme
applyTheme('light');  // 'light' or 'dark'

// Get current theme
const theme = getCurrentTheme(); // Returns 'dark' or 'light'

// Use system preference
setUseSystemPreference(true);
```

## Theme Structure 主题结构

### Dark Theme (Default) 深色主题（默认）

```
Primary:    #e0e0ff (light purple)
Secondary:  #ccc2db (light gray-purple)
Tertiary:   #efb8c8 (light pink)
Background: #1c1b1f (almost black)
Surface:    #1c1b1f
```

### Light Theme 浅色主题

```
Primary:    #6d0066 (dark purple)
Secondary:  #4a4458 (dark gray-purple)
Tertiary:   #633b48 (dark brown)
Background: #fffbfe (almost white)
Surface:    #fffbfe
```

## CSS Variables 

All colors are exposed as CSS custom properties:

所有颜色都公开为CSS自定义属性：

```css
--color-primary               /* Primary brand color */
--color-on-primary            /* Text on primary */
--color-primary-container     /* Subtle primary background */
--color-on-primary-container  /* Text on primary container */

--color-secondary             /* Secondary color */
--color-on-secondary          /* Text on secondary */
--color-secondary-container   /* Secondary background */
--color-on-secondary-container/* Text on secondary container */

--color-surface               /* Main surface color */
--color-on-surface            /* Text on surface */
--color-surface-variant       /* Subtle surface */
--color-on-surface-variant    /* Text on surface variant */

--color-error                 /* Error/danger color */
--color-success               /* Success color */
--color-warning               /* Warning color */
--color-info                  /* Info color */

--color-outline               /* Border color */
--color-outline-variant       /* Subtle border */
--color-background            /* Page background */

--elevation-1 to --elevation-4  /* Shadows */
--transition-short            /* 150ms transition */
--transition-medium           /* 250ms transition */
--transition-long             /* 350ms transition */
```

### Usage in CSS CSS中的用法

```css
button {
  background: var(--color-primary);
  color: var(--color-on-primary);
  transition: background-color var(--transition-medium);
}

button:hover {
  background: var(--color-primary-container);
}
```

## Theme Switching 主题切换

### User Interface 用户界面

Users can toggle the theme via:

用户可以通过以下方式切换主题：

1. **Settings Panel** - Theme toggle switch in settings
2. **Keyboard Shortcut** - `Shift+T` to toggle (when implemented)
3. **System Preference** - Follow OS dark/light mode setting

### Storage 存储

Theme preferences are saved to localStorage:

主题偏好保存在 localStorage 中：

```javascript
// Saved as:
localStorage.setItem('nodecrypt_theme_mode', 'dark'); // or 'light'
localStorage.setItem('nodecrypt_system_preference', 'true'); // or 'false'
```

## Events 事件

Listen for theme changes:

监听主题变化：

```javascript
window.addEventListener('themechange', (e) => {
  console.log('New theme:', e.detail.theme);
  // 'dark' or 'light'
});
```

## Component Examples 组件示例

### Button Variants 按钮变体

```html
<!-- Primary Button -->
<button class="button-primary">Primary</button>

<!-- Secondary Button -->
<button class="button-secondary">Secondary</button>

<!-- Tertiary Button -->
<button class="button-tertiary">Tertiary</button>
```

### Message Bubbles 消息气泡

```html
<!-- Own message -->
<div class="bubble own">Your message</div>

<!-- Other user message -->
<div class="bubble other">Other user's message</div>

<!-- System message -->
<div class="bubble system">System notification</div>
```

### Cards 卡片

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>
```

### Input Fields 输入字段

```html
<input type="text" placeholder="Enter text..." />
<textarea placeholder="Enter message..."></textarea>
```

## Accessibility 可访问性

The theme system includes:

主题系统包括：

- **Focus indicators** - Clear focus states for keyboard navigation
- **Color contrast** - WCAG AA compliant colors
- **Reduced motion** - Respects `prefers-reduced-motion`
- **High contrast** - Support for high contrast modes

## Customization 自定义

### Adding Custom Colors 添加自定义颜色

```javascript
import { updateThemeColors } from './util.themeManager.js';

updateThemeColors('dark', {
  primary: '#your-color',
  secondary: '#your-color'
});
```

### Creating New Theme Variant 创建新主题变体

1. Add theme definition to `util.themeManager.js`:

```javascript
const THEMES = {
  // ... existing themes
  custom: {
    id: 'custom',
    name: 'Custom',
    colors: { ... }
  }
};
```

2. Use the new theme:

```javascript
applyTheme('custom');
```

## Browser Support 浏览器支持

- Modern browsers with CSS Custom Properties support
- Chrome/Edge 49+
- Firefox 31+
- Safari 9.1+
- iOS Safari 9.3+

## Performance 性能

The theme system is optimized for:

- **Minimal repaints** - CSS variables prevent full style recalculation
- **Fast transitions** - Hardware-accelerated with cubic-bezier timing
- **Lazy loading** - Theme only applies on demand
- **Storage efficient** - Minimal localStorage usage

## Troubleshooting 故障排除

### Theme not applying?

1. Check if `theme-modern.css` is loaded before other stylesheets
2. Verify localStorage is enabled
3. Check browser console for errors
4. Clear browser cache and reload

### Colors not updating?

1. Ensure you're using CSS variables, not hardcoded colors
2. Check that element has proper HTML structure
3. Verify no inline styles override CSS variables
4. Use `!important` only as last resort

### Keyboard shortcut not working?

1. Keyboard shortcut implementation is optional
2. Add event listener in `theme-ui.js` if needed
3. Ensure focus is on document, not text input

## Integration with Settings Panel 与设置面板集成

The theme manager integrates with the settings system:

```javascript
import { createThemeToggleButton } from './theme-ui.js';

// Add to settings panel
const settingsContent = document.querySelector('.settings-content');
settingsContent.appendChild(createThemeToggleButton());
```

## Dark Mode Considerations 深色模式考虑

When designing for dark mode:

- Avoid pure white (#ffffff) text - use #e6e1e6
- Don't use black (#000000) backgrounds - use #1c1b1f
- Reduce shadow opacity for dark surfaces
- Use scrim (semi-transparent overlay) sparingly

## Future Enhancements 未来增强

Potential improvements:

- [ ] Time-based theme switching (e.g., dark at night)
- [ ] Per-component theme overrides
- [ ] Theme preview before applying
- [ ] Color blind friendly palettes
- [ ] Custom color picker for users
- [ ] Animated theme transitions

## References 参考

- [Material You Design System](https://m3.material.io/)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
