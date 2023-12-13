"use client";
import styles from '../css/page.module.css';
import  Terminal  from '@/components/Terminal';
import Model from '@/components/Model';
import CrtSwitch from '@/components/CrtSwitch';
import Visualizer from '@/components/Visualizer';
import LanguageSwitch from '@/components/LanguageSwitch';
import dynamic from "next/dynamic";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
            <Terminal/>
            <aside className={styles.aside}>
                <section className ={styles.languageContainer}>
                    <article className={styles.canvas}>
                        <Model/>
                    </article>
                    <LanguageSwitch/>
                </section>
                <article className={styles.bars}>
                    <Visualizer/>
                </article>
                <article className={styles.crtSwitch}>
                    <CrtSwitch/>
                </article>
            </aside>
      </div>
    </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
