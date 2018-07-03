import React,{Component} from 'react';
import NavBar from 'containers/NavBar';
import {addTransactionAction} from 'actions/transactionActions';



class AddBoardComponent extends Component{
  constructor(props){
    super(props);
  }
  render(){

    let {history, banksList} = this.props;
    return(
      <div className='sendContainer'>
          <NavBar history={history}/>
           <form className='sendRow' onSubmit={this.addTransactionHandler.bind(this)}>
              <input type='number' placeholder='Сумма' onChange={this.getSum.bind(this)}/>
              <select onChange={this.bankSelectHandler.bind(this)}>
                <option>Название банка</option>
                {
                  banksList.map((item, index) => <option key={index} value={item.bankId}>{item.bankName}</option>)
                }
              </select>
              <button>Отправить</button>
            </form>
        </div>
     )
   }
   getSum(e){
     this.sum = e.target.value;
   }

   bankSelectHandler(e){
     this.bank = e.target.value;
   }

   addTransactionHandler(e){
    e.preventDefault();
    this.props.dispatch(addTransactionAction(this.sum, this.bank));
  }
}

export default AddBoardComponent;
