import React from 'react'
import '../ChatLeftEle.css'
import HandleContacts from './HandleContacts'

function ChatLeftContacts() {
  return (
    <div className='cont-list'>
        <ul>
            <HandleContacts />
        </ul>
    </div>
  )
}

export default ChatLeftContacts