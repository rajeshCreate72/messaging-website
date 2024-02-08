import React from 'react'
import "./ChatsResponseStyle.css"

function MessagesComponent() {
    const user1 = "123456"
    const user2 = "123458"
    const msg = [
        {user: user1, msg: "Hi", timeStamp: "1"},
        {user: user2, msg: "Hello", timeStamp: "2"},
        {user: user2, msg: "How are you?", timeStamp: "2"},
        {user: user1, msg: "I am good", timeStamp: "3"},
        {user: user1, msg: "Good, Until I text againn..!", timeStamp:"4"}
    ]

    return (
        <div className='msg-container'>
            {msg.map((message, index) => (
                <div key={index}>
                    {message.user === user1 ? (
                        <div className='my-msg-left'>
                            <p className='myMsg'>{ message.msg }</p>
                        </div>
                    ) : (
                        <div className='my-res-right'>
                            <p className='myRes'>{ message.msg }</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default MessagesComponent