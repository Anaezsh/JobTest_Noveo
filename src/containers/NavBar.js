import React from 'react';
import { connect } from 'react-redux';
import NavBarComponent from 'components/NavBarComponent';
import {getStateAction} from 'actions/getStateAction';
import {logoutAction} from 'actions/logoutAction';

const mapDispatchToProps = (dispatch) => ({
  getState: () => (
    dispatch(getStateAction())
  ),
  userLogout: () => (
    dispatch(logoutAction())
  )
})
const mapStateToProps = (state) => ({
  loginResult: state.login.loginResult,
  transactionsList: state.transactionsList
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
