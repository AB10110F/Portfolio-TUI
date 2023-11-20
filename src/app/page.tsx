"use client";
import React, {useState} from 'react';
import styles from '../css/page.module.css';
import  Terminal  from '@/components/Terminal';
import Model from '@/components/Model';
import CrtSwitch from '@/components/CrtSwitch';
import { dotFont } from '../fonts/fonts'
import LanguageSwitch from '@/components/LanguageSwitch';
import { useLanguageContext } from './context/language';
import Image from 'next/image';
import dynamic from "next/dynamic";

function Home() {

  const [currentCrt, setCrt] = useState(false)
  const {language, setLanguage} = useLanguageContext();
  const scanlines:string = currentCrt ? styles.scanlines : styles.hidden;
  const scanner:string = currentCrt ? styles.scanner : styles.hidden;
  const text:string = styles.main + " " + (currentCrt ? styles.bright: "");

  let title:string
  if(language == 'English')
  {
      title = 'DUST AND ECHOES'
  }
  else if(language == 'Spanish')
  {
      title = 'POLVO Y ECOS'
  }
  else
  {
      title = ''
  }

  return (
    <main className={text}>
      <span className={scanlines}></span>
      <span className={scanner}></span>
      <header className={styles.header}>
            <h1 style={dotFont.style}>{title}</h1>
      </header>
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

export default dynamic (() => Promise.resolve(Home), {ssr: false})
