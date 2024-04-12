import React from 'react'
import '../ChatLeftEle.css'

function HandlingContacts(props) {
    const contacts = [
        "Contact 1",
        "Contact 2",
        "Contact 3",
    ]
    
  return (
    <div>
        {contacts.map((contact, index) => (
            <div className='s-cont' key={index} onClick={ props.selectContact(contact) }>
                <h4>{contact}</h4>
                <p>{ contact }'s message...</p>
            </div>
        ))}
    </div>
  )
}

export default HandlingContacts