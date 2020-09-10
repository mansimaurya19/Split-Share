import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    phone: '',
    password: '',
  });

  const { name, phone, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(typeof phone);
    if (name === '' || password === '' || phone === '') setAlert('Please enter all the fields', 'danger');
    else if (!/^\+?(0|[1-9]\d*)$/.test(phone)) setAlert('Please enter valid phone no.', 'danger');
    else if (phone.length !== 10) setAlert('Please enter 10 digit phone no.', 'danger');
    else {
      register({
        name,
        phone,
        password,
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' name='name' value={name} onChange={onChange} required />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone number</label>
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
            minLength='6'
            required
          />
        </div>

        <input type='submit' value='Register' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

export default Register;
