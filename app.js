var app = require('express')(); //app = express();
var http = require('http').createServer(app);

app.get('/',function(req,res){
    res.send('<h1>hola mundo</h1>');
});

http.listen(3000,function(){
    console.log('escuchando en puerto 3000');
});

