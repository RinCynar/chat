// Material Design 3 Initial Avatar Generator
// Material Design 3 风格首字母头像生成器

// Curated Material Design Tonal Color Palette (with high contrast on white/dark text)
// 精选 Material Design 色彩体系（具有高对比度和和谐色调）
const MD_PALETTES = [
	{ bg: '#E53935', text: '#FFFFFF' }, // Red 600
	{ bg: '#D81B60', text: '#FFFFFF' }, // Pink 600
	{ bg: '#8E24AA', text: '#FFFFFF' }, // Purple 600
	{ bg: '#5E35B1', text: '#FFFFFF' }, // Deep Purple 600
	{ bg: '#3949AB', text: '#FFFFFF' }, // Indigo 600
	{ bg: '#1E88E5', text: '#FFFFFF' }, // Blue 600
	{ bg: '#0288D1', text: '#FFFFFF' }, // Light Blue 700
	{ bg: '#00838F', text: '#FFFFFF' }, // Cyan 800
	{ bg: '#00897B', text: '#FFFFFF' }, // Teal 600
	{ bg: '#2E7D32', text: '#FFFFFF' }, // Green 700
	{ bg: '#558B2F', text: '#FFFFFF' }, // Light Green 800
	{ bg: '#9E9D24', text: '#FFFFFF' }, // Lime 800
	{ bg: '#F57F17', text: '#FFFFFF' }, // Yellow 900
	{ bg: '#FF6F00', text: '#FFFFFF' }, // Amber 900
	{ bg: '#E65100', text: '#FFFFFF' }, // Orange 900
	{ bg: '#D84315', text: '#FFFFFF' }, // Deep Orange 800
	{ bg: '#4E342E', text: '#FFFFFF' }, // Brown 700
	{ bg: '#37474F', text: '#FFFFFF' }, // Blue Grey 800
	{ bg: '#00695C', text: '#FFFFFF' }, // Dark Teal 800
	{ bg: '#006064', text: '#FFFFFF' }, // Dark Cyan 900
	{ bg: '#1B5E20', text: '#FFFFFF' }, // Dark Green 900
	{ bg: '#311B92', text: '#FFFFFF' }, // Dark Purple 900
	{ bg: '#880E4F', text: '#FFFFFF' }, // Dark Pink 900
	{ bg: '#B71C1C', text: '#FFFFFF' }  // Dark Red 900
];

// Pick a palette based on string hash
// 根据用户名哈希确定性选择调色板
function getPalette(name) {
	let hash = 0;
	const str = String(name || 'Anonymous');
	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	const index = Math.abs(hash) % MD_PALETTES.length;
	return MD_PALETTES[index];
}

// Extract display initials from user name
// 提取用户名的代表性首字母或 CJK 首字
function getInitials(name) {
	if (!name) return '?';
	const trimmed = name.trim();
	if (!trimmed) return '?';

	// If starts with an emoji, use emoji directly
	const emojiMatch = trimmed.match(/^(\p{Extended_Pictographic}|\p{Emoji_Presentation})/u);
	if (emojiMatch) {
		return emojiMatch[0];
	}

	// Split by space, underscore, dash, or dot (e.g. "Rin Cynar" -> "RC")
	const words = trimmed.split(/[\s_\-.]+/).filter(Boolean);
	if (words.length >= 2) {
		const first = Array.from(words[0])[0];
		const second = Array.from(words[1])[0];
		return (first + second).toUpperCase();
	}

	// Single word: check for CamelCase (e.g. "RinCynar" -> "RC")
	const camelMatches = trimmed.match(/[A-Z]/g);
	if (camelMatches && camelMatches.length >= 2 && trimmed.length > 2) {
		return (camelMatches[0] + camelMatches[1]).toUpperCase();
	}

	// For single character / CJK / regular name, take first grapheme
	const chars = Array.from(trimmed);
	return chars[0].toUpperCase();
}

// XML entity escape
// XML 字符转义
function escapeXml(unsafe) {
	return String(unsafe).replace(/[<>&'"]/g, c => {
		switch (c) {
			case '<': return '&lt;';
			case '>': return '&gt;';
			case '&': return '&amp;';
			case '\'': return '&apos;';
			case '"': return '&quot;';
			default: return c;
		}
	});
}

// Create SVG initial avatar for user name
// 为用户名生成 Material 风格首字母 SVG 头像
export function createAvatarSVG(userName) {
	const name = String(userName || '').trim();
	if (!name) {
		return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="50" r="50" fill="#6750A4"/><text x="50" y="50" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans SC', 'Noto Sans JP', sans-serif" font-size="46" font-weight="600" text-anchor="middle" dominant-baseline="central">?</text></svg>`;
	}

	const initials = getInitials(name);
	const palette = getPalette(name);
	const fontSize = initials.length > 1 ? 40 : 48;

	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="50" r="50" fill="${palette.bg}"/><text x="50" y="50" fill="${palette.text}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans SC', 'Noto Sans JP', sans-serif" font-size="${fontSize}" font-weight="600" text-anchor="middle" dominant-baseline="central">${escapeXml(initials)}</text></svg>`;
}