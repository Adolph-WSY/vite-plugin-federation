import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        ElementPlus(),
        vue(),
        federation({
            name: 'router-remote',
            filename: 'remoteEntry.js',
            exposes: {
                './ElementPlus': './src/components/ElementPlus.vue',
            },
            shared: ["vue", "element-plus"]
        })
    ],
    build: {
        polyfillModulePreload: false,
        assetsInlineLimit: 40960,
        target: 'es2020',
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            // external: ["vue"],
            output: {
                minifyInternalExports: false
            }
        }
    }
})
