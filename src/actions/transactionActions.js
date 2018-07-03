import {ADD_TRANSACTION, DELETE_TRANSACTION} from 'constants/index';
import axios from 'axios';

let transactionId=0;

export const addTransactionAction = (sum, bankId) => {
  transactionId++;
  return dispatch => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: {
        transactionId : transactionId,
        sum,
        bankId
      }
    });

    axios({
      method: 'post',
      url: 'http://localhost:1337/sendData',
      data: JSON.stringify({transactionId, sum, bankId})
    });
  }
}

export const deleteTransactionAction = (transactionId, sum, bankId) => {
  return dispatch => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: transactionId
    });

    axios({
      method: 'post',
      url: 'http://localhost:1337/deleteRow',
      data: JSON.stringify({transactionId, sum, bankId})
    });
  }
};
