import styles from '../css/switch.module.css';
import { vt323 } from '../fonts/fonts';
import { useLanguageContext } from '../app/context/LanguageContext';
import { useCrtContext } from '../app/context/CrtContext';

const CrtSwtich = () => {
  const { t } = useLanguageContext();
  const { crt, setCrt } = useCrtContext();

  return (
    <section className={styles.container}>
      <input
        className={styles.checkbox}
        id='crtSwitch'
        type="checkbox"
        checked={crt}
        onChange={() => setCrt(!crt)}
      />
      <label style={vt323.style} htmlFor="crtSwitch">{t("crtButton")}</label>
    </section>
  );
};

export default CrtSwtich;
