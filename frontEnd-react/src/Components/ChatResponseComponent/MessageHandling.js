import React, { useState } from 'react'
import MessagesComponent from './MessagesComponent';
import MessageTextBox from './MessageTextBox';

function MessageHandling() {
    const [msg, setMsg] = useState([
    {user: "1234", msg: "Hi", timeStamp: "45:60"},
    {user: "1235", msg: "Hello", timeStamp: "85:15"},
    {user: "1234", msg: "How Are you?", timeStamp: "64:52"},
    {user: "1235", msg: "i am good", timeStamp: "82:53"}
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