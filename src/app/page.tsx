import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import  Terminal  from '@/components/Terminal'
import Typewriter from '@/components/Typewriter'
import localFont from 'next/font/local'

const dotFont = localFont({ src: './e-dot-digital-7.ttf' })

export default function Home() {
  return (
    <main className={styles.main}>
      <Typewriter text={'  Front-End Developer'}/> {/* TODO What is wrong with the position 1? */}
      <Terminal/>
    </main>
  )
}
