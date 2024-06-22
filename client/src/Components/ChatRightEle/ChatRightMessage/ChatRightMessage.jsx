import React, { useEffect, useState } from "react";
import "../ChatRightEle.css";
import HandleMessages from "./HandleMessages";
import ChatRightReply from "../ChatRightReply/ChatRightReply";
import { getMessages } from "../../service/actions/syncMessages";
import { useDispatch, useSelector } from "react-redux";

function ChatRightMessage() {
  const contact = useSelector((state) => state.contacts.contactToChat);
  const [messagesToChat, setMessagesToChat] = useState([]);
  const [addMessage, setAddMessage] = useState({});
  const { messages } = useSelector((state) => state.addMessages);
  const user = localStorage.getItem("userId");
  const dispatch = useDispatch();

  const allMessages = [...messages, addMessage];

  useEffect(() => {
    setMessagesToChat(allMessages);
  }, [messages, addMessage]);

  useEffect(() => {
    dispatch(getMessages({ userId: user, contactId: contact }));
  }, [contact, addMessage]);

  return (
    <div className="msgs">
      <div className="text-area">
        <HandleMessages theseMessages={messagesToChat} />
      </div>
      <div className="row">
        <div className="col">
          <ChatRightReply addMessageToChat={setAddMessage} />
        </div>
      </div>
    </div>
  );
}

export default ChatRightMessage;
