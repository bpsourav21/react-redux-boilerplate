import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {
        return (
            <div>
               <h1 > hello..........</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
       
    };
}

export default connect(mapStateToProps)(UserDetail);


 // var socket = io();
 //        function setUsername(){
 //            socket.emit('setUsername', document.getElementById('name').value);
 //        };
 //        var user;
 //        socket.on('userExists', function(data){
 //            document.getElementById('error-container').innerHTML = data;
 //        });
 //        socket.on('userSet', function(data){
 //            user = data.username;
 //            document.body.innerHTML = '<input type="text" id="message">\
 //            <button type="button" name="button" onclick="sendMessage()">Send</button>\
 //            <div id="message-container"></div>';
 //        });
 //        function sendMessage(){
 //            var msg = document.getElementById('message').value;
 //            if(msg){
 //                socket.emit('msg', {message: msg, user: user});
 //            }
 //        }
 //        socket.on('newmsg', function(data){
 //            if(user){
 //                document.getElementById('message-container').innerHTML += '<div><b>' + data.user + '</b>: ' + data.message + '</div>'
 //            }
 //        })
 //    </script>
 //        <div id="error-container"></div>
 //        <input id="name" type="text" name="name" value="" placeholder="Enter your name!">
 //        <button type="button" name="button" onclick="setUsername()">Let me chat!</button>
 //   