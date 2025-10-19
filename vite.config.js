import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                game1: 'game1.html',
                game2: 'game2.html',
                game3: 'game3.html',
                examples_actions_incX: 'IncX.html',
                examples_actions_incY: 'IncY.html',
                examples_actions_angle: 'Angle.html',
                examples_actions_place_on_a_circle_multi: 'PlaceOnACircleMulti.html',
                examples_actions_rotate_around: 'RotateAround.html'
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
});
