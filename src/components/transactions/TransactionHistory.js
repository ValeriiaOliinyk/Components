import React from 'react';
import PropTypes from 'prop-types';
import TransactionInfo from './TransactionInfo';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.main}>
        <th className={styles.title}>Type</th>
        <th className={styles.title}>Amount</th>
        <th className={styles.title}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr className={styles.row} key={item.id}>
          <TransactionInfo
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
