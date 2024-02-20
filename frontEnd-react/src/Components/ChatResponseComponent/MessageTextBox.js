import React, { useState } from 'react'
import sendLogo from "../contents/sendLogo.png"

function MessageTextBox({addMessage}) {
  const [textValue, setTextValue] = useState("")

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Message : ", textValue);
    addMessage({
        user: "1234", msg: textValue, timeStamp: new Date().toLocaleTimeString()
    });
    setTextValue("");
    console.log(typeof addMessage)
  }

  return (
    <div className='text-box-container'>
      <form className='message-box-form' onSubmit={handleSubmit}>
        <textarea id='response-text-box' value={textValue} onChange={handleTextChange}></textarea>
        <button type="submit" id='response-button'>
            <img src={ sendLogo } alt='sendLogo' id='img-send-logo'/>
        </button>
      </form>
    </div>
  )
}

export default MessageTextBox