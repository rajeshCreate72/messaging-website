import React, { Component } from 'react';
import './ChatsStyle.css';
import ChatsTopBar from "./ChatsTopBar";
import ChatsContacts from './ChatsContacts';

class Chats extends Component {
    render() {
        return(
            <div className="chat-head">
                <ChatsTopBar />
                <ChatsContacts />
            </div>
        )
    }
}

export default Chats;