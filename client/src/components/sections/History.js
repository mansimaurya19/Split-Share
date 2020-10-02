import React from 'react';

const History = () => {
  return (
    <div className='grid-2'>
      <div>
        <div className='badge badge-success'>
          <h3 className='text-center'>Credits</h3>
        </div>
        <div className='card green-border'>Sample of First Transaction</div>
        <div className='card green-border'>Sample of First Transaction</div>
        <div className='card green-border'>Sample of First Transaction</div>
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
