import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Card, CardContent, Typography, Grid, Paper } from '@material-ui/core';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  return (
    <div>
      <Card className='text-center my-1' elevation={8}>
        <CardContent className='bg-light'>
          <Typography color='textSecondary' gutterBottom>
            Welcome to
          </Typography>
          <Typography variant='h3' component='h2'>
            <span className='text-brand'>SplitShare</span>
          </Typography>
          <span className='text-user'>{user.name}</span>
          <br />
          +91-{user.phone}
          <Typography color='textSecondary'>User Since: {new Date(user.date).toDateString()}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
