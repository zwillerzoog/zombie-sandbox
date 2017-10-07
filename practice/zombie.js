
//  game.physics.startSystem(Phaser.Physics.ARCADE);
let players = {};
let zombieArray = [];
// let tween = [];
let i = 3


//zombies
let zombie = {
    create: function() {
        let xArray = [];
        let yArray = []
        let playerCollisionGroup = game.physics.p2.createCollisionGroup();
        let zombieCollisionGroup = game.physics.p2.createCollisionGroup();
        game.physics.p2.updateBoundsCollisionGroup();
        game.physics.p2.restitution = 0;

        zombies = game.add.group();
        zombies.enableBody = true;
        zombies.physicsBodyType = Phaser.Physics.P2JS;
        // zombies.body.kinematic = true;
        // for (let i = 0; i < 4; i++) {
            zombie0 = zombies.create(100, 100, 'zombie');
            zombie0.body.kinematic = true;
            // console.log('zombie0.body', zombie0.body);
            // tween0 = game.add.tween(zombie0.body)
            // console.log('zombie0.body', zombie0.body);
            // console.log(zombie0.x)
            // tween0.start();
            // tween0.loop()
            // zombie0.body.setCollisionGroup(zombieCollisionGroup)
            // zombie0.body.collideWorldBounds = true; 

            zombie1 = zombies.create(100, 370, 'zombie');
            zombie1.body.kinematic = true;
            console.log(zombie1.x)
            tween1 = game.add.tween(zombie1.body)
            console.log(tween1)
            console.log(zombie1)
            xArray= [500, 100];
            yArray=[370, 370];
            tween1.to({ 
                        x: xArray, 
                        y: yArray }, 
                        10000, "Linear");
            
            // tween1.start();
            // tween1.loop()

            zombie2 = zombies.create(700, 100, 'zombie');
            zombie2.body.kinematic = true;
            tween2 = game.add.tween(zombie2.body)
            xArray = [700, 650, 650, 700]
            yArray = [370, 100, 370, 100]
            tween2.to({ 
                        x: xArray, 
                        y:  yArray}, 
                        10000, "Linear");
            
            // tween2.start();
            // tween2.loop()   
            
// console.log('tweeeen', tween1)

                // xArray = [500, 500, 100, 100]
                // yArray = [250, 150, 150, 100]
                // tween0.to({ 
                //             x: xArray, 
                //             y: yArray}, 
                //             10000, "Linear");
                //             socket.emit('zombie-movements', )
                            
                        
                    }
                }
    // {
    //     zombie0: {
    //         x: zombie0.x,
    //         y: zombie0.body.y        
    //     },
    //     zombie1: {
    //         x: zombie1.body.x,
    //         y: zombie1.body.y        
    //     },
    //     zombie2: {
    //         x: zombie2.body.x,
    //         y: zombie2.body.y        
    //     }
    // }
    // function makeZombie(i) {
    //     zombieArray[i] = zombies.create(700, 100, 'zombie');
    //     zombieArray[i].body.kinematic = true;
    //     console.log('zombieArray[i]', zombieArray[i]);
    //     tween[i] = game.add.tween(zombieArray[i].body)
    //     i++
    // }

function eatPlayer(players) {
    console.log('players', players);
}