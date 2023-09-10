import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.progress}>
      <div className={styles.inner}></div>
      <br />
      <br />
    </div>
  );
};

export default Loading;
