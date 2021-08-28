import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// import.meta.env.VUE_APP_VERSION = Date.now();
// const isDev = import.meta.env.DEV;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		legacy({
			targets: ['defaults', 'not IE 10']
		})
	],
	base: '/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
			gitmLib: path.resolve(__dirname, '../lib'),
			server: path.resolve(__dirname, '../server'),
			'socket.io-client': 'socket.io-client/dist/socket.io.js'
		}
	},
	// optimizeDeps: {
	// 	include: [
	// 		'socket.io-client',
	// 	],
	// 	esbuildOptions: {
	// 		plugins: [
	// 			esbuildCommonjs()
	// 		]
	// 	}
	// },
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					green: '#17c0ae',
					blue: '#409eff',
					orange: '#fe703f',
					red: ' #ef4f4f',
					black: 'rgb(48, 49, 51)',
					gray: '#909399',
					success: ' #67c23a',
					warning: ' #e6a23c',
					error: ' #ef4f4f',
					fontColor: '#5a5a5a',
					borderColor: '#ebeef5'
					// 'button-primary-background-color': 'red',
					// 'primary-color': '#1890ff', // 全局主色
					// 'link-color': '#fff', // 链接色
					// 'success-color': '#67c23a', // 成功色
					// 'warning-color': '#e6a23c', // 警告色
					// 'error-color': ' #ef4f4f', // 错误色
					// 'font-size': '20px', // 主字号
					// blue: '#396eff',
					// 'light-blue': '#a1e7ff',
					// yellow: '#ffb22e',
					// green: '#95ff00',
					// cyan: '#00ffe6 ',
					// 'light-cyan': '#3fffe6',
					// rose: '#ff1fa3',
					// 'light-rose': '#ff6788',
					// 'heading-color': 'rgba(255, 255, 255, 0.85)', // 标题色
					// 'text-color': 'rgba(255, 255, 255, 0.5)', // 主文本色
					// 'text-color-secondary': 'rgba(255, 255, 255, 0.45)', // 次文本色
					// 'disabled-color': 'rgba(255, 255, 255, 0.25)', // 失效色
					// 'border-radius': '4px', // 组件/浮层圆角
					// 'border-color': '#ebeef5', // 边框色
					// 'box-shadow': '0 2px 8px rgba(255, 255, 255, 0.15)', // 浮层阴影}
					// hack: `true; @import "assets/css/var.less";`,
				},
				javascriptEnabled: true
			},
			scss: {
				// additionalData: '@import "src/assets/styles/vars.scss";',
			}
		}
	},
	server: {
		proxy: {
			'/jar/': {
				target: 'http://127.0.0.1:3000',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/jar\//, '/')
			}
		},
		port: 8080
		// headers: {
		// 	'Access-Control-Allow-Origin': '*',
		// },
	}
	// css: {
	//     // requireModuleExtension: true,
	//     loaderOptions: {
	//         css: {
	//             importLoaders: 2,
	//             import: true,
	//             modules: {
	//                 // localIdentName: '[path][name]__[local]--[hash:base64:5]',
	//                 localIdentName: '[path][local]_[hash:base64:5]',
	//             },
	//             localsConvention: 'camelCaseOnly',
	//         },
	//         // postcss: {
	//         //     plugins: [new aspectRatio(), new pxtovw(postcss)],
	//         // },
	//     },
	// },
})