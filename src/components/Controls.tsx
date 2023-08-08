import React, { useState } from 'react';
import styles from '../css/controls.module.css';

interface ControlsProps {
  changeState: (newValue: boolean) => void;
}

const Controls: React.FC<ControlsProps> = ({ changeState }) => {
  const [crt, setCrt] = useState(false);

  const handleChange = () => {
    const newValue = !crt;
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
      <label htmlFor="">CRT Controls</label>
    </section>
  );
};

export default Controls;
