import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                game1: 'game1.html',
                game2: 'game2.html',
                game3: 'game3.html',
                examples_actions_incX: 'IncX.html'
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
});
