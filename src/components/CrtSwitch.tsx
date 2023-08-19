import React, { useState } from 'react';
import styles from '../css/switch.module.css';
import { vt323 } from '../fonts/fonts';
import { useLanguageContext } from '../app/context/language';

interface CrtProps {
  changeState: (newValue: boolean) => void;
}

const CrtSwtich: React.FC<CrtProps> = ({ changeState }) => {
  const [crt, setCrt] = useState(false);
  const {language, setLanguage} = useLanguageContext();

  const handleChange = () => {
    const newValue:boolean = !crt;
    setCrt(newValue);
    changeState(newValue);
  };

  let label:string;

  if(language == 'English')
  {
      label = 'CRT EFFECT'
  }
  else if(language == 'Spanish')
  {
      label = 'EFECTO CRT'
  }
  else
  {
      label = ''
  }

  return (
    <section className={styles.container}>
      <input
        className={styles.checkbox}
        id='crtSwitch'
        type="checkbox"
        checked={crt}
        onChange={handleChange}
      />
      <label style={vt323.style} htmlFor="crtSwitch">{label}</label>
    </section>
  );
};

export default CrtSwtich;