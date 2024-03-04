import React, { useState } from 'react';
import styles from '../css/switch.module.css';
import { vt323 } from '../fonts/fonts';
import { useLanguageContext } from '../app/context/language';

const CrtSwtich = () => {
  const [crt, setCrt] = useState(false);
  const { language } = useLanguageContext();

  const scanlines: string = crt ? styles.scanlines : styles.hidden;
  const scanner: string = crt ? styles.scanner : styles.hidden;

  if (crt == true) {
    document.body.classList.add("bright");
  }
  else {
    document.body.classList.remove("bright")
  }

  let label: string = '';
  if (language == 'English') {
    label = 'CRT EFFECT'
  }
  else if (language == 'Spanish') {
    label = 'EFECTO CRT'
  }

  return (
    <section className={styles.container}>
      <span className={scanlines}></span>
      <span className={scanner}></span>
      <input
        className={styles.checkbox}
        id='crtSwitch'
        type="checkbox"
        checked={crt}
        onChange={() => setCrt(!crt)}
      />
      <label style={vt323.style} htmlFor="crtSwitch">{label}</label>
    </section>
  );
};

export default CrtSwtich;
