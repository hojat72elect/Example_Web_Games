import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                game1: 'game1.html',
                game2: 'game2.html',
                game3: 'game3.html',
                game4: 'BreakOut.html',
                game5: 'Game5AvoidTheGerms.html',
                game6: 'Snake.html',
                game7: 'CoinClicker.html',
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
                particles_example1: 'Particle1.html',
                textures_get_pixel_dynamic: 'GetPixelDynamic.html',
                textures_texture_packer_atlas: 'TexturePackerAtlas.html',
                camera_cross_scene_object_placement: "CrossSceneObjectPlacement.html",
                camera_ignore_game_objects: "IgnoreGameObjects.html",
                camera_rotate_camera: "RotateCamera.html",
                camera_ignore_container: "IgnoreContainer.html",
                camera_cameras_from_state_config: "CamerasFromStateConfig.html",
                game_objects_graphics_line_thickness: "LineThickness.html",
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
});
