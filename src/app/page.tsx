"use client";
import React, {useState} from 'react';
import styles from '../css/page.module.css';
import  Terminal  from '@/components/Terminal';
import Typewriter from '@/components/Typewriter';
import Model from '@/components/Model';
import CrtSwitch from '@/components/CrtSwitch';
import LanguageSwitch from '@/components/LanguageSwitch';
import { useLanguageContext } from './context/language';
import Image from 'next/image';

export default function Home() {

  const [currentCrt, setCrt] = useState(false)
  const {language, setLanguage} = useLanguageContext();
  const scanlines:string = currentCrt ? styles.scanlines : styles.hidden;
  const scanner:string = currentCrt ? styles.scanner : styles.hidden;
  const text:string = styles.main + " " + (currentCrt ? styles.bright: "");

  let title:string
  if(language == 'English')
  {
      title = 'Front-End Developer'
  }
  else if(language == 'Spanish')
  {
      title = 'Desarrollador Front-End'
  }
  else
  {
      title = ''
  }

  return (
    <main className={text}>
      <span className={scanner}></span>
      <Image src="/scanlines.jpg" width={500} height={500} className={scanlines} alt="image" />
      <Typewriter text={title}/>
      <div className={styles.grid}>
            <Terminal/>
            <aside className={styles.aside}>
                <section className ={styles.languageContainer}>
                    <article className={styles.canvas}>
                        <Model/>
                    </article>
                    <LanguageSwitch/>
                </section>
                <article className={styles.bars}></article>
                <article className={styles.crtSwitch}>
                    <CrtSwitch changeState={(currentCrt) => setCrt(currentCrt)} />
                </article>
            </aside>
      </div>
    </main>
  )
}