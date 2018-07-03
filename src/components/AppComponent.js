import React,{Component} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import {PrivateRoute} from 'components/PrivateRoute'
import UserLogin from 'containers/UserLogin';
import AddBoard from 'containers/AddBoard';
import TransactionsTable from 'containers/TransactionsTable';

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
      return(
        <HashRouter>
          <Switch>
            <Route exact path='/' component={UserLogin}/>
            <PrivateRoute exact path='/send' login={this.props.loginResult} component={AddBoard}/>
            <PrivateRoute exact path='/list' login={this.props.loginResult} component={TransactionsTable}/>
          </Switch>
        </HashRouter>
      )
    }

    componentWillUnmount(){
      axios({
        method: 'post',
        url: 'http://localhost:1337/sendLogin',
        data: JSON.stringify({loginResult:false})
      });
    }
  }

  export default App;
