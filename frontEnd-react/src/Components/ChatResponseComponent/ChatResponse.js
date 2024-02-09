import React, { Component } from "react";
import './ChatsResponseStyle.css';
import ChatsResponseTopBar from "./ChatsResponseTopBar";
import MessagesComponent from "./MessagesComponent";
import MessageTextBox from "./MessageTextBox";

class ChatResponse extends Component {
    render() {
        return (
            <div className="chat-response">
                <ChatsResponseTopBar />
                <MessagesComponent />
                <MessageTextBox />
            </div>
        )
    }
}

export default ChatResponse