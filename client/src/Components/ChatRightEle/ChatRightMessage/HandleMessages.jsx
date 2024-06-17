import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../../service/actions/messagesFetchSync';

function HandleMessages() {
  const msgRef = useRef(null)
  const userId = localStorage.getItem('userId')
  const { messages } = useSelector((state) => state.addMessages)
  const contact = useSelector((state) => state.contacts.contactToChat)
  const dispatch = useDispatch()

  console.log(messages)

  useEffect(() => {
    const users = {
      userId: userId,
      contactId: contact,
    }
    dispatch(fetchMessages(users))
  }, [contact, dispatch])

  useEffect(() => {
    // msgRef.current refers to the msg sent by user not contact
    // (Object Chaning) msgRef.current? <- checks if it is taking any div as referance
        // the ref has set to something before this effect has to execute.
    msgRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages])

  return (
    <div>
        {Array.isArray(messages) && 
        messages.length > 0 && 
        messages.map((m, index) => (
          <div className='msg-got' key={index}>
            {m.user === userId ? (
              <div className='row' ref={msgRef}>
                <div className='col-9'></div>
                <div className='col my-msg'>
                  <p>{m.msg}</p>
                  <p>{m.time}</p>
                </div>
              </div>
            ) : (
              <div className='row'>
                <div className='col-3 not-my-msg'>
                  <p>{m.msg}</p>
                  <p>{m.time}</p>
                </div>
                <div className='col'></div>
              </div>
            )}
          </div>
        ))}
    </div>
  )
}

export default HandleMessages