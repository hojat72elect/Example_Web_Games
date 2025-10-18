/// <reference types="vitest" />
import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                game2: 'game2.html'
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        dir: 'test',
    },
});
