import React from "react";
import "../ChatLeftEle.css";
import HandleContacts from "./HandleContacts";

function ChatLeftContacts(props) {
  return (
    <div className="cont-list">
      <ul style={{ listStyle: "none" }}>
        <li>
          <HandleContacts />
        </li>
      </ul>
    </div>
  );
}

export default ChatLeftContacts;
