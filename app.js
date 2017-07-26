var app = require('express')();//app = express();
var express = require('express');
var http = require('http').createServer(app);
var path = require('path');
//corregir para evitar 'doble express'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

http.listen(3000,function(){
    console.log('escuchando en puerto 3000');
});

