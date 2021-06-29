import React, { useState}from 'react'
import logo from '../resources/logo.png'
import logo2 from '../resources/logo2.jpg'
import UsernameInput from './components/Usernameinput'
import SubmitButton from './components/SubmitButton'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { setUsername } from '../store/actions//dashboardActions'
import {registerNewUser} from '../utils/wssConnection/wssConnection'
import './LoginPage.css'
const LoginPage = ({ saveUsername }) => {
	const [username, setUsername] = useState('');
	const history = useHistory();

	const handleSubmitButtonPressedFun = () => {
    history.push('/dashboard');
    registerNewUser(username)
		saveUsername(username);
	};

	return (
		<div className="login-page_container background_main_color">
			<div className="login-page_login_box background_secondary_color">
				<div className="login-page_logo_container">
					<img className="login-page_logo_image" src={logo} alt="VideoTalker" />
				</div>
				<div className="login-page_title_container">
					<h2>Get on Board</h2>
				</div>
				<UsernameInput username={username} setUsername={setUsername} />
				<SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressedFun} />
			</div>
		</div>
	);
};

const mapActionsToProps = (dispatch) => {
	return {
		saveUsername: (username) => dispatch(setUsername(username)),
	};
};

export default connect(null,mapActionsToProps) (LoginPage)
