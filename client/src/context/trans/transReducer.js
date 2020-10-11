import { CREDIT_FETCH, CREDIT_FAIL, DEBIT_FETCH, DEBIT_FAIL, UPDATE_FAIL, UPDATE_SUCCESS } from '../types';

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
      case UPDATE_SUCCESS:
        return {
          ...state,
          credits: state.credits.map((cred)=>{
            if (cred._id === action.payload._id)
              cred.cleared = true;
            return cred;
          }),
          debits: state.debits.map((debt)=>{
            if (debt._id === action.payload._id)
              debt.cleared = true;
            return debt;
          }),
          loading: false,
        };
      case UPDATE_FAIL:
        return {
          ...state,
          error: action.payload || null,
        };  
    default:
      return state;
  }
};
