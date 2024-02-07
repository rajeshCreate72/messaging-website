import React from 'react'
import "./ChatsStyle.css";
import DefaultProfileImg from "../contents/default.png"

function ProfileSelf() {
  return (
    <div className='self-profile-head'>
        <image id="img-property" src={ DefaultProfileImg } alt="defaultImg" />
      </div>
  )
}

export default ProfileSelf
