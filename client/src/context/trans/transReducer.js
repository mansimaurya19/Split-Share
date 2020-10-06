import {
    CREDIT_FETCH,
    CREDIT_FAIL
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case CREDIT_FETCH:
            return {
                ...state,
                credits: action.payload,
                loading: false
            }
        case CREDIT_FAIL:
            return {
                ...state,
                credits: null,
                loading: false,
                error: action.payload || null
            }
        default:
            return state;
    }
}
