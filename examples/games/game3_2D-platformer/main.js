import Phaser from "phaser";
import {PlatformerGame} from "./PlatformerGame";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    backgroundColor: '#2d2d2d',
    scene: PlatformerGame
};

new Phaser.Game(config);
