"use client";
import React, {useState} from 'react';
import styles from '../css/page.module.css';
import  Terminal  from '@/components/Terminal';
import Typewriter from '@/components/Typewriter';
import Model from '@/components/Model';
import Controls from '@/components/Controls';
import Image from 'next/image'

export default function Home() {

  const [currentCrt, setCrt] = useState(false)
  let scanlines:string = currentCrt ? styles.scanlines : styles.hidden;
  let scanner:string = currentCrt ? styles.scanner : styles.hidden;
  let bright:string = currentCrt ? styles.bright : styles.main;


  return (
    <main className={bright}>
      <span className={scanner}></span>
      <Image src="/scanlines.jpg" width={500} height={500} className={scanlines} alt="image" />
      <Typewriter text={'Front-End Developer'}/>
      <div className={styles.grid}>
            <Terminal/>
            <section className={styles.column}>
                <article className={styles.canvas}>
                    <Model/>
                </article>
                <article className={styles.bars}></article>
                <article className={styles.controls}>
                    <Controls changeState={(currentCrt) => setCrt(currentCrt)} />
                </article>
            </section>
      </div>
    </main>
  )
}
