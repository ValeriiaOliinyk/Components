import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsInfo.module.css';

const TransactionInfo = ({ type, amount, currency }) => (
  <>
    <td className={styles.cell}>{type}</td>
    <td className={styles.cell}>{amount}</td>
    <td className={styles.cell}>{currency}</td>
  </>
);

TransactionInfo.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionInfo;
