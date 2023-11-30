const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'cagnos-blue': '#4359d1',
				'cagnos-light-blue': '#e6e9ff',
				'cagnos-faint-blue': '#f0f1ff',
				'cagnos-dark-blue': '#283ba6',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
