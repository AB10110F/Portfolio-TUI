import React, {useState, useEffect, useRef} from 'react';
import localFont from 'next/font/local';

const dotFont = localFont({ src: '../app/e-dot-digital-7.ttf' })

const Typewriter = ({ text }: { text:string }) => {
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setCurrentText((value) => value + text.charAt(index.current));
            index.current++;
        }, 80);
    }, [currentText]);

    return <h1 className={dotFont.className}>&gt;{currentText}</h1>
};

export default Typewriter;
