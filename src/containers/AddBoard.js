import React from 'react';
import { connect } from 'react-redux'
import AddBoardComponent from 'components/AddBoardComponent'

const mapStateToProps = (state) => ({
  banksList: state.banksList,
  transactionsList: state.transactionsList,
  loginResult: state.login.loginResult
})

export default connect(mapStateToProps)(AddBoardComponent)
