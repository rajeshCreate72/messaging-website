import React from 'react'

function MessagesComponent({msg}) {
  if (!msg || !msg.length) {
    return <div className='msg-container'></div>
  }
  return (
    <div className='msg-container'>
      {msg.map((message, index) => (
        message.user === "1234" ? (
          <div className="my-msg" key={index}>
            <p>{ message.msg }</p>
            <br />
            <p>{ message.timeStamp }</p>
          </div>
        ) : (
            <div className='not-my-msg' key={index}>
              <p>{ message.msg }</p>
              <br />
              <p>{ message.timeStamp }</p>
            </div>
        )
      ))}
    </div>
  )
}

export default MessagesComponent