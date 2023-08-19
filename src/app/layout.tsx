import '@/css/globals.css';
import Dots from '@/components/Dots';
import {Metadata} from 'next';
import { LanguageContextProvider } from './context/language'
import Favicon from './favicon.png';

export const metadata: Metadata = {
  title: 'AB10110F',
  description: 'Portfolio',
  icons: [
    { rel: 'icon', url: Favicon.src, }
  ],
  openGraph: {
    ...Favicon,
    title: 'AB10110F-Personal Website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageContextProvider>
          <Dots/>
          {children}
        </LanguageContextProvider>
      </body>
    </html>
  )
}