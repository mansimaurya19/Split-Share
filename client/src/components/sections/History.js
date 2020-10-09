import React, { Fragment, useContext, useEffect } from 'react';
import TransContext from '../../context/trans/transContext';
import Transactions from './Transactions';

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
                  <i>{cred.date.substring(0, 10)}: </i>
                  {cred.debitor[0].name}({cred.debitor[0].phone})-
                  <span className='text-left'>
                    <strong>Rs. {cred.amount}</strong>
                  </span>
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
                  <i>{debt.date.substring(0, 10)}: </i>
                  {debt.creditor[0].name}({debt.creditor[0].phone})-
                  <span className='text-left'>
                    <strong>Rs. {debt.amount}</strong>
                  </span>
                </div>
              ))
            : 'Loading..'}
        </div>
      </div>
    </Fragment>
  );
};

export default History;
