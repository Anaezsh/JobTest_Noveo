import React,{Component} from 'react';
import { Redirect } from 'react-router-dom'

class NavBarComponent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='navBarContainer'>
        <button className='firstNavElem' onClick={this.toAddTransactionsHandler.bind(this)}>ПЕРЕВОД</button>
        <button onClick={this.toListButtonHandler.bind(this)}>К СПИСКУ</button>
        <button className='secondNavElem' onClick={this.exitButtonHandler.bind(this)}>ВЫХОД</button>
      </div>
    )
  }
  toAddTransactionsHandler(){
    if (this.props.loginResult) {
      this.props.getState();
      this.props.history.push('/send');
    }
  }
  toListButtonHandler(){
    this.props.getState();
    this.props.history.push('/list')
  }
  exitButtonHandler(){
    this.props.userLogout();
    this.props.history.push('/')
  }
}

export default NavBarComponent;
