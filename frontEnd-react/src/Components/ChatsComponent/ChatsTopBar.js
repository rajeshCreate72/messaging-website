import React, { Component } from 'react';
import "./ChatsStyle.css";
import ProfileSelf from './ProfileSelf';
import AddContact from './AddContact';

class ChatsTopBar extends Component {
    render() {
        return (
            <div className="chat-top-bar">
                <ProfileSelf />
                <AddContact />
            </div>
        )
    }
}

export default ChatsTopBar;