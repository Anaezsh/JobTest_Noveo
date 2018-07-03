import {GET_STATE_REQUEST, GET_STATE_REQUEST_SUCCESS} from 'constants/index';

const initialState = [];

export default function banksList(state = initialState, action) {

  switch (action.type) {
    case GET_STATE_REQUEST:
      return state;

    case GET_STATE_REQUEST_SUCCESS:
      return [...action.payload.banksList];

    default:
      return state;
  }
}
