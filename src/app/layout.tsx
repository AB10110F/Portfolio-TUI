import '@/css/globals.css';
import { Inter } from 'next/font/google';
import Dots from '@/components/Dots';
import {Metadata} from 'next';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AB10110F',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Dots/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
