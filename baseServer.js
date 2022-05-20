const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var players = [];

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    //Add existing players
    io.to(socket.id).emit('addExistingPlayers', players);

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('addPlayer', (data) => {
        data.push(socket.id)
        players.push(data);

        socket.broadcast.emit('addPlayerToOthers', data);
    });

    //User leaves
    socket.on('disconnect', () => {
        socket.broadcast.emit('userLeft', socket.id);
    });
});


server.listen(3000, () => {
    console.log('listening on *:3000');
});
