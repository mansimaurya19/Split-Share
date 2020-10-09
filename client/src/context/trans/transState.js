import React, { useReducer } from 'react';
import transReducer from './transReducer';
import TransContext from './transContext';
import axios from 'axios';

import { CREDIT_FETCH, CREDIT_FAIL, DEBIT_FETCH, DEBIT_FAIL } from '../types';

const TransState = (props) => {
  const initialState = {
    cloading: true,
    dloading: true,
    credits: null,
    debits: null,
    error: null,
  };
  const [state, dispatch] = useReducer(transReducer, initialState);

  const getCredits = async () => {
    try {
      const res = await axios.get('/api/transactions/credits');
      console.log(res.data);
      dispatch({ type: CREDIT_FETCH, payload: res.data });
    } catch (err) {
      dispatch({ type: CREDIT_FAIL, payload: 'Internal Server Error' });
    }
  };

  const getDebits = async () => {
    try {
      const res = await axios.get('/api/transactions/debits');
      console.log(res.data);
      dispatch({ type: DEBIT_FETCH, payload: res.data });
    } catch (err) {
      dispatch({ type: DEBIT_FAIL, payload: 'Internal Server Error' });
    }
  };

  return (
    <TransContext.Provider
      value={{
        cloading: state.cloading,
        dloading: state.dloading,
        credits: state.credits,
        debits: state.debits,
        error: state.error,
        getCredits,
        getDebits,
      }}
    >
      {props.children}
    </TransContext.Provider>
  );
};
export default TransState;
