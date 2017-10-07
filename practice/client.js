//game.js
socket.emit('new-player', {
    x: player.sprite.x,
    y: player.sprite.y,
    angle: player.sprite.rotation,
    type: 1
});

//player.js
socket.emit('move-player', { 
    x: me.x, y: me.y, angle: me.rotation });

//game.js
socket.on('update-players', function(players_data) {
    
    let players_found = {};
    // Loop over all the player data received
    for (let id in players_data) {
        // If the player hasn't been created yet
        if (other_players[id] == undefined && id != socket.id) {
            // Make sure you don't create yourself
            let data = players_data[id];
            let p = createSprite(data.type, data.x, data.y, data.angle);
            other_players[id] = p;
            console.log(
                'Created new player at (' + data.x + ', ' + data.y + ')'
            );
        }
        players_found[id] = true;

        // Update positions of other players
        if (id != socket.id) {
            other_players[id].target_x = players_data[id].x; // Update target, not actual position, so we can interpolate
            other_players[id].target_y = players_data[id].y;
            other_players[id].target_rotation = players_data[id].angle;
        }
    }
    // Check if a player is missing and delete them
    for (let id in other_players) {
        if (!players_found[id]) {
            other_players[id].destroy();
            delete other_players[id];
        }
    }
});    