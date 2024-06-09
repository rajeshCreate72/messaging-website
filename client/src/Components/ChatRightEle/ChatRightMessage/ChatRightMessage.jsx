import React, { useEffect, useRef, useState } from 'react'
import '../ChatRightEle.css'
import HandleMessages from './HandleMessages'
import ChatRightReply from '../ChatRightReply/ChatRightReply'

function ChatRightMessage() {
  const [msgs, setMsgs] = useState([])

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