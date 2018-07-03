import {LOGIN_REQUEST, LOGOUT_REQUEST, GET_STATE_REQUEST_SUCCESS} from 'constants/index';

const initialState = {
  username: "Ivan",
  password: "1234",
  loginResult: false
};

export default function login(state = initialState, action) {

  switch (action.type) {

    case GET_STATE_REQUEST_SUCCESS:
      return {...action.payload.login}
    case LOGIN_REQUEST:
      if (state.username==action.payload.username&&state.password==action.payload.password) {
        return {...state, loginResult: true};
      } else {
        return state;
      }
    case LOGOUT_REQUEST:
      return {...state, loginResult: action.payload};
    default:
      return state;
  }
}
