import React, { Fragment, useContext, useEffect } from 'react';
import TransContext from '../../context/trans/transContext';
import { Card, CardContent, Typography, Grid, Paper } from '@material-ui/core';
import CountUp from 'react-countup';

const Transactions = () => {
  const transContext = useContext(TransContext);

  const { credits, cloading, debits, dloading } = transContext;

  let credSum = 0;
  let debtSum = 0;
  if (!cloading)
    credits.map((cred) => {
      if (!cred.cleared) credSum = credSum + cred.amount;
    });
  if (!dloading)
    debits.map((debt) => {
      if (!debt.cleared) debtSum = debtSum + debt.amount;
    });
  // useEffect(() => {

  // }, []);

  return (
    <div className='m-2'>
      <Grid container justify='center'>
        <Grid item component={Card} xs={12} md={5} elevation={8}>
          <CardContent className='bg-success'>
            <Typography variant='h5' className='text-center' gutterBottom>
              You'll Get
              <hr />
            </Typography>

            <Typography variant='h3'>
              {!cloading && credits !== null ? (
                <CountUp start={0} end={credSum} duration={2.5} separator=',' />
              ) : (
                'Loading..'
              )}
            </Typography>
          </CardContent>
        </Grid>
        &nbsp;&nbsp;&nbsp;
        <Grid item component={Card} xs={12} md={5} elevation={8}>
          <CardContent className='bg-danger'>
            <Typography variant='h5' className='text-center' gutterBottom>
              You'll Pay
              <hr />
            </Typography>

            <Typography variant='h3'>
              {!dloading && debits !== null ? (
                <CountUp start={0} end={debtSum} duration={2.5} separator=',' />
              ) : (
                'Loading..'
              )}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Transactions;
