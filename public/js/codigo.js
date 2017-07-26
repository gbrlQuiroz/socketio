$(function () {
    var socket = io();
    var nombre = prompt('Tu nombre');
    socket.emit('join', nombre);
    
    $('form').submit(function () {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
});
