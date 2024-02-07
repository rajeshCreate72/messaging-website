import React, { Component } from "react";
import './ChatsResponseStyle.css';
import ChatsResponseTopBar from "./ChatsResponseTopBar";
import ResponseTextBox from "./ResponseTextBox";

class ChatResponse extends Component {
    render() {
        return (
            <div className="chat-response">
                <ChatsResponseTopBar />
                <ResponseTextBox />
            </div>
        )
    }
}

export default ChatResponse