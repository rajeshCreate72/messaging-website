import React from 'react'
import "./ChatsResponseStyle.css"
import responderImg from "../contents/default.png"

function ProfileResponder() {
  return (
    <div className='responder-profile-head'>
        <img id="responder-img" src={responderImg} alt='responderImg' />
    </div>
  )
}

export default ProfileResponder