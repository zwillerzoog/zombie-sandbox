socket.on('move-player', function(position_data) {
    if (players[socket.id] == undefined) return; // Happens if the server restarts and a client is still connected
    players[socket.id].x = position_data.x;
    players[socket.id].y = position_data.y;
    players[socket.id].angle = position_data.angle;
    io.emit('update-players', players);
});