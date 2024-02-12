import React from 'react'
import "./ChatsStyle.css";
import DefaultProfileImg from "../contents/default.png"

function ProfileSelf() {
  return (
      <div className='self-profile-head'>
        <form>
          <button><img id="img-property" src={ DefaultProfileImg } alt="defaultImg" /></button>
        </form>
      </div>
  )
}

export default ProfileSelf
