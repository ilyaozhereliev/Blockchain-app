import React from 'react';
import styles from './Wrapper.module.css';

export const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.tabs}>
          <div className={styles.tabs__item}>1</div>
          <div className={styles.tabs__item}>2</div>
        </div>
      </div>
    </div>
  );
};
