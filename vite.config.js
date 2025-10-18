/// <reference types="vitest" />
import {defineConfig} from 'vite';

export default defineConfig({
    server: {
        open: true
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        dir: 'tests',
    },
});
