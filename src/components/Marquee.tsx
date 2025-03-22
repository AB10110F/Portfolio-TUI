'use client';
import { useLanguageContext } from '../app/context/language';
import { useState, useRef, useEffect } from 'react'
import styles from '../css/marquee.module.css';
import { dotFont } from '../fonts/fonts';
import dynamic from "next/dynamic";

const Marquee = () => {
  const { language } = useLanguageContext();
  const [text, setText] = useState("Visible");
  const ref = useRef<HTMLDivElement | null>(null);
  let quotes: string[] = [];

  if (language == 'English') {
    quotes = [
      "Just Dust and Echoes",
      "Were it so easy",
      "Slipspace rupture detected",
      "She's been expecting you",
      "This is a land of monstrosities and I am no exception",
      "Can't even die right",
      "Fear not the dark my friend. And let the feast begin",
      "What, still here?",
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
    ]
  }
  else if (language == 'Spanish') {
    quotes = [
      "Solo Polvo y Ecos",
      "Si fuese tan fácil",
      "Brecha desliespacial detectada",
      "Los ha estado esperando",
      "Esta es una tierra de monstruosidades y yo no soy la excepción",
      "Ni siquiera puedo morir bien",
      "No temas a la obscuridad mi amigo, y demos comienzo al festín",
      "¿Qué, aún aqui?",
      "ACHTUNG, ACHTUNG",
      "Cosas han aprendido a caminar, cosas que deberían arrastrarse",
      "No porto ninguna mascara",
      "Ninguno de nosotros esta aquí por voluntad",
      "¿Sigues buscando por respuestas donde solo llacen preguntas?",
      "ESTE DIOS NO TE VA A PERDONAR",
      "Ella nunca volverá a bailar con nosotros",
      "El miedo vende",
      "El miedo me trajo hasta aqui",
      "Monstruos que hablan",
    ]
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          let index = Math.floor(Math.random() * 17);
          setText(quotes[index]);
        }
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [language]);

  return (
    <>
      <header className={styles.header}>
        <h1 ref={ref} style={dotFont.style}>{text}</h1>
      </header>
    </>
  );
};

export default dynamic(() => Promise.resolve(Marquee), { ssr: false })
