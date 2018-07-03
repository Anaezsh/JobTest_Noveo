import {LOGIN_REQUEST} from 'constants/index';
import axios from 'axios';

export function loginAction(username, password){
  return dispatch=>{
    dispatch({
        type:LOGIN_REQUEST,
        payload: {
          username: username,
          password: password
        }
    });

    axios({
      method: 'post',
      url: 'http://localhost:1337/sendLogin',
      data: JSON.stringify({username:"Ivan",password:"1234",loginResult:true})
    });
  }
};
