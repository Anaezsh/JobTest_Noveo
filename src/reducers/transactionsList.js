import {ADD_TRANSACTION, DELETE_TRANSACTION, GET_STATE_REQUEST_SUCCESS} from 'constants/index'

const initialState = [];

export default function transactionsList(state = initialState, action ) {

  switch (action.type) {

    case GET_STATE_REQUEST_SUCCESS:
      return [...action.payload.transactionsList];

    case ADD_TRANSACTION:
      return [
        ...state, {
          transactionId: action.payload.transactionId,
          sum: action.payload.sum,
          bankId: action.payload.bankId
        }
      ]

    case DELETE_TRANSACTION:
      return state.filter(transaction => transaction.transactionId !== action.payload)
    default:
      return state;
  }
}
