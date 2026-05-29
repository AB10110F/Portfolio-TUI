'use client';
import { useLanguageContext } from '../app/context/language';
import { useState, useRef, useEffect } from 'react'
import styles from '../css/marquee.module.css';
import { dotFont } from '../fonts/fonts';
import dynamic from "next/dynamic";

const Marquee = () => {
  const { language } = useLanguageContext();
  let quotes: string[] = [];

  if (language == 'English') {
    quotes = [
      "Just Dust and Echoes",
      "Were it so easy",
      "Slipspace rupture detected",
      "She's been expecting you",
      "Last time you asked me \"If it were my choice, would I do it?\"",
      "I...? I... am a monument... to all your sins",
      "Lies for the weak! Beacons for the deluded!",
      "Child of my enemy, why have you come? I offer no forgiveness, a father's sins, passed to his son",
      "If only there were a god to pray to",
      "This is a land of monstrosities and I am no exception",
      "Can't even die right",
      "Fear not the dark my friend. And let the feast begin",
      "What, still here?",
      "Ah, you ignorant slaves. Finally taken notice, have you?",
      "Let them grant death",
      "I may be but small, but I will die a colossus",
      "Return from whence thou cam'st For that is thy place of belonging",
      "ACHTUNG, ACHTUNG",
      "Things have learnt to walk which ought to crawl",
      "I wear no mask",
      "None of us are here by choice",
      "Are you still looking for answers where there are only questions?",
      "THIS GOD WON'T FORGIVE YOU",
      "She'll never dance with us again",
      "Fear Sells",
      "Fear brought me this far",
      "Monsters that Speak",
      "I curse you forever in name. I bless you forever in death",
      "And thus shall your name be erased under the heavens",
      "Not while their voices still echo... Not while your silence still endures...",
      "All hope abandon, ye who enter here",
      "The devil is not as black as he is painted",
      "2 8 6 9 9 5 6 8 7 9",
    ]
  }
  else if (language == 'Spanish') {
    quotes = [
      "Solo Polvo y Ecos",
      "Si fuese tan fácil",
      "Brecha desliespacial detectada",
      "Los ha estado esperando",
      "La última vez me preguntaste \"¿Lo haría, si fuese mi decisión?\"",
      "¿Yo...? Yo... soy un monumento... a todos tus pecados",
      "¡Mentiras para los débiles! ¡Faros para los desorientados!",
      "Hijo de mi enemigo, ¿Por qué viniste? No ofrezco perdón, los pecados del padre pasan a su hijo",
      "Si tan solo hubiese un dios al cual rezar",
      "Esta es una tierra de monstruosidades y yo no soy la excepción",
      "Ni siquiera puedo morir bien",
      "No temas a la obscuridad mi amigo, y demos comienzo al festín",
      "¿Qué, aún aqui?",
      "Ah, esclavos ignorantes. Por fin se dieron cuenta ¿no?",
      "Que conceda la muerte",
      "Puede que sea pequeño, pero moriré como un coloso",
      "Vuelve al lugar de donde viniste, pues ese es el lugar al que perteneces",
      "ACHTUNG, ACHTUNG",
      "Cosas han aprendido a caminar, cosas que deberían arrastrarse",
      "No porto ninguna mascara",
      "Ninguno de nosotros esta aquí por voluntad",
      "¿Sigues buscando respuestas donde solo llacen preguntas?",
      "ESTE DIOS NO TE VA A PERDONAR",
      "Ella nunca volverá a bailar con nosotros",
      "El miedo vende",
      "El miedo me ha traído hasta aqui",
      "Monstruos que hablan",
      "Por siempre os maldigo en el nombre. Por siempre os bendigo en la muerte",
      "Y así sea borrado vuestro nombre bajo los cielos",
      "No mientras sus voces retumben... No mientras tu silencio perdure",
      "Abandonad toda esperanza, quienes aquí entráis",
      "El diablo no es tan negro como lo pintan",
      "2 8 6 9 9 5 6 8 7 9",
    ]
  }

  let index = Math.floor(Math.random() * quotes.length);
  const initialQuote = quotes[index];
  const [text, setText] = useState(initialQuote);
  const [length, setLength] = useState((initialQuote.length * 0.5).toString());

  return (
    <>
      <header className={styles.header} style={{ '--transition-duration': length + 's' } as React.CSSProperties}>
        <h1
          key={text}
          style={dotFont.style}
          onAnimationIteration={() => {
            index = Math.floor(Math.random() * quotes.length);
            setText(quotes[index]);
            setLength((quotes[index].length * 0.5).toString());
          }} >{text}</h1>
      </header>
    </>
  );
};

export default dynamic(() => Promise.resolve(Marquee), { ssr: false })
