import React from 'react'
import ChatLeftInfo from './ChatLeftInfo/ChatLeftInfo'
import ChatLeftContacts from './ChatLeftContacts/ChatLeftContacts'

function ChatLeftEle() {
  return (
    <div>
        <div className='row'>
            <div className='col'>
                <ChatLeftInfo></ChatLeftInfo>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <ChatLeftContacts></ChatLeftContacts>
            </div>
        </div>
    </div>
  )
}

export default ChatLeftEle