import React, { Component } from 'react';
import "./ChatsStyle.css";
import DefaultProfile from "./contents/default.png";

class ProfileSelf extends Component {
  render() {
    return (
      <div className="self-profile-head">
        <image src={DefaultProfile} alt="ProfileImage" />
      </div>
    )
  }
}

export default ProfileSelf;