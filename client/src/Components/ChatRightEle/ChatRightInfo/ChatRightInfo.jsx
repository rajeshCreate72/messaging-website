import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function ChatRightInfo(props) {
  const contact = useSelector((state) => state.contacts.contactToChat)

  return (
    <div className='info-rt width-border-rt'>
        <h3>{contact}</h3>
    </div>
  )
}

export default ChatRightInfo