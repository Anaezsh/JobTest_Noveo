import React, {Component} from 'react';

class UserLogForm extends Component{
  render(){
    return(
      <div className='logContainer'>
        <form onSubmit={this.checkHandler.bind(this)}>
          <div>
            <label htmlFor='login'><input type='text' placeholder='Введите логин' id='login' onChange={this.usernameHandler.bind(this)}/></label>
          </div>
          <div>
            <label htmlFor='password'><input type='text' placeholder='Введите пароль' id='password' onChange={this.passwordHandler.bind(this)}/></label>
          </div>
          <div>
            <input className='logButton' type='submit' value='Войти'/>
          </div>
        </form>
      </div>
    )
  }

  usernameHandler(e){
    this.username = e.target.value;
  }

  passwordHandler(e){
    this.password = e.target.value;
  }

  checkHandler(e) {
    e.preventDefault();
    this.props.userLogin(this.username, this.password);

    const check = new Promise((resolve)=>{
      setTimeout(()=>{this.props.loginResult? resolve(): reject()},0)
    })

    check
    .then(()=>{
      this.props.history.push('./send');
      this.props.getState();
    })
  }
}

  export default UserLogForm;
