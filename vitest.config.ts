import { defineConfig } from 'vitest/config';

export default defineConfig({
	define: {
		DEBUG_MODE: false,
	},
	test: {
		// Date fixtures are recorded in this timezone, independent of the host.
		env: { TZ: 'America/Los_Angeles' },
		include: ['src/**/*.test.ts'],
		globals: true,
		alias: {
			'webextension-polyfill': new URL('./src/utils/__mocks__/webextension-polyfill.ts', import.meta.url).pathname,
		},
	},
});
