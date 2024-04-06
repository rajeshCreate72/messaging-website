import React, { useState } from 'react'
import '../ChatRightEle.css'
import HandleMessages from './HandleMessages'
import ChatRightReply from '../ChatRightReply/ChatRightReply'

function ChatRightMessage() {
  const [msgs, setMsgs] = useState([
    {user: "1123", msg: "Hi Hello", time: Date.now()},
    {user: "1124", msg: "Hi", time: Date.now()},
    {user: "1123", msg: "How Are you?", time: Date.now()},
    {user: "1124", msg: "I am good", time: Date.now()},
  ])

  const addMsg = (message) => {
    const newMessage = {user: '1123', msg: message, time: Date.now()}

    setMsgs([...msgs, newMessage])
  }

  return (
    <div className='msgs'>
      <div className='text-area'>
        <HandleMessages msg={msgs}/>
      </div>
      <div className="row">
          <div className="col">
              <ChatRightReply addMessage={addMsg}/>
          </div>
      </div>
    </div>
  )
}

export default ChatRightMessage