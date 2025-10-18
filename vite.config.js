import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                game1: 'game1.html',
                game2: 'game2.html'
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
});
