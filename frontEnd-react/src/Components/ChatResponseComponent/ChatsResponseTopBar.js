import React from 'react'
import ChatsResponseProfile from './ChatsResponseProfile'

function ChatsResponseTopBar() {
  return (
    <div className='response-top-bar'>
      <ChatsResponseProfile />
      <span><h2>Contact Name</h2></span>
    </div>
  )
}

export default ChatsResponseTopBar