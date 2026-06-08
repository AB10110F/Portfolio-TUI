import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLanguageContext } from '../app/context/LanguageContext';
import styles from '../css/terminal.module.css'
import { vt323 } from '../fonts/fonts'
import { useCrtContext } from '@/app/context/CrtContext';

const Terminal = () => {

  const { t, tArray, language } = useLanguageContext();
  const { crt } = useCrtContext();
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [slicedText, setSlicedText] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const smallScreen = window.innerWidth <= 760;
  const joinArray = (key: string, sep: string) => tArray(key).join(sep);
  const sep: string = '\n';
  const banner: string = smallScreen ? joinArray("smallBanner", sep) : joinArray("banner", sep);
  const help: string = smallScreen ? joinArray("smallHelp", sep) : joinArray("help", sep);
  const skills: string = smallScreen ? joinArray("smallSkills", sep) : joinArray("skills", sep);
  const quotes: string = joinArray("quotes", sep)
  const speed: number = smallScreen ? 50 : 5

  useEffect(() => {
    animateText('', banner, '');
  }, [language]);

  const animateText = (base: string, textToAppend: string, link?: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOutput(base);
    let i = 0;

    const tick = () => {
      i++;
      setSlicedText(textToAppend.slice(0, i));
      if (i < textToAppend.length) {
        timeoutRef.current = setTimeout(tick, speed);
      }
      else {
        if (link != '') setTimeout(() => { window.open(link, '_blank'); }, 500);

        setOutput(base + textToAppend);
        setSlicedText("");
      }
    };

    timeoutRef.current = setTimeout(tick, speed);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (divRef.current) divRef.current.scrollTop = divRef.current.scrollHeight;

    inputRef.current.focus()
  }, [slicedText]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let textToAppend = "";
      let link = "";
      textToAppend = "@guest from portfolio\n" + "> " + input + "\n\n";
      let openLink = t("opening") + " " + input + "..." + "\n\n";
      switch (input) {
        case "banner":
          textToAppend += banner;
          break;
        case "help":
          textToAppend += help;
          break;
        case "skills":
          textToAppend += skills;
          break;
        case "quotes":
          textToAppend += quotes + "\n\n";
          break;
        case "github":
          textToAppend += openLink
          link = "https://github.com/AB10110F";
          break;
        case "codepen":
          textToAppend += openLink
          link = "https://codepen.io/AB10110F";
          break;
        case "reddit":
          textToAppend += openLink
          link = "https://www.reddit.com/user/AB10110F";
          break;
        case "twitter":
          textToAppend += openLink
          link = "https://twitter.com/AB10110F";
          break;
        case "cls":
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setOutput("");
          setSlicedText("");
          setInput("");
          break;
        default:
          textToAppend = t("errPart1") + " \"" + input + "\" " + t("errPart2") + "\n\n";
      }

      if (!(input == "cls")) animateText(output, textToAppend, link);
      setInput("")
    }
  };

  return (
    <div ref={divRef} className={`${styles.terminal} ${crt ? "bright__border" : ""}`} onClick={() => inputRef.current.focus()}>
      <pre style={vt323.style} className={styles.terminal__history}>
        {output}
        {slicedText}
      </pre>
      <section className={styles.terminal__prompt}>
        <article style={vt323.style}>@guest from portfolio</article>
        <article className={styles.terminal__inputContainer}>
          <p style={vt323.style}>&gt;</p>
          <input
            className={styles.terminal__input}
            ref={inputRef}
            style={vt323.style}
            type="text"
            id='prompt'
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </article>
      </section>
    </div>
  )
};

export default Terminal;
