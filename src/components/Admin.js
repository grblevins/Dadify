import React, { useEffect, useState } from 'react';
import {useHistory, Link} from 'react-router-dom';
import api from '../api/api';

const Admin = (username) => {

	// const [isAdmin, setIsAdmin] = useState(null);
	
	// try {
	// 	const data = await api.makeRequest(`/users`, `GET`)
	// } catch (error) {
	// 	throw error;
	// }


	return (
		<div id="admin">
			<h1>For The Admin Things</h1>
			<Link to="/">Back to Home</Link>
			<div>Create a new product</div>
			<div>Delete a product</div>
			<div>Edit a product</div>
			<div><Link to="/adminusers">View User information</Link></div>
		</div>
	)
}

export default Admin