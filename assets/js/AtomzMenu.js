var confirmfx;

class AtomzMenu extends Phaser.Scene {

bg;
    title;
    logo;
    startButton;
    learnButton;
    fullscreenButton;
    
    menùmusic;
    
    constructor() {
        super("AtomzMenu");
    }
    
    
    preload() {
        //load audio
        this.load.audio("menù",'assets/sounds/music/menùcut.mp3');
        this.load.audio("game",'assets/sounds/music/game.mp3');
        this.load.audio("ending",'assets/sounds/music/ending.mp3');
        
        
        this.load.audio("confirm",'assets/sounds/fx/confirm.mp3');
        this.load.audio("recharge",'assets/sounds/fx/recharge.mp3');
        this.load.audio("shoot_1",'assets/sounds/fx/electronShoot_1.mp3');
        this.load.audio("death",'assets/sounds/fx/death.mp3');
        this.load.audio("hit_1",'assets/sounds/fx/hit_1.mp3');
        this.load.audio("gluonrecharge",'assets/sounds/fx/gluonrecharge.mp3');
        this.load.audio("gluondecharge",'assets/sounds/fx/gluondecharge.mp3');
        this.load.audio("sirens",'assets/sounds/fx/gluonsirens.mp3');
        this.load.audio("thunder",'assets/sounds/fx/gluonthunder.mp3');

        





        /** posso precaricare gli asset in una scena e rimarranno accessibili alle altre */
        this.load.image('background', 'assets/img/background.png');
        this.load.image('gluonThunder', 'assets/img/ui/gluonThunder.png');

        this.load.image('ui', 'assets/img/ui/ui.png');
        this.load.image('uiT', 'assets/img/ui/thunder.png');
        this.load.image('arsenalUI', 'assets/img/ui/arsenal.png');
        this.load.image('logo', 'assets/img/ui/ui_logo.png');
        this.load.image('ui_bg', 'assets/img/ui/ui_bg.png');

        this.load.spritesheet('start', 'assets/img/ui/UIstart_button_Sheet.png', {
            frameWidth: 296,
            frameHeight: 296
        });

        this.load.spritesheet('learn', 'assets/img/ui/UIlearn_button_Sheet.png', {
            frameWidth: 296,
            frameHeight: 296
        });

        this.load.spritesheet('fullscreen', 'assets/img/ui/UIfs_button_Sheet.png', {
            frameWidth: 100,
            frameHeight: 100
        });

        this.load.spritesheet('restart', 'assets/img/ui/UIrestart_button_Sheet.png', {
            frameWidth: 296,
            frameHeight: 296
        });

        this.load.spritesheet('quit', 'assets/img/ui/UIquit_button_Sheet.png', {
            frameWidth: 296,
            frameHeight: 296
        });

        this.load.image('title', 'assets/img/ui/ui_title.png');



//load player's sheets

        this.load.spritesheet('playerH', 'assets/img/chars/Player/PlayerHSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('playerHe', 'assets/img/chars/Player/PlayerHeSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('playerLi', 'assets/img/chars/Player/PlayerLiSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('playerBe', 'assets/img/chars/Player/PlayerBeSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('playerB', 'assets/img/chars/Player/PlayerBSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });

//Load enemies sheets
        this.load.spritesheet('H', 'assets/img/chars/HSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('He', 'assets/img/chars/HeSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('Li', 'assets/img/chars/LiSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('Be', 'assets/img/chars/BeSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('B', 'assets/img/chars/BSheet_64.png', {
            frameWidth: 64,
            frameHeight: 64
        });


        this.load.spritesheet('electron', 'assets/img/bullets/electronSheet_32.png', {
            frameWidth: 32,
            frameHeight: 32
        });
        
        this.load.spritesheet('gluon', 'assets/img/bullets/gluonSheet_30.png', {
            frameWidth: 30,
            frameHeight: 30
        });


         this.load.spritesheet('lp', 'assets/img/ui/LPSheet.png', {
            frameWidth: 40,
            frameHeight: 40
        });
        

        
    }


    create() {
        
      
        this.showTitle();
    }



    showTitle() {
        
        
        this.bg=this.add.sprite(512,180,"ui_bg");
        this.bg.alpha=0;
        this.tweens.add({
            targets: [this.bg],
            alpha: 1,
            duration: 300,
            callbackScope: this,
            onComplete: function() {
                this.bgCallBack();
            }
            
        });
        
        this.logo = this.add.sprite(240, 180, 'logo');
        this.logo.scale = 0;
        this.tweens.add({
            targets: [this.logo],
            scale: 1.2,
            duration: 1000,
            callbackScope: this,
            onComplete: function() {
                this.logoCallBack();
            }
        });
        

    }

logoCallBack(){

    this.tweens.add({
        targets: [this.logo],
        scale: 1,
        duration: 200,
        callbackScope: this,
        onComplete: function() {
            this.showButtons();
        }
    });

}

bgCallBack(){

    this.menùmusic=this.sound.add("menù", {loop: true, volume:0.5});
    this.menùmusic.play();


    this.title=this.add.sprite(-500,180,"title");
    this.tweens.add({
        targets: [this.title],
        x: 320,
        duration: 1500,
        callbackScope: this,
        onComplete: function() {
            this.titleCallBack();
        }
    });


}


titleCallBack(){

    this.tweens.add({
        targets: [this.title],
        x: 290,
        duration: 500
    });

}


    showButtons() {
        //this.startButton = this.add.sprite(400, 800, 'start_button');
        this.learnButton = this.add.sprite(740, -500, 'learn', 0);
        this.tweens.add({
            targets: [this.learnButton],
            y: 250,
            duration: 1300,
        });
        this.learnButton.setInteractive();

        this.anims.create({
            key: 'learn_mouseout',
            frames: [{ key: 'learn', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'learn_mouseover',
            frames: [{ key: 'learn', frame: 1 }],
            frameRate: 20
        });

        this.learnButton.on('pointerover', () => {
           
            this.learnButton.anims.play('learn_mouseover');

        });

        this.learnButton.on('pointerout', () => {
           
            this.learnButton.anims.play('learn_mouseout');

        });

        this.startButton = this.add.sprite(740, -300, 'start', 0);
        this.tweens.add({
            targets: [this.startButton],
            y: 100,
            duration: 1000,
        });
        this.startButton.setInteractive();

        this.anims.create({
            key: 'start_mouseout',
            frames: [{ key: 'start', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'start_mouseover',
            frames: [{ key: 'start', frame: 1 }],
            frameRate: 20
        });

        this.startButton.on('pointerdown', () => {
            confirmfx=this.sound.add("confirm", {loop: false, volume:0.5});
            confirmfx.play();
            this.menùmusic.stop();
            this.scene.start("MainScene");
        });

        this.startButton.on('pointerover', () => {
           
            this.startButton.anims.play('start_mouseover');

        });

        this.startButton.on('pointerout', () => {
           
            this.startButton.anims.play('start_mouseout');

        });

        this.fullscreenButton = this.add.sprite(1100, 40, 'fullscreen');


        this.tweens.add({
            targets: [this.fullscreenButton],
            x: 950,
            duration: 500,
        });
        this.startButton.setInteractive();


        this.anims.create({
            key: 'fs_mouseout',
            frames: [{ key: 'fullscreen', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'fs_mouseover',
            frames: [{ key: 'fullscreen', frame: 1 }],
            frameRate: 20
        });

        this.fullscreenButton.setInteractive();

        this.fullscreenButton.on('pointerdown', () => {
            if (!this.scale.isFullscreen) {
                this.scale.startFullscreen();
            } else {
                this.scale.stopFullscreen();
            }
        });

        this.fullscreenButton.on('pointerover', () => {
           
            this.fullscreenButton.anims.play('fs_mouseover');

        });

        this.fullscreenButton.on('pointerout', () => {
           
            this.fullscreenButton.anims.play('fs_mouseout');

        });

    }






}