import Phaser from 'phaser';

class Game2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Game2' });
    }

    preload() {
        // Preload assets for Game 2
    }

    create() {
        this.add.text(400, 300, 'Hello from Game 2!', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Game2]
};

const game = new Phaser.Game(config);
