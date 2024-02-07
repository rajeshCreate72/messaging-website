import React, { Component } from 'react';
import './ChatsStyle.css';
import ChatsTopBar from "./ChatsTopBar";

class Chats extends Component {
    render() {
        return(
            <div className="chat-head">
                <ChatsTopBar />
            </div>
        )
    }
}

export default Chats;