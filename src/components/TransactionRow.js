import React from 'react';

const TransactionRow = ({transactionInfo, deleteTransaction,bankName}) => (
  <div className='tableRow'>
    <div className='headerNumber'>{transactionInfo.transactionId}</div>
    <div className='headerTransaction'>{transactionInfo.sum}</div>
    <div className='headerTransaction'>{bankName}</div>
    <button className='deleteButton' onClick={() => {
        deleteTransaction(transactionInfo.transactionId, transactionInfo.sum, transactionInfo.bankId);
      }}>удалить</button>
  </div>
)

export default TransactionRow;
