import React, { useContext, useEffect } from 'react';
import TransContext from '../../context/trans/transContext';

const History = () => {
  const transContext = useContext(TransContext);

  const { getCredits, credits, loading } = transContext;

  useEffect(() => {
    getCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <div className='badge badge-success'>
          <h3 className='text-center'>Credits</h3>
        </div>
        {!loading && credits !== null ?
          credits.map(cred => (
            <div className='card green-border'>
              <i>{cred.date.substring(0, 10)}:{' '}</i>
              {cred.debitor[0].name}({cred.debitor[0].phone})-
              <span className='text-left'><strong>Rs. {cred.amount}</strong></span>
            </div>
          ))
          : 'Loading..'}
      </div>
      <div>
        <div className='badge badge-danger'>
          <h3 className='text-center'>Debits</h3>
        </div>
        <div className='card red-border'>Sample of First Transaction</div>
        <div className='card red-border'>Sample of First Transaction</div>
        <div className='card red-border'>Sample of First Transaction</div>
      </div>
    </div>
  );
};

export default History;
