import React, { Component } from "react";
import './ChatsMainStyle.css'
import ChatResponse from "./ChatResponseComponent/ChatResponse";
import Chats from "./ChatsComponent/Chats";

class ChatsMain extends Component {
    render() {
        return (
            <div className="main-chats-container">
                <Chats />
                <ChatResponse />
            </div>
        )
    }
}

export default ChatsMain;