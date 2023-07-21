import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import  Terminal  from '@/components/Terminal'
import Typewriter from '@/components/Typewriter'
import Model from '@/components/Model'
import localFont from 'next/font/local'
import { ChevronRight, X, Minus, Square } from 'lucide-react';

const dotFont = localFont({ src: './e-dot-digital-7.ttf' })

export default function Home() {
  return (
    <main className={styles.main}>
      <Typewriter text={'  Front-End Developer'}/> {/* TODO What is wrong with the position 1? */}
        <div className={styles.home}>
            <Terminal/>
            <div className={styles.canvasContainer}>
                <section className={styles.windowOptions}>
                    <article>
                        <Minus />
                        <Square />
                        <X />
                    </article>
                </section>
                <section className={styles.canvasContent}>
                    <Model/>
                </section>    
            </div>
        </div>
      <h1 className={dotFont.className}>Projects</h1>
      <div className={styles.projects}>
          <div className={styles.windowContainer}>
              <section className={styles.windowOptions}>
                  <article>
                      <Minus />
                      <Square />
                      <X />
                  </article>
              </section>
              <section className={styles.windowContent}>404</section>
          </div>
          <div className={styles.windowContainer}>
              <section className={styles.windowOptions}>
                  <article>
                      <Minus />
                      <Square />
                      <X />
                  </article>
              </section>
              <section className={styles.windowContent}>404</section>
          </div>
          <div className={styles.windowContainer}>
              <section className={styles.windowOptions}>
                  <article>
                      <Minus />
                      <Square />
                      <X />
                  </article>
              </section>
              <section className={styles.windowContent}>404</section>
          </div>
      </div>
      <h1 className={dotFont.className}>Social Media</h1>
    </main>
  )
}
