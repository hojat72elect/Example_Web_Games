import Phaser from "phaser";

export class HelloWorldScene extends Phaser.Scene {
    constructor() {
        super('hello-world');
    }

    preload() {
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create() {

        const emitter = this.add.particles(350, 350, 'red', {
            speed: 100,
            scale: {start: 1, end: 0},
            blendMode: 'ADD',
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: HelloWorldScene
};


new Phaser.Game(config);