// Media utilities for NodeCrypt (Image, Video, Audio detection & MIME resolution)
// NodeCrypt 多媒体工具（图片、视频、音频检测与 MIME 解析）

// Check if a file or filename is an image
export function isImageFile(fileNameOrType) {
	if (!fileNameOrType) return false;
	if (typeof fileNameOrType === 'string') {
		return /\.(jpe?g|png|gif|webp|svg|bmp|ico|avif|heic)$/i.test(fileNameOrType) || fileNameOrType.startsWith('image/');
	}
	if (fileNameOrType instanceof File || fileNameOrType instanceof Blob) {
		return (fileNameOrType.type && fileNameOrType.type.startsWith('image/')) || (fileNameOrType.name && /\.(jpe?g|png|gif|webp|svg|bmp|ico|avif|heic)$/i.test(fileNameOrType.name));
	}
	return false;
}

// Check if a file or filename is a video
export function isVideoFile(fileNameOrType) {
	if (!fileNameOrType) return false;
	if (typeof fileNameOrType === 'string') {
		return /\.(mp4|webm|ogg|ogv|mov|m4v|mkv)$/i.test(fileNameOrType) || fileNameOrType.startsWith('video/');
	}
	if (fileNameOrType instanceof File || fileNameOrType instanceof Blob) {
		return (fileNameOrType.type && fileNameOrType.type.startsWith('video/')) || (fileNameOrType.name && /\.(mp4|webm|ogg|ogv|mov|m4v|mkv)$/i.test(fileNameOrType.name));
	}
	return false;
}

// Check if a file or filename is an audio
export function isAudioFile(fileNameOrType) {
	if (!fileNameOrType) return false;
	if (typeof fileNameOrType === 'string') {
		return /\.(mp3|wav|ogg|oga|m4a|aac|flac|opus|weba)$/i.test(fileNameOrType) || fileNameOrType.startsWith('audio/');
	}
	if (fileNameOrType instanceof File || fileNameOrType instanceof Blob) {
		return (fileNameOrType.type && fileNameOrType.type.startsWith('audio/')) || (fileNameOrType.name && /\.(mp3|wav|ogg|oga|m4a|aac|flac|opus|weba)$/i.test(fileNameOrType.name));
	}
	return false;
}

// Check if a file or filename is any browser-playable media
export function isMediaFile(fileNameOrType) {
	return isImageFile(fileNameOrType) || isVideoFile(fileNameOrType) || isAudioFile(fileNameOrType);
}

// Get media category ('image' | 'video' | 'audio' | 'file')
export function getMediaCategory(fileNameOrType) {
	if (isImageFile(fileNameOrType)) return 'image';
	if (isVideoFile(fileNameOrType)) return 'video';
	if (isAudioFile(fileNameOrType)) return 'audio';
	return 'file';
}

// Get MIME type based on file extension
export function getMimeType(fileName) {
	if (!fileName || typeof fileName !== 'string') return 'application/octet-stream';
	const ext = fileName.split('.').pop().toLowerCase();
	
	const mimeMap = {
		// Images
		jpg: 'image/jpeg',
		jpeg: 'image/jpeg',
		png: 'image/png',
		gif: 'image/gif',
		webp: 'image/webp',
		svg: 'image/svg+xml',
		bmp: 'image/bmp',
		ico: 'image/x-icon',
		avif: 'image/avif',
		
		// Videos
		mp4: 'video/mp4',
		webm: 'video/webm',
		ogg: 'video/ogg',
		ogv: 'video/ogg',
		mov: 'video/quicktime',
		m4v: 'video/x-m4v',
		mkv: 'video/x-matroska',
		
		// Audio
		mp3: 'audio/mpeg',
		wav: 'audio/wav',
		oga: 'audio/ogg',
		opus: 'audio/ogg',
		m4a: 'audio/mp4',
		aac: 'audio/aac',
		flac: 'audio/flac',
		weba: 'audio/webm',
		
		// Documents & Archives
		pdf: 'application/pdf',
		zip: 'application/zip',
		json: 'application/json',
		txt: 'text/plain'
	};
	
	return mimeMap[ext] || 'application/octet-stream';
}
