import React, {useState, useEffect, useRef} from 'react';
import localFont from 'next/font/local';
import styles from '../css/controls.module.css';

const dotFont = localFont({ src: '../app/e-dot-digital-7.ttf' })

const Controls = () => {

    return (
      <section className={styles.container}>
          <input className={styles.checkbox} type="checkbox" />
          <input className={styles.checkbox} type="checkbox" />
          <input className={styles.checkbox} type="checkbox" />
      </section>
    )
};

export default Controls;
