# NodeCrypt - Agent Guidelines

## Build & Test Commands
- **Build**: `npm run build` - Vite build for client (outputs to `dist/`)
- **Dev**: `npm run dev` - Local development with Wrangler and HMR
- **Deploy**: `npm run deploy` - Deploy to Cloudflare Workers
- **Docker**: `npm run build:docker` - Docker build (not recommended)
- No test framework configured; manually verify encryption flow

## Architecture
**Subprojects:**
- `client/` - ES6+ vanilla JS, no frameworks (HTML/CSS/JS) with Material You design system
- `server/` - Node.js WebSocket server (fallback/local deployment)
- `worker/` - Cloudflare Workers (primary deployment target, uses Durable Objects)

**Key Technologies:**
- Build: Vite (root vite.config.js) + Wrangler (wrangler.toml)
- Crypto: Web Crypto API, elliptic.js (P-384, Curve25519), aes-js, js-chacha20, js-sha256
- Communication: WebSocket (real-time bidirectional)
- Database: None - zero-knowledge architecture; Durable Objects for session management
- Design: Material You design system with CSS custom properties for dark/light themes

**Architecture Pattern:**
- Zero-knowledge end-to-end encryption (3-layer security: RSA-2048 → P-384 ECDH → AES-256-CBC + ChaCha20)
- Server is blind relay; all encryption/decryption on client
- No message persistence; data only in memory during session
- Material You theme system with dark as default, smooth transitions

## Code Style & Conventions
- **Language**: Vanilla JavaScript (ES6+), Node.js for server
- **Imports**: CommonJS (`require()`) in server/; ES6 modules (`import/export`) in worker/
- **Formatting**: Airbnb-style; reviewed via Vite/Terser; no explicit linter
- **Naming**: camelCase for functions/variables, PascalCase for classes (`ChatRoom`)
- **Encryption Functions**: All crypto in `worker/utils.js` and `server/server.js`; prefixed with `encrypt*/decrypt*`
- **Theme Functions**: All theme logic in `util.themeManager.js` and `theme-ui.js`; CSS variables for colors
- **Error Handling**: Try-catch blocks; console logging for debugging; no structured logging
- **Type Safety**: No TypeScript; JSDoc comments used sparingly
- **Comments**: Dual language (English/Chinese) comments in config files; minimal inline comments
- **CSS**: Material You colors via CSS custom properties; dark theme default; light theme override with `:root.light-theme`

## Theme System
- **Default**: Dark theme (Material You inspired colors)
- **Alternates**: Light theme with automatic system preference detection
- **CSS Files**: `theme-modern.css` (main, 900+ lines), `theme-modern-extended.css` (components, 600+ lines)
- **JS Files**: `util.themeManager.js` (core logic), `theme-ui.js` (UI components)
- **Storage**: localStorage for persistent theme preference
- **Performance**: Pure CSS variable switching, no layout recalculations
- **See**: THEME_SYSTEM.md, THEME_IMPLEMENTATION_GUIDE.md for complete details
