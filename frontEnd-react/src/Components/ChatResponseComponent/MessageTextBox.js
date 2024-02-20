import React, { useState } from 'react'
import sendLogo from "../contents/sendLogo.png"

function MessageTextBox() {
  const [textBoxValue, setTextBoxValue] = useState("")

  const handleTextChange = (event) => {
    setTextBoxValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefalut();

    console.log("Submitted Message : ", textBoxValue);
  }

  return (
    <div className='text-box-container'>
      <form className='message-box-form' onSubmit={handleSubmit}>
        <textarea id='response-text-box' value={textBoxValue} onChange={handleTextChange}></textarea>
        <button type='submit' id='response-button'>
            <img src={ sendLogo } alt='sendLogo' id='img-send-logo'/>
        </button>
      </form>
    </div>
  )
}

export default MessageTextBox