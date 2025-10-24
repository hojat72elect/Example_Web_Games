import Phaser from "phaser";

class Game2 extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.setBaseURL("https://labs.phaser.io/assets");
        this.load.image('pic', 'pics/anime-ai.jpg');
        this.load.image('test', 'sprites/phaser3-logo.png');
    }

    create() {
        const bg = this.add.image(400, 300, 'pic');
        const logo = this.add.image(400, 500, 'test');

        const fx = bg.preFX.addVignette(0.5, 0.5, 0, 0.5);
        const fx2 = logo.preFX.addVignette(0.5, 0.5, 0, 0.2);

        const text = this.add.text(10, 10, 'FX.Vignette.radius: 0');

        this.tweens.add({
            targets: [ fx, fx2 ],
            radius: 1,
            duration: 4000,
            yoyo: true,
            loop: -1,
            hold: 1000,
            onUpdate: () => {
                text.setText(`FX.Vignette.radius: ${fx.radius}`);
            }
        });

        this.tweens.add({
            targets: logo,
            y: 550,
            duration: 1000,
            yoyo: true,
            loop: -1,
            ease: 'sine.inout'
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Game2
};

new Phaser.Game(config);
