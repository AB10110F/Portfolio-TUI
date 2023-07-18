import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import  Terminal  from '@/components/Terminal'
import localFont from 'next/font/local'

const dotFont = localFont({ src: './e-dot-digital-7.ttf' })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={dotFont.className}>Front-End Developer</h1>
      <Terminal/>
    </main>
  )
}
