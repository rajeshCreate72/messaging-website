import React from 'react'
import './ChatsMain.css'
import ChatLeftEle from './ChatLeftEle/ChatLeftEle'
import ChatRightEle from './ChatRightEle/ChatRightEle'

function ChatsMain() {
 return (
    <div className='container-fluid font-style'>
        <div className='row'>
            <div className='col-3'>
                <ChatLeftEle />
            </div>
            <div className='col-9'>
                <ChatRightEle />
            </div>
        </div>
    </div>
  )
}

export default ChatsMain