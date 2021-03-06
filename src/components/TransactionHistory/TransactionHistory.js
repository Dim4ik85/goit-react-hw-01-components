import React from "react"
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => (
    <table className={s.transactionHistory}>
        <thead>
          <tr className={s.head}>
            <th className={s.headItem}>Type</th>
            <th className={s.headItem}>Amount</th>
            <th className={s.headItem}>Currency</th>
          </tr>
        </thead>
      
        <tbody>
         {items.map(({id,type,amount,currency})=> (   
          <tr key={id}>
            <td className={s.bodyItem}>{type}</td>
            <td className={s.bodyItem}>{amount}</td>
            <td className={s.bodyItem}>{currency}</td>
          </tr>
         ) )} 
        </tbody>
    </table>
    );

    TransactionHistory.propTypes = {
      items:  PropTypes.arrayOf(
          PropTypes.shape({
              id: PropTypes.string.isRequired,
              type: PropTypes.string.isRequired,
              amount: PropTypes.string.isRequired,
              currency: PropTypes.string.isRequired,
          }),
      ),
    };
    
    export default TransactionHistory;