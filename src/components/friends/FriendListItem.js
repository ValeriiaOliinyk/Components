import React from 'react';
import PropTypes from 'prop-types';
import defaultImag from '../profile/no_icon.png';
import styles from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const className = [isOnline ? styles.online : styles.offline];

  return (
    <>
      <span className={className}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="70" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendsListItem.defaultProps = {
  avatar: defaultImag,
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
