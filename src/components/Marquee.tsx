'use client';
import { useLanguageContext } from '../app/context/LanguageContext';
import { useCrtContext } from '@/app/context/CrtContext';
import { useState } from 'react'
import styles from '../css/marquee.module.css';
import { dotFont } from '../fonts/fonts';
import dynamic from "next/dynamic";

const Marquee = () => {
  const { tArray } = useLanguageContext();
  let quotes: string[] = tArray("quotes");
  const { crt } = useCrtContext();

  let index = Math.floor(Math.random() * quotes.length);
  const initialQuote = quotes[index];
  const [quote, setQuote] = useState(initialQuote);
  const [speed, setSpeed] = useState((initialQuote.length * 0.5).toString());
  const [checkQuotes, setCheckQuotes] = useState<string[]>([initialQuote])

  return (
    <header className={`${styles.header} ${crt ? "bright__border" : ""}`} style={{ '--transition-duration': speed + 's' } as React.CSSProperties}>
      <h1
        key={quote}
        style={dotFont.style}
        onAnimationIteration={() => {
          setCheckQuotes(prev => {
            const current = prev.length == quotes.length ? [prev[prev.length - 1]] : prev;

            while (current.includes(quotes[index])) {
              index = Math.floor(Math.random() * quotes.length);
            }

            setQuote(quotes[index]);
            setSpeed((quotes[index].length * 0.5).toString());
            return [...current, quotes[index]];
          });

        }} >{quote}</h1>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Marquee), { ssr: false })
