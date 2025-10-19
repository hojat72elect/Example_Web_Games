import Phaser from "phaser";

class Example extends Phaser.Scene {
    constructor() {
        super();

        this.donuts = [];
    }

    preload() {
        this.load.setBaseURL("https://labs.phaser.io/assets");
        this.load.image('bg', 'skies/grid.png');
        this.load.image('donut', 'sprites/donut.png');
    }

    create() {
        this.add.image(400, 600, 'bg').setOrigin(0.5, 1);
        this.cameras.main.setBounds(0, 0, 800, 600);
        for (let i = 0; i < 16; i++) {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(200, 600);

            this.donuts.push(this.add.image(x, y, 'donut'));
        }
    }

    update() {
        Phaser.Actions.IncY(this.donuts, -2, -0.5);
        Phaser.Actions.WrapInRectangle(this.donuts, this.cameras.main.getBounds(), 128);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

 new Phaser.Game(config);
