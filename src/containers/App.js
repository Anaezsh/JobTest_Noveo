import React from 'react';
import {connect} from 'react-redux';
import {getStateAction} from 'actions/getStateAction';
import AppComponent from 'components/AppComponent';


  const mapStateToProps = (state) => ({
    loginResult: state.login.loginResult
  })

  const mapDispatchToProps = (dispatch) => ({
    userLogin: () => (
      dispatch(loginAction())
    ),
    getState: () => (
      dispatch(getStateAction())
    )
  })

  export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
