import React from 'react';
// import './Button1.css';
import styles from './PostButton1.module.css';

export default function Button1() {
  return (
    <div>
      <div className={styles.pic}>a</div>
      <button className={styles.button}>버튼1</button>
    </div>
  );
}
