import '@/css/globals.css';
import Dots from '@/components/Dots';
import {Metadata} from 'next';

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
      <body>
      <Dots/>
        {children}
      </body>
    </html>
  )
}
