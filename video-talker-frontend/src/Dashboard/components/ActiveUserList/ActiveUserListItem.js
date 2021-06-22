import React from 'react'
import userAvatar from '../../../resources/userAvatar.png';
const ActiveUserListItem = ({ activeUser }) => {
	const handleListItemPressed = () => {};

	return (
		<div className="active_user_list_item" onClick={handleListItemPressed}>
			<div className="active_user_list_image_container">
				<img className="active_user_list_image" alt='user_image' src={userAvatar} />
			</div>
			<span className="active_user_list_text">{activeUser.username}</span>
		</div>
	);
};

export default ActiveUserListItem
