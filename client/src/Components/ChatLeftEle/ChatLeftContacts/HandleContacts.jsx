import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../ChatLeftEle.css'

function HandlingContacts(props) {
    const { contacts, isSuccess } = useSelector((state) => state.addContact)
    const dispatch = useDispatch();

    console.log(contacts)

    const selectContact = (contact) => {
        console.log(contact)
        dispatch({type: 'SET_CONTACT_TO_CHAT', contact})
    }
    
  return (
    <div>
        {/* {contact.map((contact, index) => (
            <div className='s-cont' key={index} onClick={() => selectContact(contact)}>
                <h4>{contact}</h4>
                <p>{ contact }'s message...</p>
            </div>
        ))} */}
    </div>
  )
}

export default HandlingContacts