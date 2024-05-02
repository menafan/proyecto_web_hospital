/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'steel_blue': { 
				DEFAULT: '#4f7cac',
				100: '#101922', 
				200: '#1f3144', 
				300: '#2f4a67', 
				400: '#3f6389', 
				500: '#4f7cac', 
				600: '#7096bd', 
				700: '#94b0ce', 
				800: '#b8cade', 
				900: '#dbe5ef' 
			},
			'mint_green': { 
				DEFAULT: '#c0e0de', 
				100: '#1c3836', 
				200: '#37706c', 
				300: '#53a8a2', 
				400: '#89c5c1', 
				500: '#c0e0de', 
				600: '#cee7e5', 
				700: '#daedec', 
				800: '#e6f3f2', 
				900: '#f3f9f9' 
			}, 
			'gunmetal': { 
				DEFAULT: '#162521', 
				100: '#050807', 
				200: '#090f0e', 
				300: '#0e1715', 
				400: '#121f1b', 
				500: '#162521', 
				600: '#395e54', 
				700: '#5a9686', 
				800: '#8fbcb0', 
				900: '#c7ddd7' 
			}, 
			'outer_space': { 
				DEFAULT: '#3c474b', 
				100: '#0c0e0f', 
				200: '#181c1d', 
				300: '#232a2c', 
				400: '#2f383b', 
				500: '#3c474b', 
				600: '#5d6d73', 
				700: '#81949a', 
				800: '#abb7bc', 
				900: '#d5dbdd' 
			}, 
			'ice_blue': { 
				DEFAULT: '#9eefe5', 
				100: '#0b443e', 
				200: '#16897b', 
				300: '#21cdb9', 
				400: '#5ae4d4', 
				500: '#9eefe5', 
				600: '#b2f2eb', 
				700: '#c5f6f0', 
				800: '#d8f9f5', 
				900: '#ecfcfa'}
		}
	},
	plugins: [animations],
}