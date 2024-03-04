import { VT323 } from '@next/font/google';
import localFont from 'next/font/local';


const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--vt323',
})

const dotFont = localFont({
  src: '../app/e-dot-digital-7.ttf',
  variable: '--dotFont',
})

export { vt323, dotFont }
