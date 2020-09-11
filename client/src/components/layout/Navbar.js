import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  console.log(user);
  const onLogout = () => {
    logout();
  };
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name} </li>
      <a onClick={onLogout} href='#!'>
        <i className='fas fa-sign-out-alt'></i> <span className='hide-sm'>Logout</span>
      </a>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </Fragment>
  );

  return (
    <Fragment>
      <div className='navbar-upper bg-dark'></div>
      <div className='navbar bg-primary'>
        <h1 className='text-brand'>
          <i className={icon} /> {title}
        </h1>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
      <div className='navbar-lower bg-dark'></div>
    </Fragment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'SplitShare',
  icon: 'fas fa-coins',
};

export default Navbar;
