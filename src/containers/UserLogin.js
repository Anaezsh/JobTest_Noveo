import {connect} from 'react-redux';
import UserLogForm from 'components/UserLogForm';
import {getStateAction} from 'actions/getStateAction';
import {loginAction} from 'actions/loginAction';



const mapStateToProps = (state) => ({
  loginResult: state.login.loginResult
})


const mapDispatchToProps = (dispatch) => ({
  userLogin: (username, password) => (
    dispatch(loginAction(username, password))
  ),
  getState: () => (
    dispatch(getStateAction())
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(UserLogForm)
