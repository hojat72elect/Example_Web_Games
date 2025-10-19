import Phaser from "phaser";

class Example extends Phaser.Scene {
    constructor() {
        super();

        this.planes = [];
    }

    preload() {
        this.load.setBaseURL("https://labs.phaser.io/assets");
        this.load.image('bg', 'skies/deepblue.png');
        this.load.image('plane', 'sprites/ww2plane.png');
    }

    create() {

        this.add.image(400, 300, 'bg');
        this.cameras.main.setBounds(0, 0, 800, 600);

        for (let i = 0; i < 100; i++) {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);
            this.planes.push(this.add.image(x, y, 'plane'));
        }
    }

    update() {
        Phaser.Actions.IncY(this.planes, -1, -0.025);
        Phaser.Actions.WrapInRectangle(this.planes, this.cameras.main.getBounds(), 128);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

new Phaser.Game(config);
