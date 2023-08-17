import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useLanguageContext } from '../app/context/language';
import styles from '../css/terminal.module.css'
import { vt323 } from '../fonts/fonts'

const Terminal = () => {

    const {language, setLanguage} = useLanguageContext();

    let banner:string[];
    let help:string[];
    let skills:string[];
    let projects:string[];
    let info:string[];
    let smallBanner:string[];
    let smallHelp:string[];
    let smallSkills:string[];
    let smallProjects:string[];
    let smallInfo:string[];

    if(language == 'English')
    {
        banner = [
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
            "Type \"help\" to view the available commands\n\n"       
        ]
    
        help = [
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
            "cls             Clears the content of the terminal\n\n",
        ]
    
        projects = [
            " _ __  _ __    ___  _________   ,___ ________,",
            "( /  )( /  )  /  ()( /(  /     /   /(  /  (   ",
            " /--'  /--<  /   /  /   /--   /       /    `. ",
            "/     /   \\_(___/ _/_ (/____/(___/  _/   (___)",
            "                 //                           ",
            "                (/                            \n\n",
            "",
            "Still working on them, most of them are private, sorry :(\n\n",
        ]
    
        info = [
            "888b    | 888~~  Y88b    / ~~~888~~~      This project was build with Next.js 13", 
            "|Y88b   | 888___  Y88b  /     888         3D model was handled with three.js",
            "| Y88b  | 888      Y88b/      888         Dots grid background was made with p5.js", 
            "|  Y88b | 888      /Y88b      888   ", 
            "|   Y88b| 888     /  Y88b     888   ", 
            "|    Y888 888___ /    Y88b    888   \n\n",
        ]
    
        smallBanner = [
            "Name: Bryant",
            "Mail: bryant.0@outlook.com",
            "",
            "=^..^= github       </>   codepen",
            "(°‿°) reddit      ,(u°)> twitter",
            "",
            "Type \"help\" to view the available commands\n"  
        ]
    
        smallHelp= [
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
    
        smallProjects = [
            "Still working on them, most of them are private, sorry :(\n"
        ]
        
        smallInfo = [
            "This project was build with Next.js 13", 
            "3D model was handled with three.js",
            "Dots grid background was made with p5.js\n",
        ]
    }
    else if(language == 'Spanish')
    {
        banner = [
            "      _/_/    _/_/_/      _/    _/      _/    _/    _/    _/_/_/_/",
            "   _/    _/  _/    _/  _/_/  _/  _/  _/_/  _/_/  _/  _/  _/       ",
            "  _/_/_/_/  _/_/_/      _/  _/  _/    _/    _/  _/  _/  _/_/_/    ",
            " _/    _/  _/    _/    _/  _/  _/    _/    _/  _/  _/  _/         ",
            "_/    _/  _/_/_/      _/    _/      _/    _/    _/    _/          ",
            "",
            "________________________________________________",
            "|      _____________________________           |     Nombre: Bryant",
            "| [][] _____________________________ [_][_][_] |     Correo: bryant.0@outlook.com",
            "| [][] [_][_][_] [_][_][_][_] [_][_] [_][_][_] |     ",
            "|                                              |     También puedes checar mis",
            "| [][] [][][][][][][][][][][][][][_] [][][][]  |     redes sociales tecleando",
            "| [][] [_][][][][][][][][][][][][][] [][][][]  |     una de las siguientes opciones:",
            "| [][] [__][][][][][][][][][][][][_] [][][][]  |     ",
            "| [][] [___][][][][][][][][][][][__] [__][][]  |     =^..^= github       </>   codepen",
            "|          [_][______________][_]              |     (°‿°) reddit      ,(u°)> twitter",
            "|______________________________________________|",
            "",
            "Teclea \"help\" para ver los comandos disponibles\n\n"       
        ]
    
        help = [
            "Esta es la lista de comandos que puedes usar: \n",
            "banner          Despliega el saludo inicial",
            "help            Como puedes ver, muestra una lista de comandos",
            "skills          Muestra las tecnologías que puedo usar",
            "projects        Lista mis proyectos",
            "info            Muestra la información del proyecto",
            "github          Abre github en una nueva pestaña",
            "codepen         Abre codepen en una nueva pestaña",
            "reddit          Abre reddit en una nueva pestaña",
            "twitter         Abre twitter en una nueva pestaña",
            "cls             Borra el contenido de la terminal\n\n",
        ]
    
        skills = [
            "CSS     [████████████▁▁▁▁] 75%         C++    [████████████▁▁▁▁] 75%",
            "",
            "TS      [████████▁▁▁▁▁▁▁▁] 50%        PHP     [████████▁▁▁▁▁▁▁▁] 50%",
            "",
            "Angular [███████▁▁▁▁▁▁▁▁▁] 44%        Go      [█████████▁▁▁▁▁▁▁] 57%",
            "",
            "React   [████████▁▁▁▁▁▁▁▁] 50%        Git     [████████████▁▁▁▁] 75%\n\n",
        ]
    
        projects = [
            " _ __  _ __    ___  _________   ,___ ________,",
            "( /  )( /  )  /  ()( /(  /     /   /(  /  (   ",
            " /--'  /--<  /   /  /   /--   /       /    `. ",
            "/     /   \\_(___/ _/_ (/____/(___/  _/   (___)",
            "                 //                           ",
            "                (/                            \n\n",
            "",
            "Aún no están dispnibles :(\n\n",
        ]
    
        info = [
            "888b    | 888~~  Y88b    / ~~~888~~~      Este proyecto fue hecho con Next.js 13", 
            "|Y88b   | 888___  Y88b  /     888         Él modelo 3D fue añadido con three.js",
            "| Y88b  | 888      Y88b/      888         La cuadrícula de puntos fue hecha con p5.js", 
            "|  Y88b | 888      /Y88b      888   ", 
            "|   Y88b| 888     /  Y88b     888   ", 
            "|    Y888 888___ /    Y88b    888   \n\n",
        ]
    
        smallBanner = [
            "Nombre: Bryant",
            "Correo: bryant.0@outlook.com",
            "",
            "=^..^= github       </>   codepen",
            "(°‿°) reddit      ,(u°)> twitter",
            "",
            "Type \"help\" to view the available commands\n"  
        ]
    
        smallHelp= [
            "Esta es la lista de comandos que puedes usar: \n",
            "banner: Despliega el saludo inicial\n",
            "help: Como puedes ver, muestra una lista de comandos\n",
            "skills: Muestra las tecnologías que puedo usar\n",
            "projects: Lista mis proyectos\n",
            "info: Muestra la información del proyecto\n",
            "github: Abre github en una nueva pestaña\n",
            "codepen: Abre codepen en una nueva pestaña\n",
            "reddit: Abre reddit en una nueva pestaña\n",
            "twitter: Abre twitter en una nueva pestaña\n",
            "cls: Borra el contenido de la terminal\n",
        ]
    
        smallProjects = [
            "Aún no están dispnibles :(\n",
        ]
        
        smallInfo = [
            "Este proyecto fue hecho con Next.js 13", 
            "Él modelo 3D fue añadido con three.js",
            "La cuadrícula de puntos fue hecha con p5.js\n", 
        ]
    }
    else
    {
        banner = [''];
        help = [''];
        skills = [''];
        projects = [''];
        info = [''];
        smallBanner = [''];
        smallHelp= [''];
        smallSkills = [''];
        smallProjects = [''];
        smallInfo = [''];
    }

    skills = [
        "CSS     [████████████▁▁▁▁] 75%         C++    [████████████▁▁▁▁] 75%",
        "",
        "TS      [████████▁▁▁▁▁▁▁▁] 50%        PHP     [████████▁▁▁▁▁▁▁▁] 50%",
        "",
        "Angular [███████▁▁▁▁▁▁▁▁▁] 44%        Go      [█████████▁▁▁▁▁▁▁] 57%",
        "",
        "React   [████████▁▁▁▁▁▁▁▁] 50%        Git     [████████████▁▁▁▁] 75%\n\n",
    ]
    smallSkills = [
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
        "Git  [████████████▁▁▁▁] 75%\n",
    ]

    let start:string[];
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
        if (preRef.current) 
        {
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
                            id='prompt'
                            value={input} 
                            onChange={e=>setInput(e.target.value)}
                            onKeyDown={e=>{
                                let newOutput = "";
                                if (e.key === "Enter")
                                {
                                    newOutput = output + "@guest from portfolio\n" + "> " + input + "\n\n";
                                    switch (input)
                                    {
                                        case "banner":
                                            window.innerWidth<=760 ? newOutput += smallBanner.join('\n') : newOutput += banner.join('\n')
                                            break;
                                        case "help":
                                            window.innerWidth<=760 ? newOutput += smallHelp.join('\n') : newOutput += help.join('\n')
                                            break;
                                        case "skills":
                                            window.innerWidth<=760 ? newOutput += smallSkills.join('\n') : newOutput += skills.join('\n')
                                            break;
                                        case "projects":
                                            window.innerWidth<=760 ? newOutput += smallProjects.join('\n') : newOutput += projects.join('\n')
                                            break;
                                        case "info":
                                            window.innerWidth<=760 ? newOutput += smallInfo.join('\n') : newOutput += info.join('\n')
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