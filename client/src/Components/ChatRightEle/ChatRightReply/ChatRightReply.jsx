import React, { useState } from 'react'
import '../ChatRightEle.css'

function ChatRightReply(props) {
  const [message, setMessage] = useState('');

  // to handle the enter and shift+enter
  const keyHandle = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  //To send the message go into chatbox
  const sendMessage = () => {
    if (message.trim() !== '') {
      props.addMessage(message);
      setMessage('')
    }
  }

  //To handle the submit event
  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage()
  }

  //To handle the change in the textarea input 
  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div className='rly'>
      <form onSubmit={ handleSubmit }>
        <div className='row'>
          <div className='col'></div>
          <div className='col rly-txt'>
            <textarea className='rly-box' value={message} onChange={handleChange} onKeyDown={keyHandle}></textarea>
          </div>
          <div className='col send-btn'>
            <button type='submit' className='msg-submit' placeholder="Type the message..."></button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChatRightReply