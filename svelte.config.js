import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { codeToHtml } from 'shiki';

function escapeSvelte(code) {
  return code
    .replace(/[{]/g, '&#123;')
    .replace(/[}]/g, '&#125;')
    .replace(/\$/g, '&#36;');
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
    extensions: ['.svelte', '.md'],
	preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: ['.md'],
            layout: false,
            highlight: {
                highlighter: async (code, lang = 'text') => {
                    const html = await codeToHtml(code, {
                        lang,
                        theme: 'aurora-x'
                    });

                    return escapeSvelte(html);
                }
            }
        })
    ],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
