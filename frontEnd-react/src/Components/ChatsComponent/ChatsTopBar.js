import React, { Component } from 'react';
import "./ChatsStyle.css";
import ProfileSelf from './ProfileSelf';

class ChatsTopBar extends Component {
    render() {
        return (
            <div className="chat-top-bar">
                <ProfileSelf />
            </div>
        )
    }
}

export default ChatsTopBar;