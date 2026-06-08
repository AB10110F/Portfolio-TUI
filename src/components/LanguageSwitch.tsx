import styles from '../css/switch.module.css'
import { vt323 } from '../fonts/fonts';
import { useLanguageContext } from '../app/context/LanguageContext';
import dynamic from "next/dynamic";

const LanguageSwitch = () => {
  const { t, language, setLanguage } = useLanguageContext();

  return (
    <section className={styles.languageSwitchContainer}>
      <section className={styles.section}>
        <input
          className={styles.checkbox}
          type="radio"
          name="language"
          id="english"
          checked={language == "English"}
          onChange={() => setLanguage("English")}
        />
        <label style={vt323.style} htmlFor="english" >{t("enButton")}</label>
      </section>
      <section className={styles.section}>
        <input
          className={styles.checkbox}
          type="radio"
          id="spanish"
          name="language"
          checked={language == "Spanish"}
          onChange={() => setLanguage("Spanish")}
        />
        <label style={vt323.style} htmlFor="spanish" >{t("esButton")}</label>
      </section>
    </section>
  )
};

export default dynamic(() => Promise.resolve(LanguageSwitch), { ssr: false })
/* export default LanguageSwitch; */
