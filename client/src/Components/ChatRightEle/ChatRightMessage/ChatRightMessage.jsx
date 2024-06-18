import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../ChatRightEle.css'
import HandleMessages from './HandleMessages'
import ChatRightReply from '../ChatRightReply/ChatRightReply'
import { syncMesssages, fetchMessages } from '../../service/actions/messagesFetchSync';

function ChatRightMessage() {
  const [msgs, setMsgs] = useState([])
  const contact = useSelector((state) => state.contacts.contactToChat)
  const userId = localStorage.getItem('userId')
  const dispatch = useDispatch()

  const date = new Date()
  const day = String(date.getDay()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear())
  let hours = date.getHours()
  // Pad start always keeps 2 digits if 1 then ex:'05'
  const mins = String(date.getMinutes()).padStart(2, '0') 
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  // Converting 24-hrs to 12 hrs format
  hours = hours % 12
  // If hours is 24 % 12 = 0 then it is 12 else if 18 % 12 = 6 means 6PM
  hours = hours === 0 ? 12 : hours
  const strHrs = String(hours).padStart(2, '0')
  const formattedTime = `${day}/${month}/${year} ${strHrs}:${mins}:${seconds} ${ampm}`


  const addMsg = (message) => {
    const newMessage = {user: userId, msg: message, time: formattedTime}
    setMsgs([...msgs, newMessage])
  }

  useEffect(() => {
    const messageData = {
      userId: userId,
      contactId: contact,
      messages: msgs,
    }
    dispatch(syncMesssages(messageData))
  }, [msgs, dispatch])

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