import React, { Component } from "react";
import './ChatsMainStyle.css'
import ChatResponse from "./ChatResponseComponent/ChatResponse";
import Chats from "./ChatComponent/Chats";

class ChatsMain extends Component {
    render() {
        return (
            <div className="main-chats-container">
                <Chats className="chats-heads"/>
                <ChatResponse className="chats-response"/>
            </div>
        )
    }
}

export default ChatsMain;