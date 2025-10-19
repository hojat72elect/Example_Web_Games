import Phaser from "phaser";

class Example extends Phaser.Scene {
    constructor() {
        super();

        this.gingerbreads = [];
    }

    preload() {
        this.load.setBaseURL("https://labs.phaser.io/assets");
        this.load.image('gingerbread', 'sprites/gingerbread.png');
    }

    create() {
        for (let i = 0; i < 15; i++) {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            this.gingerbreads.push(this.add.image(x, y, 'gingerbread'));
        }
    }

    update() {
        Phaser.Actions.Angle(this.gingerbreads, -3);
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

const game = new Phaser.Game(config);
