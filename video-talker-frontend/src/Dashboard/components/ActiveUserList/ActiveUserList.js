import React from 'react'
import ActiveUserListItem from './ActiveUserListItem';
import {connect} from 'react-redux'
import './ActiveUsersList.css';

// const activeUsers = [
// 	{
// 		socketId: 321,
// 		username: 'Paul',
// 	},
// 	{
// 		socketId: 333,
// 		username: 'John',
// 	},
// 	{
// 		socketId: 432,
// 		username: 'Kate',
// 	},
// 	{
// 		socketId: 345,
// 		username: 'Adam',
// 	},
// ];


const ActiveUserList = ({activeUsers ,callState}) => {
  return (
		<div className="active_user_list_container">
			{activeUsers.map((activeUser) => (
        <ActiveUserListItem
          key={activeUser.socketId}
     activeUser={activeUser}
     callState={callState}
        />
			))}
		</div>
  );
}

const mapStateToProps = ({dashboard,call}) => ({
 ...dashboard,
 ...call
})
export default connect(mapStateToProps) (ActiveUserList)
