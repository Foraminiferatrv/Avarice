import {CHANGE_CURRENCY} from './actionTypes';

const changeCurrency = (currency, multiplier)=>({
  type: CHANGE_CURRENCY,
  currency,
  multiplier
})

export {
  changeCurrency
}