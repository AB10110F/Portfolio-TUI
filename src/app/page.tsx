"use client";
import styles from '../css/page.module.css';
import Terminal from '@/components/Terminal';
import Model from '@/components/Model';
import CrtSwitch from '@/components/CrtSwitch';
import Visualizer from '@/components/Visualizer';
import LanguageSwitch from '@/components/LanguageSwitch';
import { useCrtContext } from '../app/context/CrtContext';
import dynamic from "next/dynamic";

function Home() {
  const { crt } = useCrtContext();
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Terminal />
        <aside className={styles.aside}>
          <section className={`${styles.languageContainer} ${crt ? "bright__border" : ""}`}>
            <article className={styles.canvas}>
              <Model />
            </article>
            <LanguageSwitch />
          </section>
          <article className={`${styles.bars} ${crt ? "bright__border" : ""}`}>
            <Visualizer />
          </article>
          <article className={`${styles.crtSwitch} ${crt ? "bright__border" : ""}`}>
            <CrtSwitch />
          </article>
        </aside>
      </div>
    </main>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })
