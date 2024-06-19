import React, { useEffect, useState } from "react";
import "../ChatRightEle.css";
import HandleMessages from "./HandleMessages";
import ChatRightReply from "../ChatRightReply/ChatRightReply";

function ChatRightMessage() {
  return (
    <div className="msgs">
      <div className="text-area">
        <HandleMessages />
      </div>
      <div className="row">
        <div className="col">
          <ChatRightReply />
        </div>
      </div>
    </div>
  );
}

export default ChatRightMessage;
