import React, {useState, useEffect, useRef} from 'react';
import { dotFont } from '../fonts/fonts'

const Typewriter = ({ text }: { text:string }) => {
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setCurrentText((value) => value + text.charAt(index.current));
            index.current++;
        }, 80);
    }, [currentText]);

    return <h1 style={dotFont.style} >&gt;{currentText}</h1>
};

export default Typewriter;
