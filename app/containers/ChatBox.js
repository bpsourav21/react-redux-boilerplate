import React, {Component} from 'react';
import {connect} from 'react-redux';

class ChatBox extends Component {
    render() {
        return (
            <div>
            <div className="aaa"> helloafaga fa </div>
            <h2> ssssssssssssssssss</h2>
                <ul id="messages"></ul>
    <span id="notifyUser"></span>
    <form id="form" action="" onsubmit="return submitfunction();" > 
      <input type="hidden" id="user" value="" /><input id="m" autocomplete="off" onkeyup="notifyTyping();" placeholder="Type yor message here.." /><input type="submit" id="button" value="Send"/> 
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