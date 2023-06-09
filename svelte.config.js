import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx']
		})],
	kit: {
		adapter: adapter(),
	},
};

export default config;
