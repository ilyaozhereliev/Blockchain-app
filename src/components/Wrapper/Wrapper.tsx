import React, { FC, ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Wrapper.module.css';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <div className={styles.tabs}>
          <Link className={styles.tabs__item} to="/converter">
            Конвертер
          </Link>

          <Link className={styles.tabs__item} to="/">
            Личный кабнет
          </Link>
        </div>
        <div className={styles.content}>some content</div>
      </div>
    </div>
  );
};
