import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import API from '../api/api';

const Register = ({
	username, 
	password, 
	setUsername, 
	setPassword, 
	setRegisterToken, 
	setLoggedIn }) => {

	const history = useHistory();

	const [email, setEmail] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");

	const confirmPasswords = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			history.push("/message");
		} else {
			registerRequest(event);
			history.push("/");
		}
	};

	const registerRequest = async (event) => {
		event.preventDefault();
		try {
			const user = {username, password, email};
			const data = await API.makeRequest('/users/register', 'POST', user)
			const token = data.token;
			const cartData = await API.makeRequest(`/cart/${data.id}`, 'POST', {total: 0})
			console.log(cartData);
			if (token) {
				localStorage.setItem(`Token`, token);
				setEmail("");
				setUsername("");
				setPassword("");
				setconfirmPassword("");
				setRegisterToken(token);
				await API.makeRequest('/users/login', 'POST', user)
				history.push('/');
				// const cartData = await API.makeRequest(`/cart/${data.id}`, 'POST', {total: 0})
				// console.log(cartData);
				// alert(data.message)
			} else {
				// const token = data.token;
				// localStorage.setItem(`Token`, token);
				// setRegisterToken(token);
				// setUsername(username);
				// setLoggedIn(false);
				// localStorage.setItem(`Username`, username);
				// console.log(data);
				alert(data.message)
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<div className="loginMenu">
					</div>
			<form onSubmit={confirmPasswords}>
				<div className="signInMenuContent">
				<div className="signInInputs">
				<label>email</label>
					<input
						name="email"
						required
						onChange={(event) => setEmail(event.target.value)} value={email}
					/>
				</div>
				<div className="signInInputs">
				<label>username</label>
					<input
						name="userName"
						required
						onChange={(event) => setUsername(event.target.value)} value={username}
					/>
				</div>
				<div className="signInInputs">
				<label>password</label>
					<input 
						required
						name="password"
						onChange={(event) => setPassword(event.target.value)} value={password} required
						type="password"
					/>
				<div className="signInInputs">
				<label>confirm password</label>
					<input
						required
						type="password"
						value={confirmPassword}
						onChange={(event) => setconfirmPassword(event.target.value)}
					/>
				</div>
				</div>
				</div>
				<button className="signInButton" type="submit">Sign Up</button>
			</form>
		</div>
	);
}

export default Register;