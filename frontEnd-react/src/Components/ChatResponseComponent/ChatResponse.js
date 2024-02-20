import React, { Component } from "react";
import './ChatsResponseStyle.css';
import ChatsResponseTopBar from "./ChatsResponseTopBar";
import MessageHandling from "./MessageHandling";

class ChatResponse extends Component {
    render() {
        return (
            <div className="chat-response">
                <ChatsResponseTopBar />
                <MessageHandling />
            </div>
        )
    }
}

export default ChatResponse