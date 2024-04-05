import React from 'react'
import '../ChatRightEle.css'

function ChatRightReply() {
  return (
    <div className='rly width-border-rt'>
      <form>
        <div className='row'>
          <div className='col'></div>
          <div className='col rly-txt'>
            <textarea className='rly-box'></textarea>
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