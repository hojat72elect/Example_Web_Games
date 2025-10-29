import Phaser from "phaser";

class Example extends Phaser.Scene {
    create() {
        const graphics = this.add.graphics();

        graphics.lineStyle(5, 0x2255ff, 1);

        //  Without this, the arc will appear closed when stroked
        graphics.beginPath();
        graphics.arc(400, 300, 200, Phaser.Math.DegToRad(90), Phaser.Math.DegToRad(180), true);

        graphics.strokePath();
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

new Phaser.Game(config);