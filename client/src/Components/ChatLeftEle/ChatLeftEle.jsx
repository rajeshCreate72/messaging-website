import React from 'react'
import ChatLeftInfo from './ChatLeftInfo/ChatLeftInfo'
import ChatLeftContacts from './ChatLeftContacts/ChatLeftContacts'

function ChatLeftEle(props) {
  return (
    <div>
        <div className='row'>
            <div className='col'>
                <ChatLeftInfo />
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <ChatLeftContacts />
            </div>
        </div>
    </div>
  )
}

export default ChatLeftEle