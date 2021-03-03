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
    socket.on('createMessage',(message)=>{
        console.log("CreateMessage",message);
    })
    socket.on('disconnect',()=>{
        console.log("User disconnected.");
    });
});
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})