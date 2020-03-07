var app = require('express')() //add el modulo express
var http = require('http').Server(app)
var io = require('socket.io')(http) //add el socket para la comunicacion remota

app.get('/', function(req, res){ // indicamos la ruta y el archivo index html con express
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg)
    })
})

http.listen(3000, function(){  //express
    console.log('Servidor ejecutando en: http://localhost:3000')
})