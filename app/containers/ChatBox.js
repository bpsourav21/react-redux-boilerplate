import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://127.0.0.1:5001");


class ChatBox extends Component {
    submitfunction(e) {
        e.preventDefault()
        console.log(e.target.typeMessage.value)
        var msg = e.target.typeMessage.value
        var user = "sourav hasan"
        if (msg) {
            socket.emit('msg', { message: msg, user: user });
        }
    }
    notifyTyping(e) {
        e.preventDefault()
        console.log("notify")
    }

    render() {
        return (
            <div>
                <ul id="messages"></ul>
                <span id="notifyUser"></span>
                <form id="form" action="" onSubmit={this.submitfunction.bind(this)} >
                    <input type="hidden" id="user" value="" />
                    <input id="m" name="typeMessage" onKeyUp={this.notifyTyping.bind(this)} placeholder="Type yor message here.." />
                    <input type="submit" id="button" value="Send" />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(ChatBox);