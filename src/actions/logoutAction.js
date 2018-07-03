import {LOGOUT_REQUEST} from 'constants/index';
import axios from 'axios';

export function logoutAction(){
  return dispatch=>{
    dispatch({
        type:LOGOUT_REQUEST, payload: false
    });

    axios({
      method: 'post',
      url: 'http://localhost:1337/sendLogin',
      data: JSON.stringify({username:"Ivan", password:"1234", loginResult:false})
    });
  }
};
