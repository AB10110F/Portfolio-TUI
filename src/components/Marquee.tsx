'use client';
import { useLanguageContext } from '../app/context/language';
import styles from '../css/marquee.module.css';
import { dotFont } from '../fonts/fonts';
import dynamic from "next/dynamic";

const Marquee = () => {

  const { language } = useLanguageContext();

  let title: string = '';
  if (language == 'English') {
    title = 'DUST AND ECHOES'
  }
  else if (language == 'Spanish') {
    title = 'POLVO Y ECOS'
  }

  return (
    <>
      <header className={styles.header}>
        <h1 style={dotFont.style}>{title}</h1>
      </header>
    </>
  );
};

export default dynamic(() => Promise.resolve(Marquee), { ssr: false })
