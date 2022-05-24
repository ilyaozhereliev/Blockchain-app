import React, { FC, ReactNode } from 'react';

import styles from './Body.module.scss';
// Создание интерфейса и типизация входных параметров
interface BodyProps {
  // type ReactNode - react элемент
  children: ReactNode;
}

export const Body: FC<BodyProps> = ({ children }) => (
  <div className={styles.content}>{children}</div>
);
