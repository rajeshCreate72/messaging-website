import React from 'react'
import { useDispatch } from 'react-redux';
import '../ChatLeftEle.css'

function HandlingContacts(props) {
    const contacts = ["Contact 1", "Contact 2", "Contact 3"];

    const dispatch = useDispatch();

    const selectContact = (contact) => {
        console.log(contact)
        dispatch({type: 'SET_CONTACT_TO_CHAT', contact})
    }
    
  return (
    <div>
        {contacts.map((contact, index) => (
            <div className='s-cont' key={index} onClick={() => selectContact(contact)}>
                <h4>{contact}</h4>
                <p>{ contact }'s message...</p>
            </div>
        ))}
    </div>
  )
}

export default HandlingContacts