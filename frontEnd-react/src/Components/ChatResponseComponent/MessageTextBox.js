import React from 'react'
import sendLogo from "../contents/sendLogo.png"

function MessageTextBox() {
  // const [textBoxValue, useTextBoxValue] = useState("")
  return (
    <div className='text-box-container'>
      <form className='message-box-form'>
        <textarea id='response-text-box'></textarea>
        <button id='response-button'>
            <img src={ sendLogo } alt='sendLogo' id='img-send-logo'/>
        </button>
      </form>
    </div>
  )
}

export default MessageTextBox