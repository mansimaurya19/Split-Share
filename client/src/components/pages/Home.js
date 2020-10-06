import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Dashboard from '../sections/Dashboard';

import History from '../sections/History';
const UserHome = () => {
  return (
    <Fragment>
      <Dashboard />
      <History />
    </Fragment>
  );
};
const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const { isAuthenticated, logout, user } = authContext;

  return <div>{user ? <UserHome /> : 'Loading..'}</div>;

};

export default Home;
