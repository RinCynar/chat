// Comprehensive i18n utility for NodeCrypt (English, Chinese, Japanese)
// NodeCrypt 完整多语言国际化工具（中日英三语覆盖）

// Language definitions
// 语言定义
const LANGUAGES = {
	zh: {
		code: 'zh',
		name: '中文',
		flag: '🇨🇳',
		translations: {
			// Meta tags for SEO
			'meta.description': 'NodeCrypt - 真正的端到端加密聊天系统，无数据库，所有消息本地加密，服务器仅做加密数据中转，支持 Cloudflare Workers、Docker、自托管和本地开发。',
			'meta.keywords': '端到端加密, 安全, 聊天, WebSocket, Cloudflare Workers, JavaScript, E2EE, 匿名通信, AES, ECDH, RSA, ChaCha20, 安全, 开源, NodeCrypt, shuaiplus',
			'meta.og_title': 'NodeCrypt - 端到端加密聊天系统',
			'meta.og_description': 'NodeCrypt 是一个端到端加密的开源聊天系统，所有加密解密均在客户端本地完成，服务器无法获取明文。支持多平台部署，安全、匿名、无历史消息。',
			'meta.twitter_title': 'NodeCrypt - 端到端加密聊天系统',
			'meta.twitter_description': 'NodeCrypt 是一个端到端加密的开源聊天系统，所有加密解密均在客户端本地完成，服务器无法获取明文。',
			
			// Login and main UI
			'ui.enter_node': '进入新的房间',
			'ui.username': '用户名',
			'ui.node_name': '房间名称',
			'ui.node_password': '房间密码',
			'ui.optional': '（可选）',
			'ui.enter': '进入房间',
			'ui.connecting': '正在建立加密连接...',
			'ui.node_exists': '此房间已存在',
			'ui.my_name': '我的名字',
			'ui.members': '在线成员',
			'ui.message': '输入消息...',
			'ui.private_message_to': '私信给',
			'ui.me': '（我）',
			'ui.anonymous': '匿名用户',
			'ui.start_private_chat': '点击用户头像发起端到端私聊',
			
			// Settings panel
			'settings.title': '设置',
			'settings.notification': '通知设置',
			'settings.theme': '主题与外观',
			'settings.theme_mode': '色彩模式',
			'settings.theme_mode_light': '☀️ 浅色',
			'settings.theme_mode_dark': '🌙 深色',
			'settings.theme_mode_system': '📱 跟随系统',
			'settings.theme_palette': 'Material You 调色板',
			'settings.language': '语言设置',
			'settings.desktop_notifications': '桌面通知',
			'settings.sound_notifications': '声音通知',
			'settings.language_switch': '语言',
			'settings.chinese': '🇨🇳 中文',
			'settings.english': '🇺🇸 English',
			'settings.japanese': '🇯🇵 日本語',
			
			// File upload and transfer
			'file.selected_files': '已选择的文件',
			'file.clear_all': '清空所有',
			'file.cancel': '取消',
			'file.send_files': '发送文件',
			'file.sending': '发送中',
			'file.receiving': '接收中',
			'file.files': '个文件',
			'file.total': '总计',
			'file.files_selected': '选中 {count} 个文件，总计 {size}',
			'file.upload_files': '上传文件',
			'file.attach_file': '附加文件',
			'file.no_password_required': '无需密码',
			'file.drag_drop': '拖拽文件到此处',
			'file.or': '或',
			'file.browse_files': '浏览文件',
			
			// Notifications and messages
			'notification.enabled': '通知已启用',
			'notification.alert_here': '您将在此处收到通知。',
			'notification.not_supported': '您的浏览器不支持通知功能。',
			'notification.allow_browser': '请在浏览器设置中允许通知。',
			'notification.image': '[图片]',
			'notification.private': '（私信）',
			
			// Actions and menu
			'action.share': '分享房间',
			'action.exit': '退出房间',
			'action.send': '发送 (Enter)',
			'action.emoji': '表情',
			'action.settings': '设置',
			'action.back': '返回',
			'action.copied': '已复制到剪贴板！',
			'action.share_copied': '加密分享链接已复制到剪贴板！',
			'action.copy_failed': '复制失败，文本：',
			'action.copy_url_failed': '复制失败，链接：',
			'action.nothing_to_copy': '没有内容可复制',
			'action.copy_not_supported': '此环境不支持复制功能',
			'action.action_failed': '操作失败，请重试。',
			'action.cannot_share': '无法分享：',
			
			// System messages
			'system.security_warning': '⚠️ 此链接使用旧格式，房间数据未加密。',
			'system.file_send_failed': '文件发送失败：',
			'system.joined': '加入了对话',
			'system.left': '离开了对话',
			'system.secured': '已建立端到端安全连接',
			'system.private_message_failed': '无法发送私信给',
			'system.private_file_failed': '无法发送私密文件给',
			'system.user_not_connected': '用户可能未完全连接。',
			
			// Help page
			'help.title': '使用说明',
			'help.back_to_login': '返回登录',
			'help.usage_guide': '使用说明',
			'help.what_is_nodecrypt': '🔐 什么是 NodeCrypt？',
			'help.what_is_nodecrypt_desc': 'NodeCrypt 是一个真正的端到端加密聊天系统。采用无数据库架构，所有消息在您的设备上本地加密，服务器仅作为加密数据的中转站，无法获取您的任何明文内容。',
			'help.how_to_start': '🚀 快速开始',
			'help.step_username': '输入用户名',
			'help.step_username_desc': '选择一个在房间中显示的昵称，可以是任何您喜欢的名称',
			'help.step_node_name': '设置房间名',
			'help.step_node_name_desc': '房间的唯一标识符，相当于房间号',
			'help.step_password': '设置房间密码',
			'help.step_password_desc': '用于区分不同房间，同时参与加密过程，提升安全性',
			'help.step_join': '点击"加入房间"',
			'help.step_join_desc': '系统将自动生成加密密钥，开始安全聊天',
			'help.security_features': '🔑 安全特性',
			'help.e2e_encryption': '🛡️ 端到端加密',
			'help.e2e_encryption_desc': '使用 AES-256 + ECDH + ChaCha20 加密算法，消息仅您和接收者可解密',
			'help.password_enhanced_encryption': '🔐 密码增强加密',
			'help.password_enhanced_encryption_desc': '房间密码直接参与加密密钥生成，提供额外的安全保护层',
			'help.no_history': '🚫 零历史记录',
			'help.no_history_desc': '所有消息仅存在于当前会话，离线用户无法获取历史消息',
			'help.anonymous_communication': '🎭 完全匿名',
			'help.anonymous_communication_desc': '无需注册账户，不收集任何个人信息',
			'help.decentralized': '🌐 去中心化',
			'help.decentralized_desc': '支持自托管部署，服务器不参与加密解密过程',
			'help.usage_tips': '💡 使用技巧',
			'help.important_note': '⚠️ 重要提示',
			'help.room_isolation_note': '相同房间名但不同密码的是两个完全独立的房间，无法相互通信。',
			'help.tip_private_chat': '私人对话',
			'help.tip_private_chat_desc': '使用复杂的房间名和密码，只分享给特定人员',
			'help.tip_group_chat': '群聊',
			'help.tip_group_chat_desc': '使用简单易记的房间名和密码，方便多人加入',
			'help.tip_security_reminder': '安全提醒',
			'help.tip_security_reminder_desc': '房间名和密码都需要完全一致才能进入同一个房间',
			'help.tip_password_strategy': '密码策略',
			'help.tip_password_strategy_desc': '建议使用包含字母、数字和符号的强密码'
		}
	},
	en: {
		code: 'en',
		name: 'English',
		flag: '🇺🇸',
		translations: {
			// Meta tags for SEO
			'meta.description': 'NodeCrypt - True end-to-end encrypted chat system, no database, all messages encrypted locally, server only relays encrypted data, supports Cloudflare Workers, Docker, self-hosting and local development.',
			'meta.keywords': 'end-to-end encryption, security, chat, WebSocket, Cloudflare Workers, JavaScript, E2EE, anonymous communication, AES, ECDH, RSA, ChaCha20, security, open source, NodeCrypt, shuaiplus',
			'meta.og_title': 'NodeCrypt - End-to-End Encrypted Chat System',
			'meta.og_description': 'NodeCrypt is a zero-knowledge, end-to-end encrypted open source chat system where all encryption and decryption is done locally on the client side, and servers cannot access plaintext. Supports multi-platform deployment, secure, anonymous, no message history.',
			'meta.twitter_title': 'NodeCrypt - End-to-End Encrypted Chat System',
			'meta.twitter_description': 'NodeCrypt is a zero-knowledge, end-to-end encrypted open source chat system where all encryption and decryption is done locally on the client side, and servers cannot access plaintext.',
			
			// Login and main UI
			'ui.enter_node': 'Enter a Room',
			'ui.username': 'Username',
			'ui.node_name': 'Room Name',
			'ui.node_password': 'Room Password',
			'ui.optional': '(optional)',
			'ui.enter': 'ENTER',
			'ui.connecting': 'Establishing secure connection...',
			'ui.node_exists': 'Room already exists',
			'ui.my_name': 'My Name',
			'ui.members': 'Members',
			'ui.message': 'Message...',
			'ui.private_message_to': 'Private Message to',
			'ui.me': ' (me)',
			'ui.anonymous': 'Anonymous',
			'ui.start_private_chat': 'Click avatar to start E2EE private chat',
			
			// Settings panel
			'settings.title': 'Settings',
			'settings.notification': 'Notification Settings',
			'settings.theme': 'Theme & Appearance',
			'settings.theme_mode': 'Theme Mode',
			'settings.theme_mode_light': '☀️ Light',
			'settings.theme_mode_dark': '🌙 Dark',
			'settings.theme_mode_system': '📱 Auto',
			'settings.theme_palette': 'Material You Color',
			'settings.language': 'Language Settings',
			'settings.desktop_notifications': 'Desktop Notifications',
			'settings.sound_notifications': 'Sound Notifications',
			'settings.language_switch': 'Language',
			'settings.chinese': '🇨🇳 中文',
			'settings.english': '🇺🇸 English',
			'settings.japanese': '🇯🇵 日本語',
			
			// File upload and transfer
			'file.selected_files': 'Selected Files',
			'file.clear_all': 'Clear All',
			'file.cancel': 'Cancel',
			'file.send_files': 'Send Files',
			'file.sending': 'Sending',
			'file.receiving': 'Receiving',
			'file.files': 'files',
			'file.total': 'Total',
			'file.files_selected': '{count} files selected, {size} total',
			'file.upload_files': 'Upload Files',
			'file.attach_file': 'Attach file',
			'file.no_password_required': 'No password required',
			'file.drag_drop': 'Drag and drop files here',
			'file.or': 'or',
			'file.browse_files': 'browse files',
			
			// Notifications and messages
			'notification.enabled': 'Notifications enabled',
			'notification.alert_here': 'You will receive alerts here.',
			'notification.not_supported': 'Notifications are not supported by your browser.',
			'notification.allow_browser': 'Please allow notifications in your browser settings.',
			'notification.image': '[image]',
			'notification.private': '(Private)',
			
			// Actions and menu
			'action.share': 'Share Room',
			'action.exit': 'Exit Room',
			'action.send': 'Send (Enter)',
			'action.emoji': 'Emoji',
			'action.settings': 'Settings',
			'action.back': 'Back',
			'action.copied': 'Copied to clipboard!',
			'action.share_copied': 'Encrypted share link copied to clipboard!',
			'action.copy_failed': 'Copy failed, text:',
			'action.copy_url_failed': 'Copy failed, url:',
			'action.nothing_to_copy': 'Nothing to copy',
			'action.copy_not_supported': 'Copy not supported in this environment',
			'action.action_failed': 'Action failed. Please try again.',
			'action.cannot_share': 'Cannot share:',
			
			// System messages
			'system.security_warning': '⚠️ This link uses an old format. Room data is not encrypted.',
			'system.file_send_failed': 'Failed to send files:',
			'system.joined': 'joined the conversation',
			'system.left': 'left the conversation',
			'system.secured': 'connection secured',
			'system.private_message_failed': 'Cannot send private message to',
			'system.private_file_failed': 'Cannot send private file to',
			'system.user_not_connected': 'User might not be fully connected.',
			
			// Help page
			'help.title': 'User Guide',
			'help.back_to_login': 'Back to Login',
			'help.usage_guide': 'User Guide',
			'help.what_is_nodecrypt': '🔐 What is NodeCrypt?',
			'help.what_is_nodecrypt_desc': 'NodeCrypt is a true zero-knowledge end-to-end encrypted chat system. With a database-free architecture, all messages are encrypted locally on your device, and the server serves only as an encrypted data relay station, unable to access any of your plaintext content.',
			'help.how_to_start': '🚀 Quick Start',
			'help.step_username': 'Enter Username',
			'help.step_username_desc': 'Choose a display name for the room, can be any name you like',
			'help.step_node_name': 'Set Room Name',
			'help.step_node_name_desc': 'Unique identifier for the room, equivalent to room number',
			'help.step_password': 'Set Room Password',
			'help.step_password_desc': 'Used to distinguish different rooms while participating in encryption process to enhance security',
			'help.step_join': 'Click "Join Room"',
			'help.step_join_desc': 'System will automatically generate encryption keys and start secure chatting',
			'help.security_features': '🔑 Security Features',
			'help.e2e_encryption': '🛡️ End-to-End Encryption',
			'help.e2e_encryption_desc': 'Uses AES-256 + ECDH + ChaCha20 encryption algorithm, messages can only be decrypted by you and the recipient',
			'help.password_enhanced_encryption': '🔐 Password Enhanced Encryption',
			'help.password_enhanced_encryption_desc': 'Room password directly participates in encryption key generation, providing additional security protection layer',
			'help.no_history': '🚫 Zero History Records',
			'help.no_history_desc': 'All messages exist only in current session, offline users cannot get historical messages',
			'help.anonymous_communication': '🎭 Complete Anonymity',
			'help.anonymous_communication_desc': 'No account registration required, no personal information collected',
			'help.decentralized': '🌐 Decentralized',
			'help.decentralized_desc': 'Supports self-hosted deployment, server does not participate in encryption/decryption process',
			'help.usage_tips': '💡 Usage Tips',
			'help.important_note': '⚠️ Important Note',
			'help.room_isolation_note': 'Same room name but different passwords are two completely independent rooms that cannot communicate with each other.',
			'help.tip_private_chat': 'Private Chat',
			'help.tip_private_chat_desc': 'Use complex room names and passwords, share only with specific people',
			'help.tip_group_chat': 'Group Chat',
			'help.tip_group_chat_desc': 'Use simple and memorable room names and passwords for easy multi-user joining',
			'help.tip_security_reminder': 'Security Reminder',
			'help.tip_security_reminder_desc': 'Both room name and password must be exactly the same to enter the same room',
			'help.tip_password_strategy': 'Password Strategy',
			'help.tip_password_strategy_desc': 'Recommend using strong passwords containing letters, numbers and symbols'
		}
	},
	ja: {
		code: 'ja',
		name: '日本語',
		flag: '🇯🇵',
		translations: {
			// Meta tags for SEO
			'meta.description': 'NodeCrypt - 完全なエンドツーエンド暗号化チャットシステム。データベースなし、全メッセージを端末ローカルで暗号化、サーバーは暗号化データの中継のみを行い平文を一切保持しません。',
			'meta.keywords': 'エンドツーエンド暗号化, セキュリティ, チャット, WebSocket, Cloudflare Workers, JavaScript, E2EE, 匿名通信, AES, ECDH, RSA, ChaCha20, オープンソース, NodeCrypt',
			'meta.og_title': 'NodeCrypt - エンドツーエンド暗号化チャットシステム',
			'meta.og_description': 'NodeCryptはゼロ知識設計のエンドツーエンド暗号化オープンソースチャットシステムです。すべての暗号化・復号は端末側で行われ、サーバーは平文を取得できません。',
			'meta.twitter_title': 'NodeCrypt - エンドツーエンド暗号化チャットシステム',
			'meta.twitter_description': 'NodeCryptはゼロ知識設計のエンドツーエンド暗号化オープンソースチャットシステムです。',
			
			// Login and main UI
			'ui.enter_node': 'ルームに入る',
			'ui.username': 'ユーザー名',
			'ui.node_name': 'ルーム名',
			'ui.node_password': 'ルームパスワード',
			'ui.optional': '（任意）',
			'ui.enter': '入室する',
			'ui.connecting': '暗号化接続を確立中...',
			'ui.node_exists': 'このルームは既に存在します',
			'ui.my_name': '自分の名前',
			'ui.members': 'オンラインメンバー',
			'ui.message': 'メッセージを入力...',
			'ui.private_message_to': '秘密のダイレクトメッセージ：',
			'ui.me': '（自分）',
			'ui.anonymous': '匿名ユーザー',
			'ui.start_private_chat': 'アイコンをクリックして個別暗号化チャットを開始',
			
			// Settings panel
			'settings.title': '設定',
			'settings.notification': '通知設定',
			'settings.theme': 'テーマと外観',
			'settings.theme_mode': 'カラーモード',
			'settings.theme_mode_light': '☀️ ライト',
			'settings.theme_mode_dark': '🌙 ダーク',
			'settings.theme_mode_system': '📱 システム連動',
			'settings.theme_palette': 'Material You カラー',
			'settings.language': '言語設定',
			'settings.desktop_notifications': 'デスクトップ通知',
			'settings.sound_notifications': 'サウンド通知',
			'settings.language_switch': '言語',
			'settings.chinese': '🇨🇳 中文',
			'settings.english': '🇺🇸 English',
			'settings.japanese': '🇯🇵 日本語',
			
			// File upload and transfer
			'file.selected_files': '選択されたファイル',
			'file.clear_all': 'すべてクリア',
			'file.cancel': 'キャンセル',
			'file.send_files': 'ファイルを送信',
			'file.sending': '送信中',
			'file.receiving': '受信中',
			'file.files': '個のファイル',
			'file.total': '合計',
			'file.files_selected': '{count} 個のファイルを選択中（合計 {size}）',
			'file.upload_files': 'ファイルをアップロード',
			'file.attach_file': 'ファイルを添付',
			'file.no_password_required': 'パスワード不要',
			'file.drag_drop': 'ここにファイルをドラッグ＆ドロップ',
			'file.or': 'または',
			'file.browse_files': 'ファイルを選択',
			
			// Notifications and messages
			'notification.enabled': '通知が有効になりました',
			'notification.alert_here': 'ここに通知が表示されます。',
			'notification.not_supported': 'お使いのブラウザは通知に対応していません。',
			'notification.allow_browser': 'ブラウザの設定で通知を許可してください。',
			'notification.image': '[画像]',
			'notification.private': '（プライベート）',
			
			// Actions and menu
			'action.share': 'ルームを共有',
			'action.exit': 'ルームから退室',
			'action.send': '送信 (Enter)',
			'action.emoji': '絵文字',
			'action.settings': '設定',
			'action.back': '戻る',
			'action.copied': 'クリップボードにコピーしました！',
			'action.share_copied': '暗号化共有リンクをコピーしました！',
			'action.copy_failed': 'コピーに失敗しました：',
			'action.copy_url_failed': 'URLコピーに失敗しました：',
			'action.nothing_to_copy': 'コピーする内容がありません',
			'action.copy_not_supported': 'この環境ではコピー機能に対応していません',
			'action.action_failed': '操作に失敗しました。もう一度お試しください。',
			'action.cannot_share': '共有できません：',
			
			// System messages
			'system.security_warning': '⚠️ このリンクは旧形式のため、ルーム情報が暗号化されていません。',
			'system.file_send_failed': 'ファイル送信に失敗しました：',
			'system.joined': 'が参加しました',
			'system.left': 'が退室しました',
			'system.secured': 'エンドツーエンドの安全な接続が確立されました',
			'system.private_message_failed': '個別メッセージを送信できません：',
			'system.private_file_failed': '個別ファイルを送信できません：',
			'system.user_not_connected': 'ユーザーがまだ完全に接続されていない可能性があります。',
			
			// Help page
			'help.title': 'ご利用ガイド',
			'help.back_to_login': 'ログインに戻る',
			'help.usage_guide': 'ご利用ガイド',
			'help.what_is_nodecrypt': '🔐 NodeCryptとは？',
			'help.what_is_nodecrypt_desc': 'NodeCryptは完全なゼロ知識設計のエンドツーエンド暗号化チャットシステムです。データベースを持たない設計で、すべてのメッセージはお使いの端末上で暗号化され、サーバーは暗号化データの中継のみを行います。サーバー管理者であってもメッセージの平文を閲覧することは不可能です。',
			'help.how_to_start': '🚀 クイックスタート',
			'help.step_username': 'ユーザー名を入力',
			'help.step_username_desc': 'ルーム内で表示されるニックネームを設定します（お好きな名前で構いません）',
			'help.step_node_name': 'ルーム名を設定',
			'help.step_node_name_desc': 'ルームの識別番号・名前（部屋番号に相当）',
			'help.step_password': 'ルームパスワードを設定',
			'help.step_password_desc': '部屋の入室制限に加え、暗号鍵の生成シードとしても使用され安全性を高めます',
			'help.step_join': '「入室する」をクリック',
			'help.step_join_desc': '暗号鍵が自動生成され、安全な通信が即座に開始されます',
			'help.security_features': '🔑 セキュリティ機能',
			'help.e2e_encryption': '🛡️ エンドツーエンド暗号化',
			'help.e2e_encryption_desc': 'AES-256 + ECDH + ChaCha20暗号化により、あなたと相手の間でのみメッセージを復号できます',
			'help.password_enhanced_encryption': '🔐 パスワード連動暗号化',
			'help.password_enhanced_encryption_desc': 'ルームパスワードが暗号鍵の導出に直接関与し、強固な二重セキュリティを提供します',
			'help.no_history': '🚫 履歴の完全非保持',
			'help.no_history_desc': 'すべてのメッセージは現在のメモリ上にのみ存在し、退室後は完全に消滅します',
			'help.anonymous_communication': '🎭 完全な匿名性',
			'help.anonymous_communication_desc': 'アカウント登録不要、個人情報は一切収集されません',
			'help.decentralized': '🌐 分散・セルフホスト対応',
			'help.decentralized_desc': 'Cloudflare WorkersやDockerでのセルフホストに対応しています',
			'help.usage_tips': '💡 便利な使い方',
			'help.important_note': '⚠️ 重要な注意事項',
			'help.room_isolation_note': '同じルーム名でもパスワードが異なる場合は完全に独立した別空間となり、通信は一切できません。',
			'help.tip_private_chat': 'プライベートチャット',
			'help.tip_private_chat_desc': '複雑なルーム名とパスワードを設定し、特定の人にのみ共有してください',
			'help.tip_group_chat': 'グループチャット',
			'help.tip_group_chat_desc': '覚えやすいルーム名とパスワードを設定すると、複数人での利用が簡単になります',
			'help.tip_security_reminder': 'セキュリティのポイント',
			'help.tip_security_reminder_desc': '同じルームに入るには、ルーム名とパスワードの両方が完全に一致している必要があります',
			'help.tip_password_strategy': 'パスワードの推奨設定',
			'help.tip_password_strategy_desc': '英字・数字・記号を組み合わせた強固なパスワードの使用を推奨します'
		}
	}
};

// Current language (defaults to auto-detected browser language)
// 当前语言（默认自动匹配浏览器系统语言）
let currentLanguage = detectBrowserLanguage();

// Get translation for a key
// 获取翻译文本
export function t(key, fallback = key) {
	const lang = LANGUAGES[currentLanguage];
	if (lang && lang.translations && lang.translations[key]) {
		return lang.translations[key];
	}
	// Fallback to English if translation is missing in current language
	if (currentLanguage !== 'en' && LANGUAGES.en && LANGUAGES.en.translations && LANGUAGES.en.translations[key]) {
		return LANGUAGES.en.translations[key];
	}
	return fallback;
}

// Set current language
// 设置当前语言
export function setLanguage(langCode) {
	const targetCode = LANGUAGES[langCode] ? langCode : 'en';
	currentLanguage = targetCode;
	
	// Update document language attribute
	// 更新文档语言属性
	document.documentElement.lang = targetCode;
	
	// Update static HTML texts
	// 更新HTML中的静态文本
	updateStaticTexts();
	
	// Dispatch language change event for other components to listen
	// 派发语言变更事件供其他组件监听
	window.dispatchEvent(new CustomEvent('languageChange', { 
		detail: { language: targetCode } 
	}));
}

// Get current language
// 获取当前语言
export function getCurrentLanguage() {
	return currentLanguage;
}

// Get all available languages
// 获取所有可用语言
export function getAvailableLanguages() {
	return Object.keys(LANGUAGES).map(code => ({
		code,
		name: LANGUAGES[code].name,
		flag: LANGUAGES[code].flag
	}));
}

// Detect browser language and fallback to English if not supported
// 默认匹配用户系统语言，若不在语言列表内（zh, en, ja），fallback 到英文
export function detectBrowserLanguage() {
	try {
		// Prioritize navigator.languages array, then fallback to navigator.language
		const preferredLanguages = navigator.languages && navigator.languages.length > 0
			? navigator.languages
			: [navigator.language || navigator.userLanguage || 'en'];

		for (const lang of preferredLanguages) {
			if (!lang) continue;
			const cleanCode = lang.split('-')[0].toLowerCase();
			if (cleanCode === 'zh') return 'zh';
			if (cleanCode === 'ja') return 'ja';
			if (cleanCode === 'en') return 'en';
		}
	} catch (e) {
		console.warn('Failed to detect browser language:', e);
	}
	
	// Default fallback to English
	return 'en';
}

// Initialize i18n with settings
// 根据设置初始化国际化
export function initI18n(settings) {
	if (settings && settings.language && LANGUAGES[settings.language]) {
		setLanguage(settings.language);
	} else {
		// Auto-detect browser language and fallback to en
		const browserLang = detectBrowserLanguage();
		setLanguage(browserLang);
	}
}

// Update static HTML text elements
// 更新HTML中的静态文本元素
export function updateStaticTexts() {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => updateStaticTexts());
		return;
	}
	
	// Update login title
	const loginTitle = document.getElementById('login-title');
	if (loginTitle) {
		loginTitle.textContent = t('ui.enter_node', 'Enter a Room');
	}
	
	// Update login form content with new translations
	const loginFormContainer = document.getElementById('login-form');
	if (loginFormContainer) {
		window.dispatchEvent(new CustomEvent('regenerateLoginForm'));
	}
	
	// Update sidebar username label
	const sidebarUsername = document.getElementById('sidebar-username');
	if (sidebarUsername) {
		window.dispatchEvent(new CustomEvent('updateSidebarUsername'));
	}
	
	// Update "Enter a Room" text in sidebar
	const joinRoomText = document.getElementById('join-room-text');
	if (joinRoomText) {
		joinRoomText.textContent = t('ui.enter_node', 'Enter a Room');
	}
	
	// Update Members title in rightbar
	const membersTitle = document.getElementById('members-title');
	if (membersTitle) {
		membersTitle.textContent = t('ui.members', 'Members');
	}
	
	// Update settings title
	const settingsTitle = document.getElementById('settings-title');
	if (settingsTitle) {
		settingsTitle.textContent = t('settings.title', 'Settings');
	}
	
	// Update message placeholder
	const messagePlaceholder = document.querySelector('.input-field-placeholder');
	if (messagePlaceholder) {
		messagePlaceholder.textContent = t('ui.message', 'Message');
	}
	
	// Update attach button title
	const attachBtn = document.querySelector('.chat-attach-btn');
	if (attachBtn) {
		attachBtn.title = t('file.attach_file', 'Attach file');
	}
	
	// Update emoji button title
	const emojiBtn = document.querySelector('.chat-emoji-btn');
	if (emojiBtn) {
		emojiBtn.title = t('action.emoji', 'Emoji');
	}
	
	// Update settings button title
	const settingsBtn = document.getElementById('settings-btn');
	if (settingsBtn) {
		settingsBtn.title = t('action.settings', 'Settings');
		settingsBtn.setAttribute('aria-label', t('action.settings', 'Settings'));
	}
	
	// Update back button title
	const backBtn = document.getElementById('settings-back-btn');
	if (backBtn) {
		backBtn.title = t('action.back', 'Back');
		backBtn.setAttribute('aria-label', t('action.back', 'Back'));
	}
	
	// Update all elements with data-i18n attribute
	const i18nElements = document.querySelectorAll('[data-i18n]');
	i18nElements.forEach(element => {
		const key = element.getAttribute('data-i18n');
		if (key) {
			element.textContent = t(key, element.textContent || key);
		}
	});
	
	// Update all elements with data-i18n-title attribute
	const i18nTitleElements = document.querySelectorAll('[data-i18n-title]');
	i18nTitleElements.forEach(element => {
		const key = element.getAttribute('data-i18n-title');
		if (key) {
			element.title = t(key, element.title || key);
		}
	});
	
	// Update meta tags
	updateMetaTags();
}

// Update meta tags with current language
// 使用当前语言更新meta标签
function updateMetaTags() {
	const metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.content = t('meta.description', metaDescription.content);
	}
	
	const metaKeywords = document.querySelector('meta[name="keywords"]');
	if (metaKeywords) {
		metaKeywords.content = t('meta.keywords', metaKeywords.content);
	}
	
	const metaOgTitle = document.querySelector('meta[property="og:title"]');
	if (metaOgTitle) {
		metaOgTitle.content = t('meta.og_title', metaOgTitle.content);
	}
	
	const metaOgDescription = document.querySelector('meta[property="og:description"]');
	if (metaOgDescription) {
		metaOgDescription.content = t('meta.og_description', metaOgDescription.content);
	}
	
	const metaTwitterTitle = document.querySelector('meta[name="twitter:title"]');
	if (metaTwitterTitle) {
		metaTwitterTitle.content = t('meta.twitter_title', metaTwitterTitle.content);
	}
	
	const metaTwitterDescription = document.querySelector('meta[name="twitter:description"]');
	if (metaTwitterDescription) {
		metaTwitterDescription.content = t('meta.twitter_description', metaTwitterDescription.content);
	}
}

// Run initial static text update on load
if (typeof document !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', updateStaticTexts);
	} else {
		updateStaticTexts();
	}
}
