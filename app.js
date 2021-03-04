const express=require('express');
const http=require('http');
const path =require('path');
const publicPath=path.join(__dirname,'./public') 
console.log(path.join(__dirname,'./public'));  
const app=express();
app.use(express.static(publicPath));
const socketIO=require('socket.io');
const PORT=process.env.PORT || 3000;

let server=http.createServer(app);
let io=socketIO(server);
io.on('connection',(socket)=>{
    console.log("new user connected");
    socket.on('chat',(message)=>{
        console.log("From Client:",message);
        io.emit('chat',message);
    })
    socket.on('disconnect',()=>{
        console.log("User disconnected.");
    });
});
//server connection on port || 3000
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})