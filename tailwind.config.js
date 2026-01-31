/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			transitionProperty: {
				height: 'height',
				allbutheight: 'filter, opacity'
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite'
			},
			backgroundImage: {
				hero: "url('/perma/cover.jpg')",
				logo: "url('/assets/branding/sg-brand-shahi.svg')"
			},
			colors: {
				'imperial-red': '#F93943',
				'tokyo-tower-orange': '#D87149',
				'brand-white': '#F4F2F3',
				'brand-darker': '#2A272A',
				'brand-blue': '#058ED9',
				'brand-dark': '#2E2C2F'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				punjabi: ['Noto Sans Gurmukhi', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
				branding: ['forma-djr-banner', 'sans-serif']
			}
		}
	},
	plugins: []
};
