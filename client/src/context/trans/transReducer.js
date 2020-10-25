import { CREDIT_FETCH, CREDIT_FAIL, DEBIT_FETCH, DEBIT_FAIL } from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREDIT_FETCH:
      return {
        ...state,
        credits: action.payload,
        cloading: false,
      };
    case CREDIT_FAIL:
      return {
        ...state,
        credits: null,
        cloading: false,
        error: action.payload || null,
      };
    case DEBIT_FETCH:
      return {
        ...state,
        debits: action.payload,
        dloading: false,
      };
    case DEBIT_FAIL:
      return {
        ...state,
        debits: null,
        dloading: false,
        error: action.payload || null,
      };
    default:
      return state;
  }
};
