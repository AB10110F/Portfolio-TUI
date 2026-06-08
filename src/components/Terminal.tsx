import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLanguageContext } from '../app/context/LanguageContext';
import styles from '../css/terminal.module.css'
import { vt323 } from '../fonts/fonts'
import { useCrtContext } from '@/app/context/CrtContext';

const Terminal = () => {

  const { tArray, language } = useLanguageContext();
  const { crt } = useCrtContext();
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [slicedText, setSlicedText] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const banner: string = tArray("banner").join('\n');
  const help: string = tArray("help").join('\n');
  const skills: string = tArray("skills").join('\n');
  const quotes: string = tArray("quotes").join('\n');
  const smallSkills: string = tArray("smallSkills").join('\n');
  const smallBanner: string = tArray("smallBanner").join('\n');
  const smallHelp: string = tArray("smallHelp").join('\n');
  let speed = 5; // ms per character
  if (window.innerWidth <= 760) speed = 50;

  useEffect(() => {
    if (window.innerWidth <= 760) {
      animateText('', smallBanner);
    }
    else {
      animateText('', banner);
    }
  }, [language]);

  const animateText = (base: string, textToAppend: string) => {
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
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
    inputRef.current.focus()
  }, [slicedText]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let textToAppend = "";
      textToAppend = "@guest from portfolio\n" + "> " + input + "\n\n";
      switch (input) {
        case "banner":
          textToAppend += window.innerWidth <= 760 ? smallBanner : banner;
          break;
        case "help":
          textToAppend += window.innerWidth <= 760 ? smallHelp : help;
          break;
        case "skills":
          textToAppend += window.innerWidth <= 760 ? smallSkills : skills;
          break;
        case "quotes":
          textToAppend += quotes + "\n\n";
          break;
        case "github":
          window.open("https://github.com/AB10110F", '_blank');
          break;
        case "codepen":
          window.open("https://codepen.io/AB10110F", '_blank');
          break;
        case "reddit":
          window.open("https://www.reddit.com/user/AB10110F", '_blank');
          break;
        case "twitter":
          window.open("https://twitter.com/AB10110F", '_blank');
          break;
        case "cls":
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setOutput("");
          setSlicedText("");
          setInput("");
          break;
        default:
          textToAppend = language === 'English' ? `x_x Syntax Error "${input}" is not a command\n\n` : `x_x Error de sintaxis "${input}" no es un comando\n\n`;
      }

      if (!(input == "cls")) animateText(output, textToAppend);
      setInput("")
    }
  };

  return (
    <div ref={divRef} className={`${styles.terminal} ${crt ? "bright__border" : ""}`} onClick={() => inputRef.current.focus()}>
      <pre style={vt323.style} className={styles.terminal__history}>
        {output}{slicedText}
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
