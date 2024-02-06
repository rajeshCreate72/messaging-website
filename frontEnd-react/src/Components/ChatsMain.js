import React, { Component } from "react";
import ChatResponse from "./ChatResponseComponent/ChatResponse";
import Chats from "./ChatComponent/Chats";

class ChatsMain extends Component {
    render() {
        return (
            <div>
                <Chats />
                <ChatResponse />
            </div>
        )
    }
}

export default ChatsMain;