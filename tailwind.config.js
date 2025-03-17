import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	// darkMode: ['class'],
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/**/*.blade.php',
		'./resources/**/*.{js,jsx,ts,tsx}',
		'./resources/**/*.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Figtree',
					...defaultTheme.fontFamily.sans
				],
				iit: [
					'Source Sans Pro',
					'Helvetica Neue',
					'Helvetica',
					'Arial',
					'sans-serif'
				]
			},
			colors: {
				'iit-gray': '#333',
				'iit-red': '#931d23',
				'iit-navbar': '#a41d21',
				'iit-yellow': '#f7d853',
				'iit-warning': '#fcf8e3'
			},
			textColor: {
				'iit-gray': '#333',
				'iit-box': '#ceccc8',
				'iit-yellow': '#f7d853',
				'iit-red': '#931d23',
				'iit-warning': '#fcf8e3',
				'iit-green': '#008d4c'
			},
			backgroundColor: {
				'iit-gray': '#333',
				'iit-yellow': '#f7d853',
				'iit-red': '#931d23',
				'iit-red-2': '#d48589',
				'iit-navbar': '#a41d21',
				'iit-gray-active': 'rgba(0, 0, 0, 0.1)',
				'iit-header': '#b5b09f',
				'iit-bg': '#e8e8e8',
				'iit-box': '#ceccc8',
				'iit-warning': '#fcf8e3',
				'iit-inactive-tab': '#b5ae9f',
				'iit-table-header': '#f7f4ed'
			},
			borderColor: {
				'iit-box': '#ceccc8',
				'iit-warning': '#fcf8e3',
				'table-bordered': '#dbd8d0'
			},
			gridTemplateRows: {
				'13': 'repeat(13, minmax(0, 1fr))',
				'14': 'repeat(14, minmax(0, 1fr))',
				'15': 'repeat(15, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))',
				'17': 'repeat(17, minmax(0, 1fr))',
				'18': 'repeat(18, minmax(0, 1fr))',
				'19': 'repeat(19, minmax(0, 1fr))',
				'20': 'repeat(20, minmax(0, 1fr))'
			},
			gridTemplateColumns: {
				'13': 'repeat(13, minmax(0, 1fr))',
				'14': 'repeat(14, minmax(0, 1fr))',
				'15': 'repeat(15, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))',
				'17': 'repeat(17, minmax(0, 1fr))',
				'18': 'repeat(18, minmax(0, 1fr))',
				'19': 'repeat(19, minmax(0, 1fr))',
				'20': 'repeat(20, minmax(0, 1fr))'
			},
			gridRow: {
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',
				'span-16': 'span 16 / span 16',
				'span-17': 'span 17 / span 17',
				'span-18': 'span 18 / span 18',
				'span-19': 'span 19 / span 19',
				'span-20': 'span 20 / span 20'
			},
			gridColumn: {
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',
				'span-16': 'span 16 / span 16',
				'span-17': 'span 17 / span 17',
				'span-18': 'span 18 / span 18',
				'span-19': 'span 19 / span 19',
				'span-20': 'span 20 / span 20'
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(to right, rgb(253, 186, 116, 1), rgb(239, 68, 68, 0.3)), url('/resources/css/images/pattern.png')"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			}
		},
		animation: {
			'fade-in': 'fade-in 0.3s ease-in-out',
			'fade-out': 'fade-out 0.3s ease-in-out',
			// spin: 'spin 1s linear infinite',
			// ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			// pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
		},
	},
	plugins: [require("tailwindcss-animate")],
};