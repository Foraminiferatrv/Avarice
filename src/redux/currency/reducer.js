import {
  CHANGE_CURRENCY
} from './actionTypes';

const currencyReducer = ( state, action ) => {
  switch ( action.type ) {
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.currency,
          multiplier: action.multiplier
      };
    default: return {
      ...state
    };
  }
}

export default currencyReducer;