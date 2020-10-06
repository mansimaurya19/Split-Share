import React, { useReducer } from 'react';
import transReducer from './transReducer';
import TransContext from './transContext';
import axios from 'axios';

import {
    CREDIT_FETCH,
    CREDIT_FAIL
} from '../types';

const TransState = (props) => {
    const initialState = {

        loading: true,

        credits: null,
        error: null,
    };
    const [state, dispatch] = useReducer(transReducer, initialState);
    const getCredits = async () => {
        try {
            const res = await axios.get('/api/transactions/credits');
            console.log(res.data)
            dispatch({ type: CREDIT_FETCH, payload: res.data });
        } catch (err) {
            dispatch({ type: CREDIT_FAIL, payload: "Couldn't Connect" });
        }
    };

    return (
        <TransContext.Provider
            value={{
                loading: state.loading,
                credits: state.credits,
                error: state.error,
                getCredits
            }}
        >
            {props.children}
        </TransContext.Provider>
    );
}
export default TransState;

