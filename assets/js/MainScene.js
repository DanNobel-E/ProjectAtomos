// var enemiesDictionary= new EnemyDictionary();
const LevelDictionary= new AtomsElectrons();
// var playerAnimParameters= new AnimDictionary();
// var enemiesAnimParameters= new AnimDictionary();

class MainScene extends Phaser.Scene {

EnemiesDictionary= {

    H:0,
    He:0,
    Li:0,
    Be:0,
    B:0,



};

//audio

gamemusic;
endingmusic;

rechargefx;
shoot1fx;
deathfx;
hitfx;

gluonrechargefx;
gluondechargefx;
sirensfx;
thunderfx;



/* BG & UI */ 
background;
background2;
bgVelocity=-150;

thunder1;
thunder2;


minY=60;
maxY=300;

ui;
uiElement;
uiX=100;
uiY=40;

lps;
arsenalUI;
gluonUI;

restartButton;
quitButton;

score=0;
scoreText;

player;
playerVelocity=160;
playerBounceVelocity=100;
playerLevel="H";
playerLP=3;
playerArsenal;


playerBullets;
playerBulletsCount=LevelDictionary[this.playerLevel];
playerBulletsVelocity=900;
enemyBullets;
hEnemyBulletsVelocity=-900;
bulletsOffset=25;
protectionBullets;

hEnemies;
heEnemies;
liEnemies;
beEnemies;
bEnemies;



gluon;
gluonSpawn=true;
gluonSpawnTimer;
gluonSpawnDuration=25;
gluonHV=-800;
gluonBV=500;


outOfBoundsOffset=5;
gluonOutOfBoundsOffset=20;

nextEnemyIndex;
enemiesStartPos=1090;


SpawnDictionary={

    H:{
        spawnTimer:new Date().getTime(),
        spawnDuration:0,
        minSpawnDuration:2,
        maxSpawnDuration:4,
        firstSpawn: true,
        firstSpawnDuration:0,
        
    },

    He:{
        spawnTimer:new Date().getTime(),
        spawnDuration:0,
        minSpawnDuration:10,
        maxSpawnDuration:25,
        firstSpawn: false,
        firstSpawnDuration:30,
    },

    Li:{
        spawnTimer:new Date().getTime(),
        spawnDuration:0,
        minSpawnDuration:15,
        maxSpawnDuration:35,
        firstSpawn: false,
        firstSpawnDuration:120,

        
    },

    Be:{
        spawnTimer:new Date().getTime(),
        spawnDuration:0,
        minSpawnDuration:50,
        maxSpawnDuration:100,
        firstSpawn: false,
        firstSpawnDuration:200,

        
    },

    B:{
        spawnTimer:new Date().getTime(),
        spawnDuration:0,
        minSpawnDuration:10,
        maxSpawnDuration:20,
        firstSpawn: false,
        firstSpawnDuration:220,

        
    },

}



/* Player parameters */

playerAnimObjs={

H:{
    AnimTimer: new Date().getTime(),
    AnimLabels:["p_HOpenEyes","p_HCloseEyes","p_HCloseMouth"],
    IdleDuration:1500,
    BlinkDuration:100,
    AnimIndex:0,
    AnimOffset:1
},
He:{

    AnimTimer: new Date().getTime(),
    AnimLabels:["p_HeOpenEyes","p_HeCloseEyes","p_HeCloseMouth"],
    IdleDuration:1500,
    BlinkDuration:100,
    AnimIndex:0,
    AnimOffset:1
},

Li:{
    AnimTimer: new Date().getTime(),
    AnimLabels:["p_LiOpenEyes","p_LiCloseEyes","p_LiCloseMouth"],
    IdleDuration:1500,
    BlinkDuration:100,
    AnimIndex:0,
    AnimOffset:1
},

Be:{
    AnimTimer: new Date().getTime(),
    AnimLabels:["p_BeOpenEyes","p_BeCloseEyes","p_BeCloseMouth"],
    IdleDuration:1500,
    BlinkDuration:100,
    AnimIndex:0,
    AnimOffset:1
},

B:{
    AnimTimer: new Date().getTime(),
    AnimLabels:["p_BOpenEyes","p_BCloseEyes","p_BCloseMouth"],
    IdleDuration:1500,
    BlinkDuration:100,
    AnimIndex:0,
    AnimOffset:1
},

}



/* H parameters */
minIdleDuration=1000;
maxIdleDuration=1500;

EAnimObjs={

H:{
    
    AnimTimer: 0,
    AnimLabels:["hOpenEyes","hCloseEyes"],
    IdleDuration:0,
    BlinkDuration:100,
    AnimIndex: 0,
    AnimOffset:0

},

He:{
    
    AnimTimer: 0,
    AnimLabels:["heOpenEyes","heCloseEyes"],
    IdleDuration:0,
    BlinkDuration:300,
    AnimIndex: 0,
    AnimOffset:0

},

Li:{
    
    AnimTimer: 0,
    AnimLabels:["liOpenEyes","liCloseEyes"],
    IdleDuration:0,
    BlinkDuration:800,
    AnimIndex: 0,
    AnimOffset:0

},

Be:{
    
    AnimTimer: 0,
    AnimLabels:["beOpenEyes","beCloseEyes"],
    IdleDuration:0,
    BlinkDuration:1500,
    AnimIndex: 0,
    AnimOffset:0

},

B:{
    
    AnimTimer: 0,
    AnimLabels:["bOpenEyes","bCloseEyes"],
    IdleDuration:0,
    BlinkDuration:800,
    AnimIndex: 0,
    AnimOffset:0

},
}


EPropertiesDictionary={

H:{ minHV:-150,
    maxHV:-100,
    minBV:-80,
    maxBV:80,
    minShootDuration:2,
    maxShootDuration:5,
    points:5,
    bulletHVelocity: -900,
    bulletBVelocity: 0,
    numProtBullets:0,
    protectionRadius:0,
    angleOffset:0,

},

He:{ minHV:-120,
    maxHV:-80,
    minBV:-30,
    maxBV:30,
    minShootDuration:5,
    maxShootDuration:10,
    points:10,
    bulletHVelocity: 0,
    bulletBVelocity: 0,
    numProtBullets:2,
    protectionRadius:60,
    angleOffset:2.14,

},

Li:{ minHV:-60,
    maxHV:-50,
    minBV:0,
    maxBV:0,
    minShootDuration:3,
    maxShootDuration:3,
    points:25,
    bulletHVelocity: -700,
    bulletBVelocity: 0,
    numProtBullets:0,
    protectionRadius:0,
    angleOffset:0,

},

Be:{ minHV:-250,
    maxHV:-210,
    minBV:-700,
    maxBV:700,
    minShootDuration:1,
    maxShootDuration:1,
    points:80,
    bulletHVelocity: -1100,
    bulletBVelocity: 0,
    numProtBullets:0,
    protectionRadius:0,
    angleOffset:0,

},

B:{ minHV:-150,
    maxHV:-120,
    minBV:-400,
    maxBV:400,
    minShootDuration:3,
    maxShootDuration:5,
    points:60,
    bulletHVelocity: -1000,
    bulletBVelocity: 0,
    numProtBullets:4,
    protectionRadius:60,
    angleOffset:5,

},


};






    constructor() {
        super("MainScene");
    }

    

    
    create() {
        
//audio
    this.gamemusic=this.sound.add("game", {loop: true, volume: 0.3});
    this.endingmusic=this.sound.add("ending", {loop: false, volume: 0.5});
    
    
    this.gamemusic.play();
    
    this.rechargefx=  this.sound.add("recharge", {loop: false});
    this.shoot1fx=  this.sound.add("shoot_1", {loop: false});
    this.deathfx=  this.sound.add("death", {loop: false});
    this.hitfx=  this.sound.add("hit_1", {loop: false});
    
    this.gluonrechargefx=  this.sound.add("gluonrecharge", {loop: false});
    this.gluondechargefx=  this.sound.add("gluondecharge", {loop: false});
    this.sirensfx=this.sound.add("sirens", {loop: false, volume: 0.5, rate: 1.2});
    this.thunderfx=  this.sound.add("thunder", {loop: false});




    //bg
        
        this.background= this.physics.add.sprite(615, 180, 'background');
        this.background2= this.physics.add.sprite(1230+615, 180, 'background');
        this.background.setVelocityX(this.bgVelocity);
        this.background2.setVelocityX(this.bgVelocity);
        this.background.alpha=0;
        this.tweens.add({
            targets: [this.background],
            alpha: 1,
            duration: 300,
            }
            
        );

        this.thunder1= this.add.sprite(0,180,"gluonThunder");
        this.thunder1.alpha=0;
        this.thunder1.depth=1;
        this.thunder2= this.add.sprite(1024,180,"gluonThunder");
        this.thunder2.alpha=0;
        this.thunder2.depth=1;



        this.ui=this.add.sprite(this.uiX,this.uiY,"ui");
        this.ui.depth=2;
        this.ui.alpha=0;
        this.tweens.add({
            targets: [this.ui],
            alpha: 1,
            duration: 1200,
            }
            
        );
            this.lps= this.add.group({
            key: "lp",
            repeat: 2,
            setXY: {x:60, y:38, stepX: 40},
            setScale: {x:0.7, y:0.7}

            });

            let lives= this.lps.getChildren();
            for(let i=0;i<lives.length;i++){
                lives[i].depth=1;
                lives.alpha=0;
                this.tweens.add({
                    targets: [lives[i]],
                    alpha: 1,
                    duration: 1200,
                    }
                    
                );
            }

            this.uiElement=this.add.sprite(280,45,"uiT");
            this.uiElement.scaleX= 1.7;
            this.uiElement.depth=1;
            this.uiElement.alpha=0;
                this.tweens.add({
                    targets: [this.uiElement],
                    alpha: 1,
                    duration: 1200,
                    }
                    
                );

            this.gluonUI=this.add.sprite(470, 40, 'gluon');
            this.gluonUI.depth=1;
            this.gluonUI.setVisible(false);

            this.scoreText=   this.add.text(200, 25, "De-Ionization:  "+ this.score+" eV", {
                font: "25px Arial",
                fill: "#0003a3",
                align: "center",
                fontWeight: "bold",
                stroke :'#f5d000',
                strokeThickness : 2
            });
       
         this.scoreText.depth=2;
         this.scoreText.alpha=0;
                this.tweens.add({
                    targets: [this.scoreText],
                    alpha: 1,
                    duration: 1200,
                    }
                    
                );
        
        /** PLAYER */
        this.player = this.physics.add.sprite(100, 160, 'playerH');
        this.player.setBounce(0.8);
        this.player.setCollideWorldBounds(true);
        this.player.body.setCircle(this.player.width*0.4);
        this.player.hV= this.playerVelocity;
        this.player.bV=this.playerBounceVelocity;
        this.player.bulletCount= this.playerBulletsCount;
        this.player.level=this.playerLevel;
        this.player.lp=this.playerLP;
        this.player.hasGluon=false;
        this.player.tint=0xffffff;
        this.player.rechargeSound= this.rechargefx;
        this.player.shootSound1=this.shoot1fx;
        this.player.deathSound=this.deathfx;
        this.player.hitSound=this.hitfx;
        this.player.bulletHVelocity= this.playerBulletsVelocity;
        this.player.bulletBVelocity= 0;




        //playerAnimParameters.H= new AnimationParameters(this.playerAnimObj);
        this.player.AnimParameters={
                H: new AnimationParameters(this.playerAnimObjs["H"]),
                He: new AnimationParameters(this.playerAnimObjs["He"]),
                Li: new AnimationParameters(this.playerAnimObjs["Li"]),
                Be: new AnimationParameters(this.playerAnimObjs["Be"]),
                B: new AnimationParameters(this.playerAnimObjs["B"]),



        }

        this.player.alpha=0;
                this.tweens.add({
                    targets: [this.player],
                    alpha: 1,
                    duration: 1500,
                    }
                    
                );

        /** Bullets */
        this.playerArsenal = this.add.group({
            key: 'electron',
            repeat: 7,
            setXY: { x: 40, y: 330, stepX: 40}
        });

        this.arsenalUI = this.add.group({
            key: 'arsenalUI',
            repeat: 7,
            setXY: { x: 40, y: 330, stepX: 40}
        });

       
        let arsenals= this.playerArsenal.getChildren();
        let aUI= this.arsenalUI.getChildren();




        for(let i=0;i<arsenals.length;i++){
            aUI[i].depth=1;
            arsenals[i].depth=2;
            if(i>this.player.bulletCount-1){

                aUI[i].setVisible(false);
                arsenals[i].setVisible(false);

            }else{
                aUI[i].setVisible(true);
                arsenals[i].setVisible(true);
                aUI[i].alpha=0;
                this.tweens.add({
                    targets: [aUI[i]],
                    alpha: 1,
                    duration: 1200,
                    }
                    
                );
                arsenals[i].alpha=0;
                this.tweens.add({
                    targets: [arsenals[i]],
                    alpha: 1,
                    duration: 1200,
                }
                
                );
            }
        };
        
        this.playerBullets = this.physics.add.group({
            key: 'electron',
            repeat: 9,
            setXY: { x: this.player.x+this.player.width*0.5+this.bulletsOffset, y: this.player.y }
        });
        
        this.enemyBullets = this.physics.add.group({
            key: 'electron',
            repeat: 14,
            setXY: { x: -50, y: -50 }
        });

        this.protectionBullets = this.physics.add.group({
            key: 'electron',
            repeat: 60,
            setXY: { x: -50, y: -50 }
        });

        //buttons
        this.restartButton=this.add.sprite(-200,180,"restart");
        this.restartButton.depth=3;

        
        this.restartButton.setVisible(false);
        this.restartButton.active=false;

        this.anims.create({
            key: 'restart_mouseout',
            frames: [{ key: 'restart', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'restart_mouseover',
            frames: [{ key: 'restart', frame: 1 }],
            frameRate: 20
        });

        this.restartButton.on('pointerover', () => {
           
            this.restartButton.anims.play('restart_mouseover');

        });

        this.restartButton.on('pointerout', () => {
           
            this.restartButton.anims.play('restart_mouseout');

        });

        this.restartButton.on('pointerdown', () => {
            confirmfx.play();
            this.restart();
        });

        this.quitButton=this.add.sprite(1224,180,"quit");
        this.quitButton.depth=3;

        this.quitButton.setVisible(false);
        this.quitButton.active=false;

        this.anims.create({
            key: 'quit_mouseout',
            frames: [{ key: 'quit', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'quit_mouseover',
            frames: [{ key: 'quit', frame: 1 }],
            frameRate: 20
        });

        this.quitButton.on('pointerover', () => {
           
            this.quitButton.anims.play('quit_mouseover');

        });

        this.quitButton.on('pointerout', () => {
           
            this.quitButton.anims.play('quit_mouseout');

        });

        this.quitButton.on('pointerdown', () => {
            confirmfx.play();
            this.quit();
        });

        
        /*Player Anims */

        //H
        this.anims.create({
            key: 'p_HOpenEyes',
            frames: [{ key: 'playerH', frame: 0 }],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'p_HCloseEyes',
            frames: [{ key: 'playerH', frame: 1 }],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'p_HCloseMouth',
            frames: [{ key: 'playerH', frame: 2 }],
            frameRate: 20
        });

        //He
        this.anims.create({
            key: 'p_HeOpenEyes',
            frames: [{ key: 'playerHe', frame: 0 }],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'p_HeCloseEyes',
            frames: [{ key: 'playerHe', frame: 1 }],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'p_HeCloseMouth',
            frames: [{ key: 'playerHe', frame: 2 }],
            frameRate: 20
        });

//Li

this.anims.create({
    key: 'p_LiOpenEyes',
    frames: [{ key: 'playerLi', frame: 0 }],
    frameRate: 20
});

this.anims.create({
    key: 'p_LiCloseEyes',
    frames: [{ key: 'playerLi', frame: 1 }],
    frameRate: 20
});

this.anims.create({
    key: 'p_LiCloseMouth',
    frames: [{ key: 'playerLi', frame: 2 }],
    frameRate: 20
});



//Be

this.anims.create({
    key: 'p_BeOpenEyes',
    frames: [{ key: 'playerBe', frame: 0 }],
    frameRate: 20
});

this.anims.create({
    key: 'p_BeCloseEyes',
    frames: [{ key: 'playerBe', frame: 1 }],
    frameRate: 20
});

this.anims.create({
    key: 'p_BeCloseMouth',
    frames: [{ key: 'playerBe', frame: 2 }],
    frameRate: 20
});

//B

this.anims.create({
    key: 'p_BOpenEyes',
    frames: [{ key: 'playerB', frame: 0 }],
    frameRate: 20
});

this.anims.create({
    key: 'p_BCloseEyes',
    frames: [{ key: 'playerB', frame: 1 }],
    frameRate: 20
});

this.anims.create({
    key: 'p_BCloseMouth',
    frames: [{ key: 'playerB', frame: 2 }],
    frameRate: 20
});


        /*Electron Anims */
        this.anims.create({
            key: 'electronShoot',
            frames: this.anims.generateFrameNumbers('electron', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'gluonShoot',
            frames: this.anims.generateFrameNumbers('gluon', { start: 0, end: 48 }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({
            key: 'loseLP',
            frames: this.anims.generateFrameNumbers('lp', { start: 0, end: 2 }),
            frameRate: 5
        });
        
        /*H Anims */
        
        this.anims.create({
            key: 'hOpenEyes',
            frames: [{ key: 'H', frame: 0 }],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'hCloseEyes',
            frames: [{ key: 'H', frame: 1 }],
            frameRate: 20
        });
        
        
        this.hEnemies = this.physics.add.group({
            key: 'H',
            repeat: 8,
            setXY: { x: this.enemiesStartPos, y: Phaser.Math.Between(this.minY,this.maxY) }
        });
        
        
        /*He Anims */
        this.anims.create({
            key: 'heOpenEyes',
            frames: [{ key: 'He', frame: 0 }],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'heCloseEyes',
            frames: [{ key: 'He', frame: 1 }],
            frameRate: 20
        });
        
        
        this.heEnemies = this.physics.add.group({
            key: 'He',
            repeat: 8,
            setXY: { x: this.enemiesStartPos, y: Phaser.Math.Between(this.minY,this.maxY) }
        });
        
         
        /*Li Anims */
        this.anims.create({
            key: 'liOpenEyes',
            frames: [{ key: 'Li', frame: 0 }],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'liCloseEyes',
            frames: [{ key: 'Li', frame: 1 }],
            frameRate: 20
        });
        
        
        this.liEnemies = this.physics.add.group({
            key: 'Li',
            repeat: 8,
            setXY: { x: this.enemiesStartPos, y: Phaser.Math.Between(this.minY,this.maxY) }
        });

        /*Be Anims */
        this.anims.create({
            key: 'beOpenEyes',
            frames: [{ key: 'Be', frame: 0 }],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'beCloseEyes',
            frames: [{ key: 'Be', frame: 1 }],
            frameRate: 20
        });
        
        
        this.beEnemies = this.physics.add.group({
            key: 'Be',
            repeat: 8,
            setXY: { x: this.enemiesStartPos, y: Phaser.Math.Between(this.minY,this.maxY) }
        });

        /*B Anims */
        this.anims.create({
            key: 'bOpenEyes',
            frames: [{ key: 'B', frame: 0 }],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'bCloseEyes',
            frames: [{ key: 'B', frame: 1 }],
            frameRate: 20
        });
        
        
        this.bEnemies = this.physics.add.group({
            key: 'B',
            repeat: 8,
            setXY: { x: this.enemiesStartPos, y: Phaser.Math.Between(this.minY,this.maxY) }
        });
        
        
        let pBulletsChilds= this.playerBullets.getChildren();
        for(let i=0; i< pBulletsChilds.length; i++){
            
            pBulletsChilds[i].body.setCircle(pBulletsChilds[i].width*0.5);
            pBulletsChilds[i].v=this.playerBulletsVelocity;
            pBulletsChilds[i].setVelocityX(pBulletsChilds[i].v);
            pBulletsChilds[i].body.enable=false;
            pBulletsChilds[i].setVisible(false);

            
        }

        let eBulletsChilds= this.enemyBullets.getChildren();
        for(let i=0; i< eBulletsChilds.length; i++){
            
            eBulletsChilds[i].body.setCircle(eBulletsChilds[i].width*0.5);
            eBulletsChilds[i].v=this.hEnemyBulletsVelocity;
            eBulletsChilds[i].setVelocityX(eBulletsChilds[i].v);
            eBulletsChilds[i].body.enable=false;
            eBulletsChilds[i].setVisible(false);
            this.physics.add.collider(eBulletsChilds[i], this.player, this.onEnemyShoot, null, this);
            
        }

        let protBulletsChilds= this.protectionBullets.getChildren();
        for(let i=0; i< protBulletsChilds.length; i++){
            
            protBulletsChilds[i].body.setCircle(protBulletsChilds[i].width*0.5);
            protBulletsChilds[i].v=1;
            protBulletsChilds[i].setVelocityX(0);
            protBulletsChilds[i].body.enable=false;
            protBulletsChilds[i].setVisible(false);
            protBulletsChilds[i].owner=null;
            protBulletsChilds[i].rotAngle=0;
            protBulletsChilds[i].points=1;



            this.setProtectionBulletsCollision(this.playerBullets,protBulletsChilds[i]); 
        }

        this.setPlayerProtBulletCollision(this.protectionBullets,this.player);
        
         //gluon
         this.gluon=this.physics.add.sprite(this.enemiesStartPos, 180, 'gluon');
        
        //gluon properties
        this.physics.add.collider(this.gluon, this.player, this.gluonCollision, null, this);
        
        this.gluon.setBounce(1);
        this.gluon.body.setCircle(this.gluon.width*0.5);
        this.gluon.setCollideWorldBounds(false);

        this.gluon.hV=this.gluonHV;
        this.gluon.bV=this.gluonBV;
        
        this.gluon.setVelocityX(this.gluon.hV);
        this.gluon.setVelocityY(this.randomSign()*this.gluon.bV);
        
        this.gluon.body.enable=false;
        this.gluon.setVisible(false);
        this.gluonSpawnTimer= new Date().getTime();



        this.storeEnemies(this.hEnemies,"H");
        this.storeEnemies(this.heEnemies,"He");
        this.storeEnemies(this.liEnemies,"Li");
        this.storeEnemies(this.beEnemies,"Be");
        this.storeEnemies(this.bEnemies,"B");



        this.setProtections(this.heEnemies,"He");
        this.setProtections(this.bEnemies,"B");

        
        
        let hChilds= this.EnemiesDictionary["H"].getChildren();
        this.nextEnemyIndex= Phaser.Math.Between(0,hChilds.length-1)
        hChilds[this.nextEnemyIndex].setVelocityX(Phaser.Math.Between(-this.hMaxVelocityX,-this.hMinVelocityX));
        hChilds[this.nextEnemyIndex].setVelocityY(Phaser.Math.Between(this.hMinVelocityY,this.hMaxVelocityY));
        hChilds[this.nextEnemyIndex].body.enable=true;
        hChilds[this.nextEnemyIndex].setVisible(true);
        hChilds[this.nextEnemyIndex].shootDuration= Phaser.Math.Between(this.hEnemiesMinShootTimer,this.hEnemiesMaxShootTimer)*1000;
        hChilds[this.nextEnemyIndex].shootTimer= new Date().getTime();

        for(let prop in this.SpawnDictionary){

           this.SpawnDictionary[prop].spawnDuration= Phaser.Math.Between(this.SpawnDictionary[prop].minSpawnDuration,this.SpawnDictionary[prop].maxSpawnDuration)*1000;
        }
        
        
        /** CONTROLLI DI DEFAULT */
        cursors = this.input.keyboard.createCursorKeys();
    }
    
    
    update() {
    
        /** GESTISCO I CONTROLLI */
        if (cursors.up.isDown) {
            this.player.setVelocityY(-this.player.bV);
        } else if (cursors.down.isDown) {
            this.player.setVelocityY(this.player.bV);
        } 
        
        if (cursors.left.isDown) {
            this.player.setVelocityX(-this.player.hV);
        } else if (cursors.right.isDown) {
            this.player.setVelocityX(this.player.hV);
        } else {
            this.player.setVelocityX(0);
        }
        
        if(Phaser.Input.Keyboard.JustDown(cursors.space) && this.player.bulletCount>0){
            this.shoot(this.player,this.playerBullets,true);
            this.player.bulletCount--;
            this.manageArsenal();
        }
        
        /* Manage Animations */
        this.updateBG();
        
        this.animateClock(this.player.AnimParameters[this.player.level],this.player);
        
        
        
        
        this.spawn();
        this.updateProtections();

        if(this.gluonSpawn){
            
            this.spawnGluon();
        }

        this.enemyShootManager("H");
        this.enemyShootManager("Li");
        this.enemyShootManager("Be");
        this.enemyShootManager("B");


        
        
        let hChilds= this.EnemiesDictionary["H"].getChildren();
        for(let i=0; i< hChilds.length; i++){
            this.animateClock(hChilds[i].AnimParameters,hChilds[i]);
            this.checkEnemiesBounds(hChilds[i]);
        }
        
        let heChilds= this.EnemiesDictionary["He"].getChildren();
        for(let i=0; i< heChilds.length; i++){
            this.animateClock(heChilds[i].AnimParameters,heChilds[i]);
            this.checkEnemiesBounds(heChilds[i]);
        }
        
        let liChilds= this.EnemiesDictionary["Li"].getChildren();
        for(let i=0; i< liChilds.length; i++){
            this.animateClock(liChilds[i].AnimParameters,liChilds[i]);
            this.checkEnemiesBounds(liChilds[i]);
        }

        let beChilds= this.EnemiesDictionary["Be"].getChildren();
        for(let i=0; i< beChilds.length; i++){
            this.animateClock(beChilds[i].AnimParameters,beChilds[i]);
            this.checkEnemiesBounds(beChilds[i]);
        }

        let bChilds= this.EnemiesDictionary["B"].getChildren();
        for(let i=0; i< bChilds.length; i++){
            this.animateClock(bChilds[i].AnimParameters,bChilds[i]);
            this.checkEnemiesBounds(bChilds[i]);
        }
        
        this.checkGluonBounds(this.gluon);
        this.checkPBulletsBounds();
        this.checkEBulletsBounds();
        
    }

    storeEnemies(group, dicName){

        this.EnemiesDictionary[dicName]=group;
        let childs= this.EnemiesDictionary[dicName].getChildren();
        // enemiesAnimParameters[referenceParams]=new Array();
        for(let i=0; i< childs.length; i++){
            
            // enemiesDictionary[dicName][enemyName+i]={
            //     e: childs[i],
            //     bulletCount: levelDictionary[referenceLevel],
            //     shootDuration:0,
            //     shootTimer: 0
            // }

            //audio
            childs[i].rechargeSound= this.rechargefx;
            childs[i].shootSound1=this.shoot1fx;
            childs[i].deathSound=this.deathfx;
            


            childs[i].level=dicName;
            childs[i].bulletCount=LevelDictionary[dicName];
            childs[i].shootDuration=0;
            childs[i].shootTimer=0;
            this.EAnimObjs[dicName].IdleDuration= Phaser.Math.Between(this.minIdleDuration,this.maxIdleDuration);
            childs[i].AnimParameters=new AnimationParameters(this.EAnimObjs[dicName]);

            childs[i].minHV=this.EPropertiesDictionary[dicName].minHV;
            childs[i].maxHV=this.EPropertiesDictionary[dicName].maxHV;
            childs[i].minBV=this.EPropertiesDictionary[dicName].minBV;
            childs[i].maxBV=this.EPropertiesDictionary[dicName].maxBV;
            childs[i].minSD=this.EPropertiesDictionary[dicName].minShootDuration;
            childs[i].maxSD=this.EPropertiesDictionary[dicName].maxShootDuration;
            childs[i].points= this.EPropertiesDictionary[dicName].points;
            childs[i].bulletHVelocity= this.EPropertiesDictionary[dicName].bulletHVelocity;
            childs[i].bulletBVelocity= this.EPropertiesDictionary[dicName].bulletBVelocity;



            this.physics.add.collider(this.player, childs[i], this.playerEnemyCollision, null, this);

            this.setBulletCollision(this.playerBullets,childs[i]);
            this.setBetweenEnemiesCollision(group,childs[i]);


            childs[i].body.setCircle(childs[i].width*0.4);
            childs[i].y=Phaser.Math.Between(this.minY,this.maxY);
            childs[i].setBounceY(Phaser.Math.FloatBetween(0.7, 0.9));
            childs[i].body.enable=false;
            childs[i].setVisible(false);
        }
    }

    setBulletCollision(bullets, enemy){

        let childs= bullets.getChildren();
        for(let i=0; i<childs.length;i++){

            this.physics.add.collider(childs[i], enemy,this.onPlayerShoot, null, this);

            }

    }

    setPlayerProtBulletCollision(protbullets, player){

        let childs= protbullets.getChildren();
        for(let i=0; i<childs.length;i++){

            this.physics.add.collider(childs[i], player,this.onPlayerProtBulletCollision, null, this);

            }

    }

    setProtectionBulletsCollision(bullets, protbullet){

        let childs= bullets.getChildren();
        for(let i=0; i<childs.length;i++){

            this.physics.add.collider(childs[i], protbullet,this.BulletProtBulletCollision, null, this);

            }

    }


    setBetweenEnemiesCollision(enemies, enemy){

        let childs= enemies.getChildren();
        for(let i=0; i<childs.length;i++){

            this.physics.add.collider(childs[i], enemy,this.betweenEnemiesCollision, null, this);

            }

    }

    animateClock(AnimParameters, char) {
        let now= new Date().getTime();
        
        let usedDuration;
        if(AnimParameters.index==0){
            usedDuration=AnimParameters.idleDur;
        }else{
            usedDuration=AnimParameters.blinkDur;
        }
        
        if(now-AnimParameters.timer>=usedDuration){
            AnimParameters.timer=new Date().getTime();
            AnimParameters.index++;
            if(AnimParameters.index>=AnimParameters.label.length-AnimParameters.offset){
                AnimParameters.index=0;
            }
            
            char.anims.play(AnimParameters.label[AnimParameters.index]);
            
        }
    }
    
    randomSign(){
        let r= Phaser.Math.Between(0,1);
        
        if(r==0){
            r=-1;
        }
        
        return r;
    }
    
    updateBG(){
        if(this.background.x+(this.background.width*0.5)<=0){
            this.background.x=(1230+615);
        }
        
        if(this.background2.x+(this.background2.width*0.5)<=0){
            this.background2.x=(1230+615);
        }
    }
    
    checkEnemiesBounds(char){
        
        
        if(char.x+char.width*0.5<=1024-this.outOfBoundsOffset){

            char.setCollideWorldBounds(true);

        }
        
        if(char.x-char.width*0.5<this.outOfBoundsOffset){
            char.setCollideWorldBounds(false);
            if(char.x+char.width*0.5<0){
                
                char.body.enable = false;
                char.setVisible(false);
                char.x=this.enemiesStartPos;
                char.y=Phaser.Math.Between(this.minY,this.maxY);
                char.setVelocityX(0);
                char.setVelocityY(0);
                char.shootDuration=0;
                char.shootTimer=0;

                if(char.protection!==undefined){

                    for(let i=0; i<char.protection.length;i++){

                        char.protection[i].setVisible(false);
                        char.protection[i].body.enable=false;
                        char.protection[i].rotAngle=0;

    
    
                    }
                }
                char.bulletCount=LevelDictionary[char.level];

                
            }
        }
        
        
    }

    checkGluonBounds(char){
        
        
        if(char.x+char.width*0.5<=1024-this.outOfBoundsOffset){

            char.setCollideWorldBounds(true);

        }
        
        if(char.x-char.width*0.5<this.gluonOutOfBoundsOffset){
            char.setCollideWorldBounds(false);
            if(char.x+char.width*0.5<0){
                
                this.sirensfx.stop();
                char.body.enable = false;
                char.setVisible(false);
                char.x=this.enemiesStartPos;
                char.y=180;
                char.setVelocityX(0);
                char.setVelocityY(0);
                this.gluonSpawnTimer=new Date().getTime();
                this.gluonSpawn=true;
            }
        }
        
        
    }
    
    checkPBulletsBounds(){
        
        let pBullets= this.playerBullets.getChildren();
        for(let i=0; i< pBullets.length; i++){
            if(pBullets[i].visible){
                
                if(pBullets[i].x-pBullets[i].width*0.5>1024){
                    pBullets[i].body.enable=false;
                    pBullets[i].setVisible(false);
                    pBullets[i].setVelocityX(0);

                }
            }
            
        }
        
    }

    checkEBulletsBounds(){
        
        let eBullets= this.enemyBullets.getChildren();
        for(let i=0; i< eBullets.length; i++){
            if(eBullets[i].visible){
                
                if(eBullets[i].x+eBullets[i].width*0.5<0){
                    eBullets[i].body.enable=false;
                    eBullets[i].setVisible(false);
                    eBullets[i].setVelocityX(0);
                }
            }
            
        }
        
    }
    
    enemyShootManager(label){

        let now= new Date().getTime();
        let childs= this.EnemiesDictionary[label].getChildren();
        for(let i=0; i< childs.length; i++){
                if(childs[i].visible){

                    if(now-childs[i].shootTimer>=childs[i].shootDuration && childs[i].bulletCount>0){
                        this.shoot(childs[i],this.enemyBullets, false);
                            childs[i].bulletCount--;
                            childs[i].shootTimer=now;

                    }


                }

            
        }
    }
    
spawn(){

// let rIndex= Phaser.Math.Between(0,Object.keys(this.EnemiesDictionary).length-1);
// let i=0;
// for(let prop in this.EnemiesDictionary){
//     if(i===rIndex){
//         this.spawnManager(prop);
//         return;
//     }
//     i++;
let now= new Date().getTime();

for(let prop in this.SpawnDictionary){

if(!this.SpawnDictionary[prop].firstSpawn 
    && now-this.SpawnDictionary[prop].spawnTimer>=this.SpawnDictionary[prop].firstSpawnDuration*1000){

    this.SpawnDictionary[prop].firstSpawn=true;
}

    if(this.SpawnDictionary[prop].firstSpawn){
        
        this.spawnManager(prop);
        
    }
}



}

    spawnManager(dicLabel){
        
        let now= new Date().getTime();
        let dic= this.SpawnDictionary[dicLabel];
        if(now-dic.spawnTimer>= dic.spawnDuration){
            
            let childs= this.EnemiesDictionary[dicLabel].getChildren();
            let r;
            do {
                r=Phaser.Math.Between(0,childs.length-1);
            } while (childs[r].visible);
            
            childs[r].body.enable=true;
            childs[r].setVisible(true);
            childs[r].setVelocityX(Phaser.Math.Between(childs[r].minHV,childs[r].maxHV));
            childs[r].setVelocityY(Phaser.Math.Between(childs[r].minBV,childs[r].maxBV));
            childs[r].shootDuration= Phaser.Math.Between(childs[r].minSD,childs[r].maxSD)*1000;
            childs[r].shootTimer= now;

            if(childs[r].protection!==undefined){
                for(let i=0; i<childs[r].protection.length;i++){

                    childs[r].protection[i].setVisible(true);
                    childs[r].protection[i].body.enable=true;
                    childs[r].protection[i].anims.play("electronShoot",20,true);

                }

                }

            dic.spawnTimer=now;
            dic.spawnDuration= Phaser.Math.Between(dic.minSpawnDuration,dic.maxSpawnDuration)*1000;
            
           
        }
        
        
    }
    
    playerEnemyCollision(player, enemy){
        
        enemy.setVelocityX(-80);
        
        if(player.hasGluon && player.bulletCount===LevelDictionary[player.level] 
            && enemy.level===player.level 
            && enemy.bulletCount===player.bulletCount){
            let i=0;

                for(let prop in LevelDictionary){
                    if(i===player.bulletCount){

                        //Player level up
                        player.level=prop;
                        player.tint=0xffffff;
                        player.tween.stop();
                        player.bulletCount=LevelDictionary[player.level];
                        this.manageArsenal(true);

                        this.tweens.add({
                            targets: player,
                            duration: 500,
                            ease: 'Linear',
                            scaleX : 0.7,
                            scaleY : 1,
                            yoyo: true,
                       });

                        //enemy reset
                        enemy.bulletCount=0;
                        this.tweens.add({
                            targets: enemy,
                            duration: 400,
                            ease: 'Linear',
                            scaleX : 0,
                            scaleY : 0.6,
                            onComplete:function() {enemy.scene.resetEnemy(enemy)}
                       });

                       if(enemy.protection!==undefined){

                        for(let i=0; i<enemy.protection.length;i++){

                            enemy.protection[i].setVisible(false);
                            enemy.protection[i].body.enable=false;
                            enemy.protection[i].rotAngle=0;
    
        
        
                        }
                    }

                       
                       //manage gluon
                       player.hasGluon=false;
                       
                       this.gluonSpawn=true;
                       this.gluonSpawnTimer=new Date().getTime();
                       
                       this.gluonUI.anims.stop(null,true);
                       this.gluonUI.tween.stop();
                       this.gluonUI.scale=1;
                       player.scale=1;
                       this.gluonUI.setVisible(false);
                       
                       //manage gluon thunders
                       this.thunder1.tween.stop();
                       this.thunder2.tween.stop();
                       this.thunder1.alpha=0;
                       this.thunder2.alpha=0;
                       
                       //audio
                       this.gamemusic.setRate(1);
                       this.gluondechargefx.play();


                        return;

                    }
                    i++;
                }


            }
        
    }
    
    betweenEnemiesCollision(enemy1, enemy2){
        
        if(enemy1.x+enemy1.width*0.5<1024 && enemy2.x+enemy2.width*0.5<1024){
            enemy1.setVelocityX(-160);
            enemy2.setVelocityX(-100);
        }
        
        
        
    }

    gluonCollision(gluon,player){

//sound
this.gamemusic.setRate(1.2);
this.gluonrechargefx.play();
this.sirensfx.stop();
//this.thunderfx.play();

//gluon 


        gluon.body.enable=false;
        gluon.setVisible(false);
        gluon.setVelocityX(0);
        gluon.setVelocityY(0);
        gluon.setCollideWorldBounds(false);
        gluon.x=this.enemiesStartPos;
        gluon.y=180;
        this.gluonSpawn=false;

        this.gluonUI.setVisible(true);
        this.gluonUI.anims.play("gluonShoot",30,true);
        this.gluonUI.scale=0.7;
        this.gluonUI.tween= this.tweens.add({
            targets: this.gluonUI,
            duration: 100,
            ease: 'Linear',
            scale: 1.4,
            repeat: -1,
            yoyo: true,

        });

        //manage gluon thunders
        this.thunder1.tween= this.tweens.add({
            targets: this.thunder1,
            duration: 100,
            ease: 'Linear',
            alpha: 1,
            repeat: -1,
            yoyo: true,

       });

       this.thunder2.tween= this.tweens.add({
        targets: this.thunder2,
        duration: 100,
        ease: 'Linear',
        alpha: 1,
        repeat: -1,
        yoyo: true,

   });

   //manage player

        player.hasGluon=true;
        player.tint=0xe30f00;
        player.tween= this.tweens.add({
            targets: player,
            duration: 200,
            ease: 'Linear',
            scaleX : 0.7,
            scaleY : 1,
            repeat: -1,
            yoyo: true,

       });

    }
    
    
    onPlayerShoot(bullet, enemy){
    
        bullet.body.enable=false;
        bullet.setVisible(false);
        bullet.setVelocityX(0);

        // for(let i=0;i<Object.keys(hs["h_Enemies"]).length; i++){
        //     if(hs["h_Enemies"]["hEnemy_"+i].e===hEnemy){



        //     let enemy= hs["h_Enemies"]["hEnemy_"+i].e;
               if(enemy.bulletCount===0 || enemy.bulletCount<LevelDictionary[enemy.level]){
    
                enemy.bulletCount++;
                enemy.rechargeSound.play();
                enemy.shootTimer= new Date().getTime();
                enemy.tint=0xfff06b;

                this.tweens.add({
                    targets: enemy,
                    duration: 500,
                    ease: 'Linear',
                    scaleX : 0.7,
                    scaleY : 1,
                    yoyo: true,
                    callbackScope: this,
                    onComplete: function(){this.tintChar(enemy,0xffffff)}
               })
              

                }
                else {
                        /* update player score */
                        enemy.bulletCount=0;

                        if(enemy.protection!==undefined){

                            for(let i=0; i<enemy.protection.length;i++){

                                enemy.protection[i].setVisible(false);
                                enemy.protection[i].body.enable=false;
                                enemy.protection[i].rotAngle=0;
        
            
            
                            }
                        }


                        enemy.deathSound.play();
                        enemy.tint=0xe30f00;
                        this.tweens.add({
                            targets: enemy,
                            duration: 400,
                            ease: 'Linear',
                            scaleX : 0,
                            scaleY : 0.6,
                            callbackScope: this,
                            onComplete:function() {this.resetEnemy(enemy)}
                       })
                      
                       

                        this.score+=enemy.points;
                        this.scoreText.setText("De-Ionization:  "+this.score+ " eV");

                }
    
                }
    
            
                resetEnemy(enemy){

                    enemy.body.enable = false;
                    enemy.setVisible(false);
                    enemy.scale=1;
                    enemy.setCollideWorldBounds(false);
                    this.tintChar(enemy,0xffffff);
                    enemy.setVelocityX(0);
                    enemy.setVelocityY(0);
                    enemy.x=this.enemiesStartPos;
                    enemy.y=Phaser.Math.Between(this.minY,this.maxY);
                    enemy.shootDuration=0;
                    enemy.shootTimer=0;
                    enemy.bulletCount=LevelDictionary[enemy.level];
                }
        

        onEnemyShoot(bullet, player){

            bullet.body.enable=false;
            bullet.setVisible(false);

        

            if(player.bulletCount<LevelDictionary[player.level]){

                player.bulletCount++;
                player.rechargeSound.play();
                this.manageArsenal();
                if(!player.hasGluon){
                    
                    player.tint=0xfff06b;
                }
                this.tweens.add({
                    targets: player,
                    duration: 300,
                    ease: 'Linear',
                    scaleX : 0.7,
                    scaleY : 1,
                    yoyo: true,
                    callbackScope: this,
                    onComplete: function(){this.tintChar(player,0xffffff); player.scale=1}

               });
              

            }else{

            let lives= this.lps.getChildren();
           
                lives[player.lp-1].anims.play("loseLP",30,false);
                player.lp--;


            if(player.lp===0){

                player.tint=0xe30f00;
                this.tweens.add({
                    targets: player,
                    duration: 1000,
                    ease: 'Linear',
                    scale : 0,
                    callbackScope: this,
                    onComplete:function() {this.showButtons()},

                    
               });

                    player.deathSound.play();

            }else{

                player.hitSound.play();

            }
            }


        }


        showButtons(){

            this.gamemusic.stop();
            this.endingmusic.play();
            this.player.body.enable=false;
            this.player.setVisible(false);

            this.restartButton.active=true;
            this.restartButton.setVisible(true);


            this.tweens.add({
                targets: [this.restartButton],
                x: 300,
                duration: 500,
            });

            this.restartButton.setInteractive();


            this.quitButton.active=true;
            this.quitButton.setVisible(true);

            this.tweens.add({
                targets: [this.quitButton],
                x: 700,
                duration: 500,
            });
            this.quitButton.setInteractive();


        }
      

     resetScene(){

        
    let now=new Date().getTime();
    this.gluonSpawnTimer=now;
    this.gluonSpawn=true;
    for(let prop in this.SpawnDictionary){
    this.score=0;
    this.scoreText.setText("De-Ionization:  "+this.score+ " eV");


    this.SpawnDictionary[prop].spawnTimer=now;
    this.SpawnDictionary[prop].firstSpawn=false;

         //audio
        this.endingmusic.stop();
        this.gamemusic.setRate(1);

    
        }
     }   

restart(){

    this.resetScene();
    this.scene.start("MainScene");  

}

quit(){

    this.resetScene();
    this.scene.start("AtomzMenu");

}

    shoot(char, bullets, right){
        let childs= bullets.getChildren();
        for(let i=0; i< childs.length; i++){
            if(!childs[i].visible){
                if(right){
                        childs[i].x=char.x+char.width*0.5+this.bulletsOffset;
                }
                else{

                    childs[i].x=char.x-char.width*0.5-this.bulletsOffset;

                }
            childs[i].y=char.y;
            childs[i].setVelocityX(char.bulletHVelocity);
            childs[i].setVelocityY(char.bulletBVelocity);
            childs[i].setVisible(true);
            childs[i].body.enable=true;
            childs[i].anims.play("electronShoot",10,true);

            char.shootSound1.play();

            return;
        }
    }
}

manageArsenal(updateUI=false){

    let arsenals= this.playerArsenal.getChildren();
    let aUI= this.arsenalUI.getChildren();
    for(let i=0;i<arsenals.length;i++){

        if(i>this.player.bulletCount-1){
            
            if(updateUI){
                
                aUI[i].setVisible(false);
            }
            arsenals[i].setVisible(false);

        }else{

            if(updateUI){
                
                aUI[i].setVisible(true);
            }
            arsenals[i].setVisible(true);
        }
    };
}

spawnGluon(){


    let now= new Date().getTime();
    
    if(now-this.gluonSpawnTimer>= this.gluonSpawnDuration*1000){
        this.sirensfx.play();
        this.gluon.body.enable=true;
        this.gluon.setVisible(true);
        this.gluon.setVelocityX(this.gluon.hV);
        this.gluon.setVelocityY(this.gluon.bV*this.randomSign());
        this.gluon.anims.play("gluonShoot",2,true);
        this.gluonSpawn=false;

    }
        

}

tintChar(char, tint){

if(char.hasGluon===undefined || !char.hasGluon)
    char.tint=tint;
}

updateProtections(){

    let i=0;
for(let prop in this.EPropertiesDictionary){

    let dic= this.EPropertiesDictionary[prop];

if(dic.numProtBullets!=0){

    let childs= this.EnemiesDictionary[prop].getChildren();
    for(let i=0;i<childs.length;i++){
        if(childs[i].visible){
            
            for(let j=0;j<childs[i].protection.length;j++ ){

            if(childs[i].protection[j].visible){

                let bullet=childs[i].protection[j];

                if(j>0){

                    if(childs[i].protection[j-1].visible){

                        bullet.rotAngle=childs[i].protection[j-1].rotAngle+dic.angleOffset;
                    }
                }

                bullet.rotAngle+=0.01;
                
                bullet.x= childs[i].x + (dic.protectionRadius * Math.cos(bullet.rotAngle * bullet.v));
                bullet.y= childs[i].y+ (dic.protectionRadius * Math.sin(bullet.rotAngle * bullet.v));
                
        
            }

            }
        }


    }

}

}



}

setProtections(group,label)
{
let childs=group.getChildren();
let bullets=this.protectionBullets.getChildren();


for(let i=0;i<childs.length;i++){

    let dic= this.EPropertiesDictionary[label];
    childs[i].protection= [];

    for(let j=0;j<dic.numProtBullets;j++ ){

        for(let k=0;k<bullets.length;k++ ){

            if(bullets[k].owner=== null){

                bullets[k].owner=childs[i];
                childs[i].protection.push(bullets[k]);
                break;
            }


        }

    }
}

}

BulletProtBulletCollision(bullet, protbullet){

    //audio

    this.player.deathSound.play();

    
    bullet.body.enable=false;
    bullet.setVisible(false);


    protbullet.body.enable=false;
    protbullet.setVisible(false);

    this.score+=protbullet.points;
    this.scoreText.setText("De-Ionization:  "+this.score+ " eV");


}

onPlayerProtBulletCollision(protbullet, player){

    protbullet.body.enable=false;
    protbullet.setVisible(false);


    let lives= this.lps.getChildren();
   
        lives[player.lp-1].anims.play("loseLP",30,false);
        player.lp--;


    if(player.lp===0){

        player.tint=0xe30f00;
        this.tweens.add({
            targets: player,
            duration: 1000,
            ease: 'Linear',
            scale : 0,
            callbackScope: this,
            onComplete:function() {this.showButtons()},

            
       });

            player.deathSound.play();

    }else{

        player.hitSound.play();

    }

    this.score+=protbullet.points;
    this.scoreText.setText("De-Ionization:  "+this.score+ " eV");

    }



}

function AnimationParameters(animObject) {
    this.idleDur=animObject.IdleDuration,
    this.blinkDur=animObject.BlinkDuration,
    this.timer=animObject.AnimTimer,
    this.offset=animObject.AnimOffset,
    this.index=animObject.AnimIndex,
    this.label=animObject.AnimLabels
   
};

function AtomsElectrons(){
    this.H=1;
    this.He=2;
    this.Li=3;
    this.Be=4;
    this.B=5; //TO VIEW
    this.C=6;
    this.N=7;
    this.O=8;
    this.F=9;
    this.Ne=10;


}

function EnemyDictionary(){

    this.h_Enemies={};
    this.he_Enemies={};
    this.li_Enemies={};
    this.be_Enemies={};
    this.b_Enemies={};
    this.c_Enemies={};
    this.n_Enemies={};
    this.o_Enemies={};
    this.f_Enemies={};
    this.ne_Enemies={};

}

function AnimDictionary() {

    this.H=null;
    this.He=null;
    this.Li=null;
    this.Be=null;
    this.B=null;
    this.C=null;
    this.N=null;
    this.O=null;
    this.F=null;
    this.Ne=null;
 }


