# Theme System Quick Reference

## Quick Start

### Initialize (auto-done in main.js)
```javascript
import { initTheme } from './util.themeManager.js';
import { initThemeUI } from './theme-ui.js';

initTheme();     // Load saved or default (dark) theme
initThemeUI();   // Set up UI controls
```

## API Methods

### Theme Control
```javascript
import { 
  toggleTheme,        // Switch dark ↔ light
  applyTheme,         // Set specific theme
  getCurrentTheme,    // Get 'dark' or 'light'
  getAllThemes,       // Get all theme objects
  getThemeById        // Get theme by ID
} from './util.themeManager.js';

// Usage
toggleTheme();              // → 'light' or 'dark'
applyTheme('light');        // → Apply light theme
const theme = getCurrentTheme(); // → 'dark'
```

### System Preference
```javascript
import {
  setUseSystemPreference,   // Enable OS theme sync
  isUsingSystemPreference   // Check if OS sync active
} from './util.themeManager.js';

setUseSystemPreference(true);  // Follow OS theme
if (isUsingSystemPreference()) {
  // OS sync is enabled
}
```

### Color Management
```javascript
import {
  updateThemeColors,  // Dynamic color updates
  getCSSVariable      // Get CSS variable value
} from './util.themeManager.js';

updateThemeColors('dark', {
  primary: '#your-color'
});

const primaryColor = getCSSVariable('--color-primary');
```

## CSS Variables

### Main Colors
```css
/* Text colors */
--color-on-primary           /* Text on primary color */
--color-on-surface           /* Main text color */
--color-on-surface-variant   /* Secondary text color */

/* Background colors */
--color-surface              /* Main background */
--color-surface-variant      /* Secondary background */
--color-background           /* Page background */

/* Semantic colors */
--color-error                /* Error/danger */
--color-success              /* Success state */
--color-warning              /* Warning state */
--color-info                 /* Info state */

/* Borders */
--color-outline              /* Main border */
--color-outline-variant      /* Secondary border */
```

### Containers
```css
--color-primary-container     /* Subtle primary bg */
--color-on-primary-container  /* Text on container */
--color-secondary-container   /* Subtle secondary bg */
--color-tertiary-container    /* Subtle tertiary bg */
```

### Utilities
```css
--elevation-1 to --elevation-4  /* Shadows */
--transition-short     /* 150ms */
--transition-medium    /* 250ms */
--transition-long      /* 350ms */
```

## Common CSS Patterns

### Basic Component
```css
.component {
  background: var(--color-surface);
  color: var(--color-on-surface);
  border: 1px solid var(--color-outline-variant);
  box-shadow: var(--elevation-1);
  transition: background-color var(--transition-medium);
}

.component:hover {
  background: var(--color-surface-variant);
  box-shadow: var(--elevation-2);
}
```

### Button
```css
.button {
  background: var(--color-primary);
  color: var(--color-on-primary);
  transition: all var(--transition-short);
}

.button:hover {
  background: var(--color-primary-container);
  color: var(--color-on-primary-container);
  box-shadow: var(--elevation-2);
}
```

### Input Field
```css
input {
  background: var(--color-surface-variant);
  color: var(--color-on-surface);
  border: 1px solid var(--color-outline-variant);
}

input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(224, 224, 255, 0.15);
}
```

### Card/Container
```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-outline-variant);
  box-shadow: var(--elevation-2);
  border-radius: 12px;
  padding: 16px;
}
```

## Events

### Listen for Theme Changes
```javascript
window.addEventListener('themechange', (event) => {
  console.log('Theme changed to:', event.detail.theme);
  // 'dark' or 'light'
  
  // Update any dependent UI here
});
```

### Listen for Language Changes (i18n)
```javascript
window.addEventListener('languageChange', (event) => {
  console.log('Language changed to:', event.detail.language);
});
```

## Storage

### LocalStorage Keys
```javascript
// Theme mode: 'dark' or 'light'
localStorage.getItem('nodecrypt_theme_mode');

// System preference enabled: 'true' or 'false'
localStorage.getItem('nodecrypt_system_preference');
```

## Dark Theme Colors

```
Primary:      #e0e0ff
Secondary:    #ccc2db
Tertiary:     #efb8c8
Surface:      #1c1b1f
Error:        #f2b8b5
Success:      #81c784
Warning:      #ffb74d
Info:         #64b5f6
```

## Light Theme Colors

```
Primary:      #6d0066
Secondary:    #4a4458
Tertiary:     #633b48
Surface:      #fffbfe
Error:        #7f342e
Success:      #4caf50
Warning:      #ff9800
Info:         #2196f3
```

## Translation Keys (i18n)

```javascript
t('settings.theme_mode')           // "Theme Mode"
t('settings.theme_mode_desc')      // "Switch between dark and light themes"
t('settings.follow_system')        // "Follow System Preference"
t('settings.follow_system_desc')   // "Automatically sync with your OS theme"
t('settings.toggle_theme')         // "Toggle Theme"
t('settings.dark_mode')            // "Dark Mode"
t('settings.light_mode')           // "Light Mode"
```

## Common Tasks

### Switch to Light Mode
```javascript
import { applyTheme } from './util.themeManager.js';
applyTheme('light');
```

### Get Current Theme
```javascript
import { getCurrentTheme } from './util.themeManager.js';
const theme = getCurrentTheme(); // 'dark' or 'light'
```

### Toggle Theme
```javascript
import { toggleTheme } from './util.themeManager.js';
const newTheme = toggleTheme(); // Switches and returns new theme
```

### Update Theme Color
```javascript
import { updateThemeColors } from './util.themeManager.js';
updateThemeColors('dark', {
  primary: '#ff0000',
  secondary: '#00ff00'
});
```

### Enable System Preference
```javascript
import { setUseSystemPreference } from './util.themeManager.js';
setUseSystemPreference(true); // Will follow OS dark/light mode
```

## Testing

### Manual Test Checklist
- [ ] Dark theme loads by default
- [ ] Light toggle works
- [ ] Theme persists on reload
- [ ] All text readable
- [ ] Hover states visible
- [ ] No layout shifts
- [ ] Transitions smooth

### Check Current Theme
```javascript
console.log(getCurrentTheme()); // 'dark'
console.log(
  getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary')
); // #e0e0ff (dark) or #6d0066 (light)
```

## Troubleshooting

### Colors Not Changing?
```javascript
// Check CSS variable value
const primaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue('--color-primary').trim();
console.log(primaryColor);
```

### Theme Not Saving?
```javascript
// Check localStorage
console.log(localStorage.getItem('nodecrypt_theme_mode')); // 'dark' or 'light'
```

### Performance Issues?
```javascript
// Measure theme switch time
const start = performance.now();
toggleTheme();
const end = performance.now();
console.log(`Switch took ${end - start}ms`); // Should be < 50ms
```

## File Locations

```
CSS:
  client/css/theme-modern.css
  client/css/theme-modern-extended.css

JavaScript:
  client/js/util.themeManager.js
  client/js/theme-ui.js

Documentation:
  THEME_SYSTEM.md
  THEME_IMPLEMENTATION_GUIDE.md
  THEME_QUICK_REFERENCE.md (this file)
```

## Browser DevTools Tips

### Check Current Theme
```javascript
// In console
document.documentElement.className // 'dark-theme' or 'light-theme'
```

### Get All CSS Variables
```javascript
// In console
const style = getComputedStyle(document.documentElement);
[...style].filter(p => p.startsWith('--color')).forEach(p => {
  console.log(p, style.getPropertyValue(p));
});
```

### Toggle Theme Repeatedly
```javascript
// In console - toggle every 2 seconds
setInterval(() => {
  window.toggleTheme?.();
}, 2000);
```

## Best Practices

✅ **Do**
- Use CSS variables instead of hardcoded colors
- Always use proper color contrast
- Test both dark and light themes
- Respect user's system preference
- Provide theme toggle in settings
- Listen to `themechange` events

❌ **Don't**
- Hardcode color values
- Assume dark/light exclusively
- Ignore accessibility requirements
- Force theme on users
- Ignore system preferences
- Mix old and new theme systems

## References

- Full API: See THEME_SYSTEM.md
- Implementation: See THEME_IMPLEMENTATION_GUIDE.md
- Examples: See theme-modern.css
- Integration: See main.js

---

**Last Updated**: November 22, 2025
**Status**: Production Ready
