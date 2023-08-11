import React, { useState } from 'react';
import styles from '../css/controls.module.css';
import { vt323 } from '../fonts/fonts'

interface ControlsProps {
  changeState: (newValue: boolean) => void;
}

const Controls: React.FC<ControlsProps> = ({ changeState }) => {
  const [crt, setCrt] = useState(false);

  const handleChange = () => {
    const newValue:boolean = !crt;
    setCrt(newValue);
    changeState(newValue);
  };

  return (
    <section className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={crt}
        onChange={handleChange}
      />
      <label style={vt323.style} htmlFor="">CRT EFFECT</label>
    </section>
  );
};

export default Controls;
