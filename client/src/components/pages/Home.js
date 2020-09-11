import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Dashboard from '../sections/Dashboard';
import Transactions from '../sections/Transactions';

const Home = () => {
	const authContext = useContext(AuthContext);
	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	const { isAuthenticated, logout, user } = authContext;
	if (user) {
		return (
			<div>
				<Dashboard />
				<Transactions />
			</div>
		);
	} else {
		return <div>Loading..</div>;
	}
};

export default Home;
