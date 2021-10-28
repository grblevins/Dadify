import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import {
	Register,
	LogIn,
	Header,
	Home,
	Admin,
	AdminUsers,
	Cart,
	Deals,
	Jokes,
	Message,
	Products,
	ProductPage
} from './components';

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [registerToken, setRegisterToken] = useState('');
	const [userToken, setUserToken] = useState('');

	useEffect(() => {
		{localStorage.getItem('Token') 
			? setLoggedIn(true) 
			: setLoggedIn(false)
		};
	}, []);

	return (
		<>
			<div className="app">
				<Header 
					loggedIn={loggedIn}
					setLoggedIn={setLoggedIn}
				/>
				<Switch>
					<Route exact path="/">
						<Home 
							loggedIn={loggedIn}
							setLoggedIn={setLoggedIn}
							username={username}
							password={password}
							setUsername={setUsername}
							setPassword={setPassword}
							setRegisterToken={setRegisterToken}
							userToken={userToken}
							setUserToken={setUserToken}
						/>
					</Route>

					<Route path="/register">
						<Register
							loggedIn={loggedIn}
							setLoggedIn={setLoggedIn}
							username={username}
							password={password}
							setUsername={setUsername}
							setPassword={setPassword}
							registerToken={registerToken}
							setRegisterToken={setRegisterToken}
						/>
					</Route>

					<Route path="/login">
						<LogIn
							loggedIn={loggedIn}
							setLoggedIn={setLoggedIn}
							username={username}
							password={password}
							setUsername={setUsername}
							setPassword={setPassword}
							setRegisterToken={setRegisterToken}
							userToken={userToken}
							setUserToken={setUserToken}
						/>
					</Route>

					<Route path="/admin">
						<Admin />
					</Route>

					<Route path="/adminusers">
						<AdminUsers />
					</Route>

					<Route path="/cart">
						<Cart />
					</Route>

					<Route exact path="/products">
						<Products />
					</Route>

					<Route path="/products/:productid">
						<ProductPage />
					</Route> 

					<Route path="/deals">
						<Deals />
					</Route>

					<Route path="/jokes">
						<Jokes />
					</Route>

					<Route>
						<Message />
					</Route>
				</Switch>
			</div>
		</>
	)
}

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'))