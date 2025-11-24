import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from '@svgr/rollup';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [svgr({ include: '**/*.svg' }), react()],
		resolve: {
			alias: {
				'1-app': path.resolve(__dirname, 'src/1-app'),
				'2-pages': path.resolve(__dirname, 'src/2-pages'),
				'3-widgets': path.resolve(__dirname, 'src/3-widgets'),
				'4-features': path.resolve(__dirname, 'src/4-features'),
				'5-entities': path.resolve(__dirname, 'src/5-entities'),
				'6-shared': path.resolve(__dirname, 'src/6-shared'),
			},
		},
		css: {
			modules: {
				localsConvention: 'camelCase',
				generateScopedName: '[name]__[local]__[hash:base64:5]',
			},
		},
		build: {
			outDir: 'dist',
			assetsDir: 'static',
			rollupOptions: {
				output: {
					assetFileNames: (assetInfo) => {
						let extType = assetInfo.name?.split('.').at(1);
						if (/png|jpe?g|gif|webp/.test(extType!)) {
							return 'static/images/[hash][extname]';
						}
						if (/woff2?|eot|ttf|otf/.test(extType!)) {
							return 'static/fonts/[hash][extname]';
						}
						if (extType === 'css') {
							return 'static/styles/[name].[hash].css';
						}
						return 'static/[name].[hash][extname]';
					},
					chunkFileNames: 'static/scripts/[name].[hash].js',
					entryFileNames: 'static/scripts/[name].[hash].js',
				},
			},
		},
		server: {
			port: 8080,
			open: true,
			historyApiFallback: true,
		},
		define: {
			'process.env': env,
		},
	};
});
