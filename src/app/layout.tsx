import '@/css/globals.css';
import Dots from '@/components/Dots';
import Marquee from '@/components/Marquee';
import { Metadata } from 'next';
import { LanguageContextProvider } from './context/LanguageContext'
import { CrtContextProvider } from './context/CrtContext';
import Favicon from './favicon.png';

export const metadata: Metadata = {
  title: 'AB10110F',
  description: 'Portfolio',
  keywords: ['portfolio', 'developer', 'web developer', 'next.js'],
  icons: [
    { rel: 'icon', url: Favicon.src, }
  ],
  openGraph: {
    title: 'AB10110F',
    description: 'Personal website'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" translate='no'>
      <body>
        <LanguageContextProvider>
          <CrtContextProvider>
            <Marquee />
            <Dots />
            {children}
          </CrtContextProvider>
        </LanguageContextProvider>
      </body>
    </html>
  )
}
