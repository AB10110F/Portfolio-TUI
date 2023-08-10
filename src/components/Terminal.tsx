import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from '../css/terminal.module.css'
import { VT323 } from '@next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--vt323',
})

const Terminal = () => {

    const banner = [
        "      _/_/    _/_/_/      _/    _/      _/    _/    _/    _/_/_/_/",
        "   _/    _/  _/    _/  _/_/  _/  _/  _/_/  _/_/  _/  _/  _/       ",
        "  _/_/_/_/  _/_/_/      _/  _/  _/    _/    _/  _/  _/  _/_/_/    ",
        " _/    _/  _/    _/    _/  _/  _/    _/    _/  _/  _/  _/         ",
        "_/    _/  _/_/_/      _/    _/      _/    _/    _/    _/          ",
        "",
        "________________________________________________",
        "|      _____________________________           |     Name: Bryant",
        "| [][] _____________________________ [_][_][_] |     Mail: bryant.0@outlook.com",
        "| [][] [_][_][_] [_][_][_][_] [_][_] [_][_][_] |     ",
        "|                                              |     You can also check my",
        "| [][] [][][][][][][][][][][][][][_] [][][][]  |     social media, just type",
        "| [][] [_][][][][][][][][][][][][][] [][][][]  |     one of the following options:",
        "| [][] [__][][][][][][][][][][][][_] [][][][]  |     ",
        "| [][] [___][][][][][][][][][][][__] [__][][]  |     =^..^= github       </>   codepen",
        "|          [_][______________][_]              |     (°‿°) reddit      ,(u°)> twitter",
        "|______________________________________________|",
        "",
        "Type \"help\" to view the available commands"       
    ]

    const help = [
        "This is the list of commands you can use: \n",
        "banner          Displays the initial greeting",
        "help            As you can see, it shows a list of commands",
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
        "CSS     [████████████▁▁▁▁] 75%         C++    [████████████▁▁▁▁] 75%",
        "",
        "TS      [████████▁▁▁▁▁▁▁▁] 50%        PHP     [████████▁▁▁▁▁▁▁▁] 50%",
        "",
        "Angular [███████▁▁▁▁▁▁▁▁▁] 44%        Go      [█████████▁▁▁▁▁▁▁] 57%",
        "",
        "React   [████████▁▁▁▁▁▁▁▁] 50%        Git     [████████████▁▁▁▁] 75%",
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
        "|Y88b   | 888___  Y88b  /     888         3D model was handled with three.js",
        "| Y88b  | 888      Y88b/      888         Dots grid background was made with p5.js", 
        "|  Y88b | 888      /Y88b      888   ", 
        "|   Y88b| 888     /  Y88b     888   ", 
        "|    Y888 888___ /    Y88b    888   ",
    ]

    const smallBanner = [
        "Name: Bryant",
        "Mail: bryant.0@outlook.com",
        "",
        "=^..^= github       </>   codepen",
        "(°‿°) reddit      ,(u°)> twitter",
        "",
        "Type \"help\" to view the available commands"  
    ]
    const smallHelp = [
        "This is the list of commands you can use: \n",
        "banner: Displays the initial greeting\n",
        "help: As you can see, it shows a list of commands\n",
        "skills: Displays the technologies I'm able to use\n",
        "projects: List of my projects\n",
        "info: Shows all the information of the project\n",
        "github: Opens github in a new tab\n",
        "codepen: Opens codpen in a new tab\n",
        "reddit: Opens reddit in a new tab\n",
        "twitter: Opens twitter in a new tab\n",
        "cls: Clears the content of the terminal\n",
    ]
    const smallSkills = [
        "CSS  [████████████▁▁▁▁] 75%",
        "",
        "C++  [████████████▁▁▁▁] 75%",
        "",
        "TS   [████████▁▁▁▁▁▁▁▁] 50%",
        "",
        "PHP  [████████▁▁▁▁▁▁▁▁] 50%",
        "",
        "NG   [███████▁▁▁▁▁▁▁▁▁] 44%",
        "",
        "Go   [█████████▁▁▁▁▁▁▁] 57%",
        "",
        "Reac [████████▁▁▁▁▁▁▁▁] 50%",
        "",
        "Git  [████████████▁▁▁▁] 75%",
    ]
    const smallProjects = [
        "Still working on them, most of them are private, sorry :("
    ]
    const smallInfo = [
        "This project was built with Next.js 13", 
        "3D model was handled with three.js",
        "Dots grid background was made with p5.js",
    ]

    var start;
    if(window.innerWidth<=760)
    {
        start=smallBanner;
    }
    else
    {
        start=banner;
    }

    const preRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef(document.createElement("input"))
    const [input, setInput] = useState("");
    const [output, setOutput] = useState(start.join('\n'));

    useEffect(() => {
        if (preRef.current) {
          preRef.current.scrollTop = preRef.current.scrollHeight;
        }

        inputRef.current.focus()
    }, [output]);
    
    return (
            <div  ref={preRef} className={styles.terminal} onClick={e=>inputRef.current.focus()}>
                <pre style={vt323.style} className={styles.history}>{output}</pre>
                <section className={styles.prompt}>
                    <article style={vt323.style}>@guest from portfolio</article>
                    <article className={styles.promptDown}>
                        <p style={vt323.style}>&gt;</p>
                        <input 
                            ref={inputRef}
                            style={vt323.style}
                            type="text"
                            value={input} 
                            onChange={e=>setInput(e.target.value)}
                            onKeyDown={e=>{
                                let newOutput = "";
                                if (e.key === "Enter")
                                {
                                    newOutput = output + "\n\n@guest from portfolio\n" + "> " + input + "\n\n";
                                    if(window.innerWidth<=760)
                                    {
                                        switch (input)
                                        {
                                            case "banner":
                                                newOutput += smallBanner.join('\n')
                                                break;
                                            case "help":
                                                newOutput += smallHelp.join('\n')
                                                break;
                                            case "skills":
                                                newOutput += smallSkills.join('\n')
                                                break;
                                            case "projects":
                                                newOutput += smallProjects.join('\n')
                                                break;
                                            case "info":
                                                newOutput += smallInfo.join('\n')
                                                break;
                                            case "github":
                                                newOutput += "github"
                                                window.open("https://github.com/AB10110F", '_blank');
                                                break;
                                            case "codepen":
                                                newOutput += "codepen"
                                                window.open("https://codepen.io/AB10110F", '_blank');
                                                break;
                                            case "reddit":
                                                newOutput += "reddit"
                                                window.open("https://www.reddit.com/user/AB10110F", '_blank');
                                                break;
                                            case "twitter":
                                                newOutput += "twitter"
                                                window.open("https://twitter.com/AB10110F", '_blank');
                                                break;
                                            case "cls":
                                                newOutput = ""
                                                break;
                                            default:
                                                newOutput += "x_x Syntax Error \"" + input + "\" is not a command"
                                        }
                                    }
                                    else
                                    {
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
                                                window.open("https://codepen.io/AB10110F", '_blank');
                                                break;
                                            case "reddit":
                                                newOutput += "reddit"
                                                window.open("https://www.reddit.com/user/AB10110F", '_blank');
                                                break;
                                            case "twitter":
                                                newOutput += "twitter"
                                                window.open("https://twitter.com/AB10110F", '_blank');
                                                break;
                                            case "cls":
                                                newOutput = ""
                                                break;
                                            default:
                                                newOutput += "x_x Syntax Error \"" + input + "\" is not a command"
                                        }
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