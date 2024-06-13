import React, { useState, useEffect } from 'react'
import { useSelector, Provider } from 'react-redux';
import './ChatsMain.css'
import ChatLeftEle from './ChatLeftEle/ChatLeftEle'
import ChatRightEle from './ChatRightEle/ChatRightEle'
import { useNavigate } from 'react-router-dom'
import store from './Store'

function ChatsMain() {
   const contact = useSelector((state) => state.contacts.contactToChat);

 return (
    <div className='container-fluid font-style'>
        <div className='row'>
            <div className='col-3'>
                <ChatLeftEle />
            </div>
            <div className='col-9'>
                { contact && <ChatRightEle /> }
            </div>
        </div>
    </div>
  )
}

export default ChatsMain