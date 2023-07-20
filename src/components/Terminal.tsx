"use client"
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from '../css/terminal.module.css'
import { ChevronRight, X, Minus, Square } from 'lucide-react';


const Terminal = () => {

    
    const banner = [
        "██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗ ",
        "██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝ ",
        "██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  ",
        "██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  ",
        "╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗ ",
        " ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝",
        "",
        "You can also check my social media:",
        "",
        "GitHub                   CodePen",
        "Twitter                  Reddit",
        "",
        "Type \"help\" to view the available commands"       
    ]

    const help = [
        "This is the list of commands you can use: \n",
        "banner          Displays the initial greeting",
        "help            As you can see it shows a list of commands",
        "skills          Displays the technologies I'm able to use",
        "info            Shows all the information of the project",
        "cls             Clears the content of the terminal",
    ]

    const skills = [
        "CSS    [██████████████████▁▁▁▁▁▁]         C++    [████████████████████▁▁▁▁]",
        "",
        "TS     [█████████████▁▁▁▁▁▁▁▁▁▁]         PHP    [██████████████▁▁▁▁▁▁▁▁▁]",
        "",
        "React  [███████████▁▁▁▁▁▁▁▁▁▁▁▁]         Git    [██████████████████▁▁▁▁▁▁]",

    ]

    const info = [
        "888b    | 888~~  Y88b    / ~~~888~~~", 
        "|Y88b   | 888___  Y88b  /     888   ",
        "| Y88b  | 888      Y88b/      888   ", 
        "|  Y88b | 888      /Y88b      888   ", 
        "|   Y88b| 888     /  Y88b     888   ", 
        "|    Y888 888___ /    Y88b    888   ",
        "",        
        "This project was built with Next.js 13",
        "The icons I used are the lucide-icons"
    ]

    const preRef = useRef<HTMLDivElement>(null);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState(banner.join('\n'));

    useEffect(() => {
        if (preRef.current) {
          preRef.current.scrollTop = preRef.current.scrollHeight;
        }
    }, [output]);
    
    return (
        <div className={styles.windowContainer}>
            <section className={styles.windowOptions}>
                <article>
                    <Minus />
                    <Square />
                    <X />
                </article>
            </section>
            <div  ref={preRef} className={styles.terminal}>
                {<pre className={styles.history}>{output}</pre>}
                {/* <pre style={{ color: 'green' }}>{output}</pre>*/}
                <section className={styles.prompt}>
                    <article>@guest from portfolio</article>
                    <article className={styles.promptDown}>
                        <ChevronRight />
                        <input 
                            type="text" 
                            value={input} 
                            onChange={e=>setInput(e.target.value)}
                            onKeyDown={e=>{
                                let newOutput = "";
                                if (e.key === "Enter")
                                {
                                    newOutput = output + "\n\n@guest from portfolio\n" + "> " + input + "\n\n";
                                    switch (input)
                                    {
                                        case "banner":
                                            newOutput += banner.join('\n')
                                            break;
                                        case "help":
                                            newOutput += help.join('\n')
                                            break;
                                        case "skills":
                                            newOutput += skills.join('\n')
                                            break;
                                        case "info":
                                            newOutput += info.join('\n')
                                            break;
                                        case "cls":
                                            newOutput = ""
                                            break;
                                        default:
                                            newOutput += "x_x Syntax Error \"" + input + "\" is not a command"
                                    }
                                    setOutput(newOutput)
                                    setInput("")
                                }
                            }}
                        />
                    </article>
                </section>
            </div>
        </div>
    )
};

export default Terminal