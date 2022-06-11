/** il nostro oggetto game */
var game;

/** contiene i key binding per i controlli del nostro gioco */
var cursors;


window.onload = function() {
    var config = {
        type: Phaser.AUTO, //il motore di rendering: può essere CANVAS, WEBGL o AUTO
        // https://www.educba.com/webgl-vs-canvas/      <---- maggiori info!
        //width: 800, //dimensioni della finestra di gioco
        //height: 600, //dimensioni della finestra di gioco
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1024,
            height: 360
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: [AtomzMenu,MainScene],
        backgroundColor: 0x000000,
    };

    game = new Phaser.Game(config);
    window.focus();
    //resizeGame();
    //window.addEventListener("resize", resizeGame);
};