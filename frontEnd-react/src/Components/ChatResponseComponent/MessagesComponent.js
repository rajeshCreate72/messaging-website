import React from 'react'

function MessagesComponent() {
  const user1 = "1234"
  const user2 = "1236"
  const msg = [
    {user: user1, msg: "Hi", timeStamp: "45:60"},
    {user: user2, msg: "Hello", timeStamp: "85:15"},
    {user: user1, msg: "How Are you?", timeStamp: "64:52"},
    {user: user2, msg: "i am good", timeStamp: "82:53"}
  ]
  return (
    <div className='msg-container'>
      {msg.map((message, index) => (
        message.user === user1 ? (
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