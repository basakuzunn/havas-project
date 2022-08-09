import React from 'react';
import styles from './Backdrop.module.css';

type Props = {};

export default function Backdrop({}: Props) {
  return <div className={styles['backdrop']}>back</div>;
}
