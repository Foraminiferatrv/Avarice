import { combineReducers, createStore } from 'redux';
import currency from './currency/reducer';

const reducer = combineReducers({
  currency
})

const store = createStore(reducer);

export default store;