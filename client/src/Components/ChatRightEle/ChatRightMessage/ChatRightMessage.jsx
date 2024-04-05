import React from 'react'
import '../ChatRightEle.css'
import HandleMessages from './HandleMessages'

function ChatRightMessage() {
  const msgs = [
    {user: "1123", msg: "Hi Hello", time: 12154},
    {user: "1124", msg: "Hi", time: 45126},
    {user: "1123", msg: "How Are you?", time: 12654},
    {user: "1124", msg: "I am good", time: 65461},
  ]
  return (
    <div className='msgs width-border-rt'>
        <HandleMessages msg={msgs}/>
    </div>
  )
}

export default ChatRightMessage