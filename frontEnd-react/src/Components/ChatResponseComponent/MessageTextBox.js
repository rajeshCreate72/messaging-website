import React from 'react'
import sendLogo from "../contents/sendLogo.png"

function MessageTextBox() {
  return (
    <div className='text-box-container'>
        <textarea id='response-text-box'></textarea>
        <button id='response-button'>
            <img src={ sendLogo } alt='sendLogo' id='img-send-logo'/>
        </button>
    </div>
  )
}

export default MessageTextBox