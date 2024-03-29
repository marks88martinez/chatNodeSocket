const express = require('express');
const app = express();

const http = require('http')
const server = http.createServer(app)

//Socket
const { Server } = require("socket.io");
const io = new Server(server)

io.on('connection',(socket)=>{
    // console.log('Un usuario se ha conectado');

    // socket.on('disconnect',()=>{
    //     console.log('Usuario desconectado');
    // })

    // socket.on('chat',(msg)=>{
    //     console.log('Msg:'+msg);
    // })
    
    socket.on('chat',(msg)=>{
       io.emit('chat',msg)
    })

})


app.get('/', (req, res)=>{
    // res.send(`<h1>Aplicación de CHAT</h1>`)
    res.sendFile(`${__dirname}/cliente/index.html`)
})

server.listen(3000, ()=>{
    console.log('servidor corriendo en el puerto 3000');
});