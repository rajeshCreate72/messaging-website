import React, { useState } from 'react'
import './ChatsMain.css'
import ChatLeftEle from './ChatLeftEle/ChatLeftEle'
import ChatRightEle from './ChatRightEle/ChatRightEle'

function ChatsMain() {
    const [getContact, setContact] = useState(null)

    const openCoMsgs = (contact) => {
        setContact(contact)
    }
 return (
    <div className='container-fluid font-style'>
        <div className='row'>
            <div className='col-3'>
                <ChatLeftEle selectContact={getContact} />
            </div>
            <div className='col-9'>
                <ChatRightEle renderContact={openCoMsgs} />
            </div>
        </div>
    </div>
  )
}

export default ChatsMain