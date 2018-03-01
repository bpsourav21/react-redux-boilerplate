// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var socket = require('socket.io');
// var io = socket(http)
// var path = require('path');

// app.use express.static(__dirname + '/public')
// app.get('/', function(req, res){
   // res.sendFile(path.join(__dirname+ "/views/index.html"));
// });

// users = [];
// io.on('connection', function(socket){
  // console.log('A user connected');
  // socket.on('setUsername', function(data){
    // console.log(data);
    // if(users.indexOf(data) > -1){
      // socket.emit('userExists', data + ' username is taken! Try some other username.');
    // }
    // else{
      // users.push(data);
      // socket.emit('userSet', {username: data});
    // }
  // });
  // socket.on('msg', function(data){
     // Send message to everyone
      // io.sockets.emit('newmsg', data);
  // })
// });

// app.listen(7000, function(){
  // console.log('listening on localhost:7000');
// });

//export default app;

var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3002);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});