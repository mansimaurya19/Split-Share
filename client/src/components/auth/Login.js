import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}

		if (error === 'Username or Password did not match') {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		phone: '',
		password: '',
	});

	const { phone, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (phone === '' || password === '') {
			setAlert('Please fill in all fields', 'danger');
		} else if (!/^\+?(0|[1-9]\d*)$/.test(phone)) setAlert('Please enter valid phone no.', 'danger');
		else if (phone.length !== 10) setAlert('Please enter 10 digit phone no.', 'danger');
		else {
			login({
				phone,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='phone'>Phone Number</label>
					<input id='phone' type='tel' name='phone' value={phone} onChange={onChange} required />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						value={password}
						onChange={onChange}
						required
						minLength='6'
					/>
				</div>

				<input type='submit' value='Login' className='btn btn-primary btn-block' />
			</form>
		</div>
	);
};

export default Login;
