import React, { Component } from "react";
import './ChatsResponseStyle.css';
import ChatResponseTopBar from "./ChatResponseTopBar";

class ChatResponse extends Component {
    render() {
        return (
            <div className="chat-response">
                <ChatResponseTopBar />
            </div>
        )
    }
}

export default ChatResponse