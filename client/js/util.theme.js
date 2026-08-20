// Theme utility functions with Material You (Material Design 3) Color Systems
// Material You (Material Design 3) 动态色彩主题与深浅色模式引擎

export const THEMES = [
	{
		id: 'theme-miku',
		name: 'Miku Cyan',
		nameZh: '初音青',
		nameJa: 'ミクシアン',
		color: '#39C5BB',
		light: {
			'--md-sys-color-primary': '#006A62',
			'--md-sys-color-on-primary': '#FFFFFF',
			'--md-sys-color-primary-container': '#B8F6EE',
			'--md-sys-color-on-primary-container': '#00201D',
			'--md-sys-color-secondary': '#4A6360',
			'--md-sys-color-on-secondary': '#FFFFFF',
			'--md-sys-color-secondary-container': '#CCE8E4',
			'--md-sys-color-on-secondary-container': '#051F1D',
			'--md-sys-color-tertiary': '#6750A4',
			'--md-sys-color-on-tertiary': '#FFFFFF',
			'--md-sys-color-tertiary-container': '#EADDFF',
			'--md-sys-color-on-tertiary-container': '#21005D',
			'--md-sys-color-surface': '#F4FAFA',
			'--md-sys-color-on-surface': '#161C1C',
			'--md-sys-color-surface-variant': '#DAE5E3',
			'--md-sys-color-on-surface-variant': '#3F4947',
			'--md-sys-color-surface-container-lowest': '#FFFFFF',
			'--md-sys-color-surface-container-low': '#EEF5F4',
			'--md-sys-color-surface-container': '#E8EFEF',
			'--md-sys-color-surface-container-high': '#E2EAE9',
			'--md-sys-color-surface-container-highest': '#DCE4E3',
			'--md-sys-color-outline': '#6F7977',
			'--md-sys-color-outline-variant': '#BFC9C7',
			'--md-sys-color-error': '#BA1A1A',
			'--md-sys-color-error-container': '#FFDAD6',
			'--md-sys-color-on-error-container': '#410002',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.08)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(57, 197, 187, 0.08) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(103, 80, 164, 0.04) 0px, transparent 50%), #F4FAFA'
		},
		dark: {
			'--md-sys-color-primary': '#53DBCF',
			'--md-sys-color-on-primary': '#003733',
			'--md-sys-color-primary-container': '#00504A',
			'--md-sys-color-on-primary-container': '#72F8EB',
			'--md-sys-color-secondary': '#B0CCC7',
			'--md-sys-color-on-secondary': '#1C3532',
			'--md-sys-color-secondary-container': '#324B48',
			'--md-sys-color-on-secondary-container': '#CCE8E4',
			'--md-sys-color-tertiary': '#D0BCFF',
			'--md-sys-color-on-tertiary': '#381E72',
			'--md-sys-color-tertiary-container': '#4F378B',
			'--md-sys-color-on-tertiary-container': '#EADDFF',
			'--md-sys-color-surface': '#0E1514',
			'--md-sys-color-on-surface': '#DEE4E3',
			'--md-sys-color-surface-variant': '#3F4947',
			'--md-sys-color-on-surface-variant': '#BFC9C7',
			'--md-sys-color-surface-container-lowest': '#090F0E',
			'--md-sys-color-surface-container-low': '#161D1C',
			'--md-sys-color-surface-container': '#1A2120',
			'--md-sys-color-surface-container-high': '#242C2B',
			'--md-sys-color-surface-container-highest': '#2F3735',
			'--md-sys-color-outline': '#899391',
			'--md-sys-color-outline-variant': '#3F4947',
			'--md-sys-color-error': '#FFB4AB',
			'--md-sys-color-error-container': '#93000A',
			'--md-sys-color-on-error-container': '#FFDAD6',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.45)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(57, 197, 187, 0.12) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(208, 188, 255, 0.06) 0px, transparent 50%), #0E1514'
		}
	},
	{
		id: 'theme-sapphire',
		name: 'Sapphire Ocean',
		nameZh: '海蓝宝石',
		nameJa: 'サファイアブルー',
		color: '#0B57D0',
		light: {
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
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(11, 87, 208, 0.06) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(103, 80, 164, 0.04) 0px, transparent 50%), #F8F9FA'
		},
		dark: {
			'--md-sys-color-primary': '#A8C7FA',
			'--md-sys-color-on-primary': '#062E6F',
			'--md-sys-color-primary-container': '#0842A0',
			'--md-sys-color-on-primary-container': '#D3E3FD',
			'--md-sys-color-secondary': '#BDC7DC',
			'--md-sys-color-on-secondary': '#273141',
			'--md-sys-color-secondary-container': '#3D4758',
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
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.45)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(168, 199, 250, 0.09) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(208, 188, 255, 0.06) 0px, transparent 50%), #111318'
		}
	},
	{
		id: 'theme-sage',
		name: 'Botanical Sage',
		nameZh: '鼠尾草绿',
		nameJa: 'ボタニカルセージ',
		color: '#2E6C56',
		light: {
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
		},
		dark: {
			'--md-sys-color-primary': '#93D5BA',
			'--md-sys-color-on-primary': '#003828',
			'--md-sys-color-primary-container': '#12533F',
			'--md-sys-color-on-primary-container': '#CCE8DB',
			'--md-sys-color-secondary': '#B6CCBA',
			'--md-sys-color-on-secondary': '#223528',
			'--md-sys-color-secondary-container': '#384B3D',
			'--md-sys-color-on-secondary-container': '#D2E8D5',
			'--md-sys-color-tertiary': '#D0BCFF',
			'--md-sys-color-on-tertiary': '#381E72',
			'--md-sys-color-tertiary-container': '#4F378B',
			'--md-sys-color-on-tertiary-container': '#EADDFF',
			'--md-sys-color-surface': '#101412',
			'--md-sys-color-on-surface': '#E1E4E0',
			'--md-sys-color-surface-variant': '#404944',
			'--md-sys-color-on-surface-variant': '#BFC9C2',
			'--md-sys-color-surface-container-lowest': '#0B0F0D',
			'--md-sys-color-surface-container-low': '#181D1A',
			'--md-sys-color-surface-container': '#1C211E',
			'--md-sys-color-surface-container-high': '#272B28',
			'--md-sys-color-surface-container-highest': '#323633',
			'--md-sys-color-outline': '#8A938C',
			'--md-sys-color-outline-variant': '#404944',
			'--md-sys-color-error': '#FFB4AB',
			'--md-sys-color-error-container': '#93000A',
			'--md-sys-color-on-error-container': '#FFDAD6',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.45)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(147, 213, 186, 0.09) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(208, 188, 255, 0.06) 0px, transparent 50%), #101412'
		}
	},
	{
		id: 'theme-coral',
		name: 'Sunset Coral',
		nameZh: '日落暖珊瑚',
		nameJa: 'サンセットコーラル',
		color: '#B93E2B',
		light: {
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
		},
		dark: {
			'--md-sys-color-primary': '#FFB4A5',
			'--md-sys-color-on-primary': '#650B02',
			'--md-sys-color-primary-container': '#8E2414',
			'--md-sys-color-on-primary-container': '#FFDAD3',
			'--md-sys-color-secondary': '#E7BDB6',
			'--md-sys-color-on-secondary': '#442925',
			'--md-sys-color-secondary-container': '#5D3F3A',
			'--md-sys-color-on-secondary-container': '#FFDAD4',
			'--md-sys-color-tertiary': '#D0BCFF',
			'--md-sys-color-on-tertiary': '#381E72',
			'--md-sys-color-tertiary-container': '#4F378B',
			'--md-sys-color-on-tertiary-container': '#EADDFF',
			'--md-sys-color-surface': '#1A1110',
			'--md-sys-color-on-surface': '#F1DFDC',
			'--md-sys-color-surface-variant': '#534340',
			'--md-sys-color-on-surface-variant': '#D8C2BE',
			'--md-sys-color-surface-container-lowest': '#140C0B',
			'--md-sys-color-surface-container-low': '#231918',
			'--md-sys-color-surface-container': '#271D1C',
			'--md-sys-color-surface-container-high': '#322726',
			'--md-sys-color-surface-container-highest': '#3E3230',
			'--md-sys-color-outline': '#A08C89',
			'--md-sys-color-outline-variant': '#534340',
			'--md-sys-color-error': '#FFB4AB',
			'--md-sys-color-error-container': '#93000A',
			'--md-sys-color-on-error-container': '#FFDAD6',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.45)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(255, 180, 165, 0.09) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(208, 188, 255, 0.06) 0px, transparent 50%), #1A1110'
		}
	},
	{
		id: 'theme-lavender',
		name: 'Lavender Iris',
		nameZh: '薰衣草紫',
		nameJa: 'ラベンダーアイリス',
		color: '#6750A4',
		light: {
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
		},
		dark: {
			'--md-sys-color-primary': '#D0BCFF',
			'--md-sys-color-on-primary': '#381E72',
			'--md-sys-color-primary-container': '#4F378B',
			'--md-sys-color-on-primary-container': '#EADDFF',
			'--md-sys-color-secondary': '#CCC2DC',
			'--md-sys-color-on-secondary': '#332D41',
			'--md-sys-color-secondary-container': '#4A4458',
			'--md-sys-color-on-secondary-container': '#E8DEF8',
			'--md-sys-color-tertiary': '#F6B2D4',
			'--md-sys-color-on-tertiary': '#4E1F3A',
			'--md-sys-color-tertiary-container': '#683551',
			'--md-sys-color-on-tertiary-container': '#FFD8E8',
			'--md-sys-color-surface': '#141218',
			'--md-sys-color-on-surface': '#E6E1E5',
			'--md-sys-color-surface-variant': '#49454F',
			'--md-sys-color-on-surface-variant': '#CAC4D0',
			'--md-sys-color-surface-container-lowest': '#0F0D13',
			'--md-sys-color-surface-container-low': '#1D1B20',
			'--md-sys-color-surface-container': '#211F24',
			'--md-sys-color-surface-container-high': '#2B292F',
			'--md-sys-color-surface-container-highest': '#36343A',
			'--md-sys-color-outline': '#938F99',
			'--md-sys-color-outline-variant': '#49454F',
			'--md-sys-color-error': '#FFB4AB',
			'--md-sys-color-error-container': '#93000A',
			'--md-sys-color-on-error-container': '#FFDAD6',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.45)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(208, 188, 255, 0.09) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(246, 178, 212, 0.06) 0px, transparent 50%), #141218'
		}
	},
	{
		id: 'theme-amber',
		name: 'Amber Golden',
		nameZh: '琥珀暖金',
		nameJa: 'アンバーゴールド',
		color: '#8A5100',
		light: {
			'--md-sys-color-primary': '#8A5100',
			'--md-sys-color-on-primary': '#FFFFFF',
			'--md-sys-color-primary-container': '#FFDDB8',
			'--md-sys-color-on-primary-container': '#2C1600',
			'--md-sys-color-secondary': '#705B41',
			'--md-sys-color-on-secondary': '#FFFFFF',
			'--md-sys-color-secondary-container': '#FCE0BE',
			'--md-sys-color-on-secondary-container': '#281805',
			'--md-sys-color-tertiary': '#6750A4',
			'--md-sys-color-on-tertiary': '#FFFFFF',
			'--md-sys-color-tertiary-container': '#EADDFF',
			'--md-sys-color-on-tertiary-container': '#21005D',
			'--md-sys-color-surface': '#FFF8F4',
			'--md-sys-color-on-surface': '#211A13',
			'--md-sys-color-surface-variant': '#F0E0D0',
			'--md-sys-color-on-surface-variant': '#504539',
			'--md-sys-color-surface-container-lowest': '#FFFFFF',
			'--md-sys-color-surface-container-low': '#FFF1E7',
			'--md-sys-color-surface-container': '#FAECE1',
			'--md-sys-color-surface-container-high': '#F4E6DC',
			'--md-sys-color-surface-container-highest': '#EEE0D6',
			'--md-sys-color-outline': '#827568',
			'--md-sys-color-outline-variant': '#D4C4B5',
			'--md-sys-color-error': '#BA1A1A',
			'--md-sys-color-error-container': '#FFDAD6',
			'--md-sys-color-on-error-container': '#410002',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.08)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(138, 81, 0, 0.05) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(112, 91, 65, 0.04) 0px, transparent 50%), #FFF8F4'
		},
		dark: {
			'--md-sys-color-primary': '#FFB870',
			'--md-sys-color-on-primary': '#4A2800',
			'--md-sys-color-primary-container': '#693C00',
			'--md-sys-color-on-primary-container': '#FFDDB8',
			'--md-sys-color-secondary': '#DFC3A2',
			'--md-sys-color-on-secondary': '#3E2D17',
			'--md-sys-color-secondary-container': '#56432B',
			'--md-sys-color-on-secondary-container': '#FCE0BE',
			'--md-sys-color-tertiary': '#D0BCFF',
			'--md-sys-color-on-tertiary': '#381E72',
			'--md-sys-color-tertiary-container': '#4F378B',
			'--md-sys-color-on-tertiary-container': '#EADDFF',
			'--md-sys-color-surface': '#18120C',
			'--md-sys-color-on-surface': '#EDE0D6',
			'--md-sys-color-surface-variant': '#504539',
			'--md-sys-color-on-surface-variant': '#D4C4B5',
			'--md-sys-color-surface-container-lowest': '#130D07',
			'--md-sys-color-surface-container-low': '#211B14',
			'--md-sys-color-surface-container': '#251F18',
			'--md-sys-color-surface-container-high': '#302922',
			'--md-sys-color-surface-container-highest': '#3B342C',
			'--md-sys-color-outline': '#9D8E80',
			'--md-sys-color-outline-variant': '#504539',
			'--md-sys-color-error': '#FFB4AB',
			'--md-sys-color-error-container': '#93000A',
			'--md-sys-color-on-error-container': '#FFDAD6',
			'--md-sys-color-shadow': 'rgba(0, 0, 0, 0.45)',
			'--md-sys-color-app-bg': 'radial-gradient(at 10% 10%, rgba(255, 184, 112, 0.09) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(208, 188, 255, 0.06) 0px, transparent 50%), #18120C'
		}
	}
];

// Get current theme mode (light, dark, system)
// 获取当前主题模式 (light, dark, system)
export function getThemeMode() {
	try {
		const settings = JSON.parse(localStorage.getItem('settings') || '{}');
		return settings.themeMode || 'system';
	} catch {
		return 'system';
	}
}

// Check if dark mode is currently active
// 判断当前是否处于深色模式
export function isDarkMode() {
	const mode = getThemeMode();
	if (mode === 'dark') return true;
	if (mode === 'light') return false;
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Get current theme from settings (defaults to #39C5BB Miku Cyan)
// 从设置中获取当前主题（默认为 #39C5BB 初音青）
export function getCurrentTheme() {
	try {
		const settings = JSON.parse(localStorage.getItem('settings') || '{}');
		const themeId = settings.theme || THEMES[0].id;
		
		// Backward compatibility mapping
		if (themeId === 'theme-miku') return THEMES[0];
		if (themeId === 'theme1' || themeId === 'theme-sapphire') return THEMES[1];
		if (themeId === 'theme2' || themeId === 'theme-sage') return THEMES[2];
		if (themeId === 'theme3' || themeId === 'theme-coral') return THEMES[3];
		if (themeId === 'theme4' || themeId === 'theme-lavender') return THEMES[4];
		if (themeId === 'theme5' || themeId === 'theme-amber' || themeId === 'theme-teal') return THEMES[5];
		
		return THEMES.find(theme => theme.id === themeId) || THEMES[0];
	} catch {
		return THEMES[0];
	}
}

// Apply theme & color mode to the document
// 应用主题与色彩模式到文档
export function applyTheme(themeId, themeMode = null) {
	const theme = THEMES.find(t => t.id === themeId) || getCurrentTheme();
	if (!theme) return false;
	
	if (themeMode) {
		const settings = JSON.parse(localStorage.getItem('settings') || '{}');
		settings.themeMode = themeMode;
		localStorage.setItem('settings', JSON.stringify(settings));
	}
	
	const dark = isDarkMode();
	const root = document.documentElement;
	const palette = dark ? theme.dark : theme.light;
	
	// Apply all Material Design 3 tokens to root
	if (palette) {
		Object.entries(palette).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	}
	
	// Set dark mode attribute on root
	if (dark) {
		root.setAttribute('data-theme', 'dark');
		document.body.classList.add('dark-mode');
	} else {
		root.removeAttribute('data-theme');
		document.body.classList.remove('dark-mode');
	}
	
	// Update quick toggle button icon if exists
	updateQuickModeToggleIcons();
	
	// Broadcast theme change event
	window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme, isDark: dark } }));
	
	return true;
}

// Quick toggle between Light and Dark mode
// 快速切换浅色与深色模式
export function toggleDarkMode() {
	const currentDark = isDarkMode();
	const newMode = currentDark ? 'light' : 'dark';
	
	const settings = JSON.parse(localStorage.getItem('settings') || '{}');
	settings.themeMode = newMode;
	localStorage.setItem('settings', JSON.stringify(settings));
	
	applyTheme(settings.theme || THEMES[0].id, newMode);
	return !currentDark;
}

// Update all quick mode toggle icons in the UI
// 更新页面中所有模式切换图标
export function updateQuickModeToggleIcons() {
	const dark = isDarkMode();
	const toggleBtns = document.querySelectorAll('.theme-mode-toggle-btn');
	toggleBtns.forEach(btn => {
		btn.innerHTML = dark ? `
			<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
				<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
			</svg>
		` : `
			<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
				<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
			</svg>
		`;
		btn.title = dark ? 'Light Mode' : 'Dark Mode';
	});
}

// Initialize theme on page load & listen for OS system changes
// 页面加载时初始化主题并监听系统色彩偏好变更
export function initTheme() {
	const currentTheme = getCurrentTheme();
	const themeMode = getThemeMode();
	applyTheme(currentTheme.id, themeMode);
	
	// Listen for OS system theme change
	if (window.matchMedia) {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (getThemeMode() === 'system') {
				applyTheme(getCurrentTheme().id, 'system');
			}
		});
	}
}

// Get theme by ID
export function getThemeById(themeId) {
	return THEMES.find(theme => theme.id === themeId) || THEMES[0];
}

// Get all available themes
export function getAllThemes() {
	return THEMES;
}
