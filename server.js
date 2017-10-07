const express = require('express'); // Express contains some boilerplate to for routing and such
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));
app.use('/assets', express.static('assets'));

app.set('port', process.env.PORT || 3000);
http.listen(app.get('port'), function() {
    console.log('listening on port', app.get('port'));
});

io.on('connection', function(socket) {
    socket.on('new-zombie', function(zombie_state) {
        // zombies = zombie_state
        io.emit('update-zombies', zombie_state)
    })
})