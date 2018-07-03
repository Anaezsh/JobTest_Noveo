import React from 'react';
import {connect} from 'react-redux';
import {deleteTransactionAction} from 'actions/transactionActions';
import TransactionsTableComponent from 'components/TransactionsTableComponent';
import {getStateAction} from 'actions/getStateAction';

const mapStateToProps = (state) => ({
  transactionsList: state.transactionsList,
  banksList: state.banksList
})

const mapDispatchToProps = dispatch => ({
  deleteTransaction: (transactionId, sum, bankId) => {
    dispatch(deleteTransactionAction(transactionId, sum, bankId));
  },
  getState: () => (
    dispatch(getStateAction())
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTableComponent)
