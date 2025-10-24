import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                game1: 'game1.html',
                game2: 'game2.html',
                game3: 'game3.html',
                game4: 'BreakOut.html',
                examples_actions_incX: 'IncX.html',
                examples_actions_incY: 'IncY.html',
                examples_actions_angle: 'Angle.html',
                examples_actions_place_on_a_circle_multi: 'PlaceOnACircleMulti.html',
                examples_actions_rotate_around: 'RotateAround.html',
                examples_geometry_intersects_line_to_line: 'LineToLine.html',
                examples_geometry_intersects_rectangle_to_circle: 'RectangleToCircle.html',
                examples_geometry_intersects_circle_to_circle: 'CircleToCircle.html',
                examples_geometry_intersects_point_to_line: 'PointToLine.html',
                examples_geometry_intersects_triangle_to_circle: 'TriangleToCircle.html',
                examples_effects_barrel_filter: 'BarrelFilter.html',
                examples_effects_barrel_sprite_filter: 'BarrelSpriteFilter.html',
                examples_effects_barrel_squish_filter: 'BarrelSquishFilter.html',
                examples_effects_barrel_text: 'BarrelText.html',
                examples_physics_matterjs_sleep_events: 'SleepEvents.html',
                examples_physics_matterjs_increase_body_scale: 'IncreaseBodyScale.html',
                examples_physics_matterjs_cloth: 'Cloth.html',
                examples_physics_matterjs_circle_stack: 'CircleStack.html',
                particles_example1: 'Particle1.html'
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
});
