console.log('hi')
let game = new Phaser.Game(750, 500, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

let zombie;
let tween;

function preload() {
    game.load.image('zombie', 'assets/zombie.png')
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.world.setBounds(0, 0, 750, 500);

    zombie = game.add.sprite(100,100, 'zombie')
    game.physics.p2.enable(zombie);
    zombie.body.setZeroDamping();
    zombie.body.fixedRotation = true;
    zombie.body.setZeroVelocity();

    tweener()
    console.log(zombie)
    console.log(zombie.world.x)    
}

function update() {
    socket = io(); // This triggers the 'connection' event on the server
    socket.emit('new-zombie', {
        x: zombie.x,
        y: zombie.y,
        angle: zombie.rotation
    })
    socket.on('update-zombies', function(zombie_data) {
        let data = zombie_data;
        zombie.target_x = data.x;
        zombie.target_y = data.y;
        zombie.target_rotation = data.angle;
    })

    // console.log('hi from update')
}

function tweener() {
    tween = game.add.tween(zombie.body)
    tween.to({ 
                x: [500, 100], 
                y: [370, 370] }, 
                15000, "Linear");
    tween.start();
    tween.loop()
}