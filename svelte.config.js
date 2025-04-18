import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		{
			name: 'announcer-styles',
			markup: ({ content: code }) => {
				code = code.replace(
					/(<div id="svelte-announcer"[^>]*?)\s+style="[^"]*"/,
					'$1 class="feint-announcer"'
				);
				return { code };
			}
		}
	],
	kit: {
		adapter: adapter(),
		output: {
			preloadStrategy: 'preload-mjs'
		},
		appDir: 'base'
	},
	compilerOptions:
		process.env.NODE_ENV === 'production'
			? {
					cssHash: ({ hash, css }) => `feint-${hash(css)}`
				}
			: {},
	optimizeDeps: {
		exclude: ['lucide-svelte']
	}
};

export default config;
