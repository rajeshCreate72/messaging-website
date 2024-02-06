import React, { Component } from "react";
import './ChatsResponseStyle.css';
import ChatResponseTopBar from "./ChatResponseTopBar";
import ResponseTextBox from "./ResponseTextBox";

class ChatResponse extends Component {
    render() {
        return (
            <div className="chat-response">
                <ChatResponseTopBar />
                <ResponseTextBox />
            </div>
        )
    }
}

export default ChatResponse