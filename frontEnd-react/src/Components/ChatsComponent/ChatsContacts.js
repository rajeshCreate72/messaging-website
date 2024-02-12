import React from 'react'
import "./ChatsStyle.css"

function ChatsContacts() {
  const userId1 = "452145"
  const userId2 = "452174"
  const contactsList = [
    {user: userId1, userName: "HelloGuru"},
    {user: userId2, userName: "HelloFriEnd"}
  ]

  return (
    <div className='chats-contacts'>
      {contactsList.map((contacts, index) => (
        <div className='contacts-list' key={ index }>
          <form>
            <li style={{listStyle: 'none'}}>
              <button className='contacts-solo-style'>{contacts.userName}</button>
            </li>
          </form>
        </div>
      )) }
    </div>
  )
}

export default ChatsContacts