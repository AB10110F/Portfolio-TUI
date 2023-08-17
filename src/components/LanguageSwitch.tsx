import styles from '../css/switch.module.css'
import { vt323 } from '../fonts/fonts';
import { useLanguageContext } from '../app/context/language';

const LanguageSwitch = () => {
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
    
    return (
        <section className={styles.languageSwitchContainer}>
            <section className={styles.section}>
                <input
                    className={styles.checkbox}
                    type="radio"
                    name='language'
                    id="english"
                    checked={language=='English'}
                    onChange={() => changeState('English')}
                    />
                <label style={vt323.style} htmlFor="english" >{l1}</label>
            </section>
            <section className={styles.section}>
                <input
                    className={styles.checkbox}
                    type="radio"
                    id='spanish'
                    name='language'
                    checked={language=='Spanish'}
                    onChange={() => changeState('Spanish')}
                />
                <label style={vt323.style} htmlFor="spanish" >{l2}</label>
            </section>
        </section>
    )
};

export default LanguageSwitch;