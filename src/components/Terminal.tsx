import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLanguageContext } from '../app/context/LanguageContext';
import styles from '../css/terminal.module.css'
import { vt323 } from '../fonts/fonts'

const Terminal = () => {

  const { tArray, language } = useLanguageContext();

  let banner: string[] = tArray("banner");
  let help: string[] = tArray("help");
  let skills: string[] = tArray("skills");
  let smallSkills: string[] = tArray("smallSkills");
  let smallBanner: string[] = tArray("smallBanner");
  let smallHelp: string[] = tArray("smallHelp");

  let start: string[];
  if (window.innerWidth <= 760) {
    start = smallBanner;
  }
  else {
    start = banner;
  }

  const preRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(start.join('\n'));
  let newOutput = "";

  useEffect(() => {
    if (preRef.current) {
      preRef.current.scrollTop = preRef.current.scrollHeight;
    }

    inputRef.current.focus()
  }, [output]);

  useEffect(() => {
    window.innerWidth <= 760 ? newOutput += smallBanner.join('\n') : newOutput += banner.join('\n');
    setOutput(newOutput);
  }, [language]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      newOutput = output + "@guest from portfolio\n" + "> " + input + "\n\n";
      switch (input) {
        case "banner":
          window.innerWidth <= 760 ? newOutput += smallBanner.join('\n') : newOutput += banner.join('\n');
          break;
        case "help":
          window.innerWidth <= 760 ? newOutput += smallHelp.join('\n') : newOutput += help.join('\n');
          break;
        case "skills":
          window.innerWidth <= 760 ? newOutput += smallSkills.join('\n') : newOutput += skills.join('\n');
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
          newOutput = "";
          break;
        default:
          language == 'English' ? newOutput += "x_x Syntax Error \"" + input + "\" is not a command\n\n" : newOutput += "x_x Error de sintaxis \"" + input + "\" no es un comando\n\n";
      }
      setOutput(newOutput)
      setInput("")
    }
  };

  return (
    <div ref={preRef} className={styles.terminal} onClick={e => inputRef.current.focus()}>
      <pre style={vt323.style} className={styles.terminal__history}>{output}</pre>
      <section className={styles.terminal__prompt}>
        <article style={vt323.style}>@guest from portfolio</article>
        <article className={styles.terminal__inputRow}>
          <p style={vt323.style}>&gt;</p>
          <input
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

export default Terminal
