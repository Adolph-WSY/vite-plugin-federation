import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: "router-host",
            filename: "remoteEntry.js",
            remotes: {
                "router-remote": "http://localhost:5005/remoteEntry.js",
            },
            shared: ["vue", "element-plus"]
        })
    ],
    optimizeDeps:{
        include: ["element-plus"]
    },
    build: {
        target: 'es2020',
        minify: false,
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                minifyInternalExports: false
            }
        }
    },
});
