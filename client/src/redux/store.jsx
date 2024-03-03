import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import customerReducer from './reducers/customerReducers';

const rootReducer = combineReducers({
  customerReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
export const selectCustomer =  (state) =>state.customerData
