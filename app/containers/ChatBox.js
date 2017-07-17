import React, { Component } from 'react';
import { connect } from 'react-redux';


class ChatBox extends Component {
    submitfunction(e) {
        e.preventDefault()
        console.log(e.target.typeMessage.value)
        var msg = e.target.typeMessage.value
        var user="sourav"
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
                <div className="aaa"> helloafaga fa </div>
            
                <h2 className="bbb"> ssssssssssssssssss</h2>
                <ul id="messages"></ul>
                <span id="notifyUser"></span>
                <form id="form" action="" onSubmit={this.submitfunction.bind(this)} >
                    <input type="hidden" id="user" value="" /><input id="m" name="typeMessage" onKeyUp={this.notifyTyping.bind(this)} placeholder="Type yor message here.." /><input type="submit" id="button" value="Send" />
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