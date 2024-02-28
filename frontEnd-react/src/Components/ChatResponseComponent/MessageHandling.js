import React, { useState } from 'react'
import MessagesComponent from './MessagesComponent';
import MessageTextBox from './MessageTextBox';

function MessageHandling() {
    const user1 = "1234";
    const user2 = "1235";
    const [msg, setMsg] = useState([
    {user: user1, msg: "Hi", timeStamp: "45:60"},
    {user: user2, msg: "Hello", timeStamp: "85:15"},
    {user: user1, msg: "How Are you?", timeStamp: "64:52"},
    {user: user2, msg: "i am good", timeStamp: "82:53"}
    ]);

    const addMessage = (newMessage) => {
        setMsg([...msg, newMessage]);
    }
  return (
    <div>
        <MessagesComponent msg={ msg } />
        <MessageTextBox addMessage={addMessage} />
    </div>
  )
}

export default MessageHandling