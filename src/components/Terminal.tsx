import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from '../css/terminal.module.css'
import { ChevronRight } from 'lucide-react';

const Terminal = () => {

    const banner = [
        "██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗ ",
        "██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝ ",
        "██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  ",
        "██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  ",
        "╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗ ",
        " ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝",
        "",
        "________________________________________________",
        "|      _____________________________           |     Name: Bryant",
        "| [][] _____________________________ [_][_][_] |     Mail: bryant.0@outlook.com",
        "| [][] [_][_][_] [_][_][_][_] [_][_] [_][_][_] |     ",
        "|                                              |     You can also check my",
        "| [][] [][][][][][][][][][][][][][_] [][][][]  |     social media, just type",
        "| [][] [_][][][][][][][][][][][][][] [][][][]  |     one of the following options:",
        "| [][] [__][][][][][][][][][][][][_] [][][][]  |     ",
        "| [][] [___][][][][][][][][][][][__] [__][][]  |     github             codepen",
        "|          [_][______________][_]              |     reddit             twitter",
        "|______________________________________________|",
        "",
        "Type \"help\" to view the available commands"       
    ]

    const help = [
        "This is the list of commands you can use: \n",
        "banner          Displays the initial greeting",
        "help            As you can see it shows a list of commands",
        "skills          Displays the technologies I'm able to use",
        "projects        List of my projects",
        "info            Shows all the information of the project",
        "github          Opens github in a new tab",
        "codepen         Opens codpen in a new tab",
        "reddit          Opens reddit in a new tab",
        "twitter         Opens twitter in a new tab",
        "cls             Clears the content of the terminal",
    ]

    const skills = [
        "CSS    [██████████████████▁▁▁▁▁▁]         C++    [████████████████████▁▁▁▁]",
        "",
        "TS     [█████████████▁▁▁▁▁▁▁▁▁▁]         PHP    [██████████████▁▁▁▁▁▁▁▁▁]",
        "",
        "Angular[█████████__▁▁▁▁▁▁▁▁▁▁▁▁]         Go     [█████████████____▁▁▁▁▁▁]",
        "",
        "React  [███████████▁▁▁▁▁▁▁▁▁▁▁▁]         Git    [██████████████████▁▁▁▁▁▁]",
    ]

    const projects = [
        " _ __  _ __    ___  _________   ,___ ________,",
        "( /  )( /  )  /  ()( /(  /     /   /(  /  (   ",
        " /--'  /--<  /   /  /   /--   /       /    `. ",
        "/     /   \\_(___/ _/_ (/____/(___/  _/   (___)",
        "                 //                           ",
        "                (/                            ",
        "",
        "Still working on them, most of them are private, sorry :(",
    ]

    const info = [
        "888b    | 888~~  Y88b    / ~~~888~~~      This project was built with Next.js 13", 
        "|Y88b   | 888___  Y88b  /     888         The icons I used are the lucide-icons",
        "| Y88b  | 888      Y88b/      888         Dots grid background was made with p5.js", 
        "|  Y88b | 888      /Y88b      888         3D model was handled with three.js", 
        "|   Y88b| 888     /  Y88b     888   ", 
        "|    Y888 888___ /    Y88b    888   ",
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
                                        case "projects":
                                            newOutput += projects.join('\n')
                                            break;
                                        case "info":
                                            newOutput += info.join('\n')
                                            break;
                                        case "github":
                                            newOutput += "github"
                                            window.open("https://github.com/AB10110F", '_blank');
                                            break;
                                        case "codepen":
                                            newOutput += "codepen"
                                            window.open("https://codepen.com/AB10110F", '_blank');
                                            break;
                                        case "reddit":
                                            newOutput += "reddit"
                                            window.open("https://github.com/AB10110F", '_blank');
                                            break;
                                        case "twitter":
                                            newOutput += "twitter"
                                            window.open("https://github.com/AB10110F", '_blank');
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
    )
};

export default Terminal