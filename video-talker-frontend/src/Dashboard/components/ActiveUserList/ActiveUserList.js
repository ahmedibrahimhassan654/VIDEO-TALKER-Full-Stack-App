import React from 'react'
import ActiveUserListItem from './ActiveUserListItem';

import './ActiveUsersList.css';

const activeUsers = [
	{
		socketId: 321,
		username: 'Paul',
	},
	{
		socketId: 333,
		username: 'John',
	},
	{
		socketId: 432,
		username: 'Kate',
	},
	{
		socketId: 345,
		username: 'Adam',
	},
];


const ActiveUserList = () => {
  return (
		<div className="active_user_list_container">
			{activeUsers.map((activeUser) => (
        <ActiveUserListItem
          key={activeUser.socketId}
          activeUser={activeUser}
        />
			))}
		</div>
  );
}

export default ActiveUserList
