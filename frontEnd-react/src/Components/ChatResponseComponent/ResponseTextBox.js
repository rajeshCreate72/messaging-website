import React, { Component } from 'react'
import './ChatsResponseStyle.css'

class ResponseTextBox  extends Component {
  render() {
    return (
      <div className="response-text-box">
        <textarea className="response-text-input" type="text"></textarea>
      </div>
    )
  }
}

export default ResponseTextBox; 