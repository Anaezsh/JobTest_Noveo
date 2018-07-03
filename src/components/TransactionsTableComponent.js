import React,{Component} from 'react';
import TransactionRow from 'components/TransactionRow';
import TransactionsListHeader from 'components/TransactionsListHeader';
import NavBar from 'containers/NavBar';

class TransactionsTableComponent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let banksList = this.props.banksList;
    let transactionsList = this.props.transactionsList;
    return (
      <div className='sendContainer'>
        <NavBar history={this.props.history}/>
        <div className='table'>
          <TransactionsListHeader/>
           {
            transactionsList.map((item, index) => {
              return (<TransactionRow key={index}
                transactionInfo={item}
                bankName={this.getBankName(banksList,item.bankId)}
                deleteTransaction={this.props.deleteTransaction}/>)
            })
          }
        </div>
      </div>)
  }

  getBankName(banksList, bankId){
    for (var i = 0; i < banksList.length; i++) {
      if (banksList[i].bankId == bankId) {
           return banksList[i].bankName;
      }
    }
  }
  componentDidMount() {
    this.props.getState();
  }
}



export default TransactionsTableComponent;
