/// <reference types='vitest' />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
	root: __dirname,
	cacheDir: '../../node_modules/.vite/apps/nx-demo',
	server: {
		port: 4200,
		host: 'localhost',
	},
	preview: {
		port: 4300,
		host: 'localhost',
	},
	plugins: [react()],
	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [ nxViteTsPaths() ],
	// },
	build: {
		outDir: './dist',
		emptyOutDir: true,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
	test: {
		watch: false,
		globals: true,
		environment: 'jsdom',
		include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		reporters: ['default'],
		coverage: {
			reportsDirectory: './test-output/vitest/coverage',
			provider: 'v8' as const,
		},
	},
}));
