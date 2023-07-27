"use client";
import styles from '../css/page.module.css';
import  Terminal  from '@/components/Terminal';
import Typewriter from '@/components/Typewriter';
import Model from '@/components/Model';
import Controls from '@/components/Controls'
import localFont from 'next/font/local';

const dotFont = localFont({ src: './e-dot-digital-7.ttf' })

export default function Home() {
  return (
    <main className={styles.main}>
      <Typewriter text={'  Front-End Developer'}/> {/* TODO What is wrong with the position 1? */}
      <div className={styles.grid}>
            <Terminal/>
            <section className={styles.column}>
                <article className={styles.canvas}>
                    <Model/>
                </article>
                <article className={styles.bars}></article>
                <article className={styles.controls}>
                    <Controls/>
                </article>
            </section>
      </div>
    </main>
  )
}
