import React, { Fragment, useContext, useEffect } from 'react';
import TransContext from '../../context/trans/transContext';
import Transactions from './Transactions';
import { Button } from '@material-ui/core';

const History = () => {
  const transContext = useContext(TransContext);

  const { getCredits, credits, cloading, debits, dloading, getDebits } = transContext;

  useEffect(() => {
    getCredits();
    getDebits();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Transactions />
      <div className='grid-2'>
        <div>
          <div className='badge badge-success'>
            <h3 className='text-center'>Credits</h3>
          </div>
          {!cloading && credits !== null
            ? credits.map((cred) => (
                <div key={cred._id} className='card green-border'>
                  <strong>{cred.date.substring(0, 10)}: </strong>
                  {cred.debitor[0].name}({cred.debitor[0].phone})
                  <div className='float-right text-success'>
                    <strong>Rs. {cred.amount}</strong>
                    {!cred.cleared ? (
                      <Button variant='outlined' color='primary'>
                        Paid
                      </Button>
                    ) : (
                      <span className='m-1'>
                        <i className='fas fa-check-circle fa-2x'></i>
                      </span>
                    )}
                  </div>
                </div>
              ))
            : 'Loading..'}
        </div>
        <div>
          <div className='badge badge-danger'>
            <h3 className='text-center'>Debits</h3>
          </div>
          {!dloading && debits !== null
            ? debits.map((debt) => (
                <div key={debt._id} className='card red-border'>
                  <strong>{debt.date.substring(0, 10)}: </strong>
                  {debt.creditor[0].name}({debt.creditor[0].phone})
                  <section className='float-right text-danger'>
                    <strong>Rs. {debt.amount}</strong>
                    {!debt.cleared ? (
                      <Button variant='outlined' color='primary'>
                        Paid
                      </Button>
                    ) : (
                      <span className='m-1'>
                        <i className='fas fa-check-circle fa-2x'></i>
                      </span>
                    )}
                  </section>
                </div>
              ))
            : 'Loading..'}
        </div>
      </div>
    </Fragment>
  );
};

export default History;
