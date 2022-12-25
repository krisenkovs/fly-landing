import styles from './styles..module.css';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ href: string }>;

export function Link({ children, href }: Props) {
  return (
    <a href={href} className={styles.container}>
      {children}
    </a>
  );
}
