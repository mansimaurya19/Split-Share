import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Dashboard from '../sections/Dashboard';

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  const { isAuthenticated, logout, user } = authContext;
  return <div>{user ? <Dashboard /> : 'Home'}</div>;
};

export default Home;
