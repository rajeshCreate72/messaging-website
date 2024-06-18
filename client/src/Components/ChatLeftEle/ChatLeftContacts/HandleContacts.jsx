import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../ChatLeftEle.css'
import { fetchContacts } from '../../service/actions/syncFetchContacts';
import { fetchMessages } from '../../service/actions/messagesFetchSync';

function HandlingContacts(props) {
    const { contacts } = useSelector((state) => state.addContact)
    const dispatch = useDispatch();
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        dispatch(fetchContacts(userId))
    }, [dispatch])

    const selectContact = (contact) => {
        dispatch({type: 'SET_CONTACT_TO_CHAT', contact})
    }

    const getMessages = (contact) => {
        const users = {
            userId: userId,
            contactId: contact,
        }
        dispatch(fetchMessages(users))
    }
    
  return (
    <div>
        {contacts.length > 0 && (contacts.map((contact, index) => (
            <div 
            className='s-cont' 
            key={index} 
            onClick={() => 
            {selectContact(contact)
            getMessages(contact)}
            }>
                <h6>{contact}</h6>
            </div>
        )))}
    </div>
  )
}

export default HandlingContacts