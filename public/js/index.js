let socket=io();
socket.on('connect',function(){
    console.log("Connected to the Server.");
    socket.emit('createMessage',{
        from:"Vishal",
        text:"Hi good things comming towards you lets capture those",
        createdAt:new Date().getTime()
    })
});
//on disconnect event
socket.on('disconnect',function(){
    console.log("Disconnected from the Server.");
});
