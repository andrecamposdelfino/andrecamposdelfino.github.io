const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));


io.on('connection', (socket) => {
    console.log("Socket conectado", socket);
    socket.on("chat message", (msg) => {
        console.log("message : " + msg);
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log("Server starting...");
})
