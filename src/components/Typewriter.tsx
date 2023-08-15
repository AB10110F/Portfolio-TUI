import React, {useState, useEffect, useRef} from 'react';
import { dotFont } from '../fonts/fonts'

const Typewriter = ({ text }: { text:string }) => {
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        index.current = 0;
        setCurrentText('');
    }, [text]);
    
    useEffect(() => {
        if (index.current < text.length) 
        {
            const nextChar: string = text.charAt(index.current);
            const timer = setTimeout(() => {
              setCurrentText(val => val + nextChar);
              index.current++;
            }, 80);
      
            return () => clearTimeout(timer);
        }
    }, [currentText, text]);

    return <h1 style={dotFont.style} >&gt;{currentText}</h1>
};

export default Typewriter;
