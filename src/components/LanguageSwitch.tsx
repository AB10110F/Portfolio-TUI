import React, {useState, useEffect, useRef} from 'react';
import styles from '../css/switch.module.css'
import { vt323 } from '../fonts/fonts';
import { useLanguageContext } from '../app/context/language';

const Typewriter = () => {
    const {language, setLanguage} = useLanguageContext();

    let l1:string
    let l2:string

    if(language == 'English')
    {
        l1 = 'ENGLISH'
        l2 = 'SPANISH'
    }
    else if(language == 'Spanish')
    {
        l1 = 'INGLÉS'
        l2 = 'ESPAÑOL'
    }
    else
    {
        l1 = ''
        l2 = ''
    }

    const changeState = (language:string) => {
        setLanguage(language);
      };
      console.log(language) //TODO delete this line
    
    return (
        <section className={styles.languageSwitchContainer}>
            <section className={styles.section}>
                <input
                    className={styles.checkbox}
                    type="radio"
                    name='language'
                    onClick={() => changeState('English')}
                    />
                <label style={vt323.style} htmlFor="">{l1}</label>
            </section>
            <section className={styles.section}>
                <input
                    className={styles.checkbox}
                    type="radio"
                    id='language'
                    name='language'
                    onClick={() => changeState('Spanish')}
                />
                <label style={vt323.style} htmlFor="language" id='label'>{l2}</label>
            </section>
        </section>
    )
};

export default Typewriter;
