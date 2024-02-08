import React, { Component } from "react";
import './ChatsResponseStyle.css';
import ChatsResponseTopBar from "./ChatsResponseTopBar";
import ResponseTextBox from "./ResponseTextBox";
import MessagesComponent from "./MessagesComponent";

class ChatResponse extends Component {
    render() {
        return (
            <div className="chat-response">
                <ChatsResponseTopBar />
                <ResponseTextBox />
                <MessagesComponent />
            </div>
        )
    }
}

export default ChatResponse