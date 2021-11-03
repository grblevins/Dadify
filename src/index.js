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
	Cart,
	JokeBook,
	Message,
	Products
} from './components';

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [registerToken, setRegisterToken] = useState('');
	const [userToken, setUserToken] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const [productBoard, setProductBoard] = useState(null);
	const [userProducts, setUserProducts] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		{localStorage.getItem('Token') 
			? setLoggedIn(true) 
			: setLoggedIn(false)
		};
		{localStorage.getItem('Admin')
			? setIsAdmin(true)
			: setIsAdmin(false);
		}
	}, []);

	useEffect(() => {
		const nonUserCart = {
            total: 0.00,
            items: []
        }
        localStorage.setItem("NonUserCart", JSON.stringify(nonUserCart));
	}, [loggedIn]);

	return (
		<>
			<div className="app">
				<Header 
					loggedIn={loggedIn}
					setLoggedIn={setLoggedIn}
					isAdmin={isAdmin}
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
							isAdmin={isAdmin}
							setIsAdmin={setIsAdmin}
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
							isAdmin={isAdmin}
							setIsAdmin={setIsAdmin}
						/>
					</Route>
					<Route path="/admin">
						<Admin 
							users={users}
							setUsers={setUsers}
						/>
					</Route>
					<Route path="/cart">
						<Cart loggedIn={loggedIn}/>
					</Route>
					<Route path="/products">
						<Products 
							loggedIn={loggedIn}
							userProducts={userProducts}
							setUserProducts={setUserProducts}
							productBoard={productBoard}
							setProductBoard={setProductBoard}
							isAdmin={isAdmin}
						/>
					</Route>
					<Route path="/jokes">
						<JokeBook />
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