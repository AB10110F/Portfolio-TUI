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
            "           ,db                                                                     ",
            "           jSDl,                                                                   ",
            "           DEMP\".                                                                 ",
            "           'YLObP                      Name: Bryant                                ",
            "             `YN`                      Mail: bryant.0@outlook.com                  ",
            "               Y\"                                                                 ",
            "                Y;                     You can also check my social media          ",
            "               ,Lb  .,,. ,,ss          just type one of the following options:     ",
            "            .,dOVEl SDEMILO'                                                       ",
            "           dLOVENUSDEMILOP                                                         ",
            "          ;OP*NUSDP**LOVEb,            =^..^= github        </>   codepen          ",
            "          dEl \"DE;   YENUP                                                        ",
            "          YUS :l`     YS'              (°‿°) reddit       ,(u°)> twitter           ",
            "          :*'       .,DE.                                                          ",
            "                  USD`YI                                                           ",
            "                 dDEY  O:              ║▌║█║▌│║▌║▌█║▌║█║▌│║▌║▌█║▌║                 ",
            "                .EMIb ,E.                                                          ",
            "               ,dILO* NUY                                                          ",
            "              ,ILOVb ,SD'              Type \"help\" to view the available commands\n",
            "",
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
            "Type \"help\" to view the available commands\n\n"
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
            "cls: Clears the content of the terminal\n\n",
        ]

        smallProjects = [
            "Still working on them, most of them are private, sorry :(\n\n"
        ]

        smallInfo = [
            "This project was build with Next.js 13",
            "3D model was handled with three.js",
            "Dots grid background was made with p5.js\n\n",
        ]
    }
    else if(language == 'Spanish')
    {
        banner = [
            "           ,db                                                                     ",
            "           jSDl,                                                                   ",
            "           DEMP\".                                                                 ",
            "           'YLObP                      Nombre: Bryant                              ",
            "             `YN`                      Correo: bryant.0@outlook.com                ",
            "               Y\"                                                                 ",
            "                Y;                     También puedes encontrarme en mis redes     ",
            "               ,Lb  .,,. ,,ss          tecleando unas de las siguientes opciones:  ",
            "            .,dOVEl SDEMILO'                                                       ",
            "           dLOVENUSDEMILOP                                                         ",
            "          ;OP*NUSDP**LOVEb,            =^..^= github        </>   codepen          ",
            "          dEl \"DE;   YENUP                                                        ",
            "          YUS :l`     YS'              (°‿°) reddit       ,(u°)> twitter           ",
            "          :*'       .,DE.                                                          ",
            "                  USD`YI                                                           ",
            "                 dDEY  O:              ║▌║█║▌│║▌║▌█║▌║█║▌│║▌║▌█║▌║                 ",
            "                .EMIb ,E.                                                          ",
            "               ,dILO* NUY                                                          ",
            "              ,ILOVb ,SD'              Teclea \"help\" para ver los comandos disponibles\n",
            "",
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

        projects = [
            " _ __  _ __    ___  _________   ,___ ________,",
            "( /  )( /  )  /  ()( /(  /     /   /(  /  (   ",
            " /--'  /--<  /   /  /   /--   /       /    `. ",
            "/     /   \\_(___/ _/_ (/____/(___/  _/   (___)",
            "                 //                           ",
            "                (/                            \n\n",
            "Aún no están dispnibles :(\n\n",
        ]

        info = [
            "888b    | 888~~  Y88b    / ~~~888~~~      Este proyecto fue hecho con Next.js 13",
            "|Y88b   | 888___  Y88b  /     888         El modelo 3D fue añadido con three.js",
            "| Y88b  | 888      Y88b/      888         La cuadrícula de puntos fue hecha con p5.js",
            "|  Y88b | 888      /Y88b      888   ",
            "|   Y88b| 888     /  Y88b     888   ",
            "|    Y888 888___ /    Y88b    888   \n\n",
        ]

        smallBanner = [
            "Nombre: Bryant",
            "Correo: bryant.0@outlook.com",
            "",
            "Teclea \"help\" para ver los comandos disponibles\n"
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
            "cls: Borra el contenido de la terminal\n\n",
        ]

        smallProjects = [
            "Aún no están dispnibles :(\n\n",
        ]

        smallInfo = [
            "Este proyecto fue hecho con Next.js 13",
            "El modelo 3D fue añadido con three.js",
            "La cuadrícula de puntos fue hecha con p5.js\n\n",
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
        "Git  [████████████▁▁▁▁] 75%\n\n",
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
    const inputRef = useRef<HTMLInputElement>(null!);
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
                                            newOutput = ""
                                            break;
                                        default:
                                            newOutput += "x_x Syntax Error \"" + input + "\" is not a command\n\n"
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
