import React, { Component } from 'react'
import "./ChatsResponseStyle.css"
import ProfileResponder from "./ProfileResponder"

class ChatsResponseTopBar extends Component {
  render() {
    return (
      <div className="response-top-bar">
        <ProfileResponder />
      </div>
    )
  }
}

export default ChatsResponseTopBar;