import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postContact } from "../../service/actions/syncContacts";
import { postMessages, getMessages } from "../../service/actions/syncMessages";
import "../ChatRightEle.css";

function ChatRightReply({ addMessageToChat }) {
  const [message, setMessage] = useState("");
  // const [messages, setMessages] = useState({});
  const user = localStorage.getItem("userId");
  const contact = useSelector((state) => state.contacts.contactToChat);

  const dispatch = useDispatch();
  const createTime = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    let hours = date.getHours();
    // Pad start always keeps 2 digits if 1 then ex:'05'
    const mins = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    // Converting 24-hrs to 12 hrs format
    hours = hours % 12;
    // If hours is 24 % 12 = 0 then it is 12 else if 18 % 12 = 6 means 6PM
    hours = hours === 0 ? 12 : hours;
    const strHrs = String(hours).padStart(2, "0");
    const formattedTime = `${day}/${month}/${year} ${strHrs}:${mins}:${seconds} ${ampm}`;

    return formattedTime;
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const setMsgFormat = (message) => {
    const newMessage = { user: user, msg: message, time: createTime() };
    return newMessage;
  };

  const keyHandle = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmit(event);
      const messageNow = setMsgFormat(message);
      addMessageToChat(messageNow);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedMessage = setMsgFormat(message);
    // setMessages(formattedMessage);
    // console.log(messages);
    const messageData = {
      userId: user,
      contactId: contact,
      message: formattedMessage,
    };
    dispatch(postMessages(messageData));
    setMessage("");
  };

  return (
    <div className="rly">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col"></div>
          <div className="col rly-txt">
            <textarea
              className="rly-box"
              value={message}
              onChange={handleChange}
              onKeyDown={keyHandle}
            ></textarea>
          </div>
          <div className="col send-btn">
            <button
              type="submit"
              className="msg-submit"
              placeholder="Type the message..."
            ></button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChatRightReply;
