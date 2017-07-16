var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname+ "/views/index.html"));
});

// users = [];
// io.on('connection', function(socket){
//   console.log('A user connected');
//   socket.on('setUsername', function(data){
//     console.log(data);
//     if(users.indexOf(data) > -1){
//       socket.emit('userExists', data + ' username is taken! Try some other username.');
//     }
//     else{
//       users.push(data);
//       socket.emit('userSet', {username: data});
//     }
//   });
//   socket.on('msg', function(data){
//       //Send message to everyone
//       io.sockets.emit('newmsg', data);
//   })
// });

http.listen(5000, function(){
  console.log('listening on localhost:5000');
});