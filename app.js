var app = require('express')();//app = express();
var express = require('express');
var http = require('http').createServer(app);
var path = require('path');
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('usuario conectado');
    
    socket.on('join', function (myName) {
        socket.name = myName;
    });
    socket.on('chat message', function (msg) {
        //console.log('mensaje: ' + msg);
        //io.emit('chat message', msg);
        io.emit('chat message', socket.name + ': ' + msg);
    });
    socket.on('disconnect', function () {
        console.log('usuario desconectado');
    });
});

http.listen(3000, function () {
    console.log('escuchando en puerto 3000');
});

