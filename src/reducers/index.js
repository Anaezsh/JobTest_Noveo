import { combineReducers } from 'redux';
import banksList from 'reducers/banksList';
import transactionsList from 'reducers/transactionsList';
import login from 'reducers/login';



export default combineReducers({
  login,
  banksList,
  transactionsList
})
