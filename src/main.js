import Phaser from "phaser";

class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        // Load all assets here
        this.load.image("logo", "https://labs.phaser.io/assets/sprites/phaser3-logo.png");
    }

    create() {
        // Add something to the screen
        const logo = this.add.image(700, 150, "logo");

        // Simple tween animation
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2_000,
            ease: 'Bounce.easeOut',
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1400,
    height: 700,
    backgroundColor: '#2d2d2d',
    scene: MyGame
};

new Phaser.Game(config);
