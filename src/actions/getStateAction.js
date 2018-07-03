import axios from 'axios';
import {GET_STATE_REQUEST,
  GET_STATE_REQUEST_SUCCESS } from 'constants/index';

export function getStateAction() {
  return dispatch => {
    dispatch({
        type: GET_STATE_REQUEST
    });



    axios.get(`http://localhost:1337/dataRequest`)
    .then(result=>{

      localStorage.setItem('state', JSON.stringify(result.data));
  
      return result;
    })
    .then(result => {
      dispatch({
        type: GET_STATE_REQUEST_SUCCESS,
        payload: result.data
      })
    })
  }
}
