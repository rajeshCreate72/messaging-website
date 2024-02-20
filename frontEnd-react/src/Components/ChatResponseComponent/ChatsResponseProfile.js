import React from 'react'
import chatResProfile from '../contents/default.png'

function ChatsResponseProfile() {
  return (
    <div className='chat-top-items'>
      <div className='chat-response-profile'>
        <form>
          <button><img id='img-property' src={chatResProfile} alt='response-profile-img' /></button>
        </form>
      </div>
      <h1>Contact Name</h1>
    </div>
  )
}

export default ChatsResponseProfile