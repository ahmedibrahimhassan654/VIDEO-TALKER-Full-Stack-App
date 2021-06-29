import React from 'react'
import userAvatar from '../../../resources/userAvatar.png';
import { callToOtherUser } from '../../../utils/webRTC/webRTCHandler';
import {callStates}from '../../../store/actions/callActions'
import './ActiveUsersList.css';


const ActiveUserListItem = ({ activeUser,callState }) => {


 const handleListItemPressed = () => {
    
  if (callState === callStates.CALL_AVAILABLE) {
   callToOtherUser(activeUser)
  }
      
   };
   console.log(activeUser);
	return (
		<div className="active_user_list_item" onClick={handleListItemPressed} >
			<div className="active_user_list_image_container">
				<img className="active_user_list_image" alt='user_image' src={userAvatar} />
			</div>
         <span className="active_user_list_text">{activeUser.username}</span>
		</div>
	);
};

export default ActiveUserListItem
