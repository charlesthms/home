import React, { useEffect } from 'react';
import './terminal.css';
import Typed from "typed.js";

const Terminal = () => {

  useEffect(() => {

    const terminal = document.getElementById("field");
    const delay = (ms) => new Promise(res => {
        setTimeout(res, ms);
    });

    function createLine(focusing = true){
        const p = document.createElement("p");
        const div = document.createElement("div");

        p.innerHTML = `<p class="path"><span class="time">${(new Date().toLocaleTimeString())} </span> charles <span>~/home </span></p>`;
        div.innerHTML = `<div class="type"><p class="icon">$ </p><input type="text" id="input"></div>`;
        
        terminal.appendChild(p);
        terminal.appendChild(div);

        if (focusing) {
            focusInput();
        }
    }

    function removeInput(){
        let input = document.getElementById("input");
        let val = input.value;

        input.parentElement.remove();

        const div = document.createElement("div");
        div.innerHTML = `<div class="type"><p class="icon">$ </p><input type="text" value="${val}" disabled></div>`;
        terminal.appendChild(div);
    }

    function focusInput(){
        document.getElementById("input").focus();
    }

    function breakLine(){
        const br = document.createElement("br");
        terminal.appendChild(br);
    }

    function addText(text, classname){
        const p = document.createElement("p");
        p.setAttribute("class", classname);
        p.innerText = text;

        terminal.appendChild(p);
    }

    function displayCommand(command, desc){
        // <p class="command">clear <br> <span class="txt">Efface le contenu du terminal</span></p>
        const p = document.createElement("p");
        p.setAttribute("class", "command");
        p.innerHTML = `${command} <br> <span class="txt">${desc}</span>`;

        terminal.appendChild(p);
    }

    function displayAllCommands(){
        displayCommand("help", "Affichage des commandes disponibles");
        displayCommand("clear", "Efface le contenu du terminal");
        displayCommand("whoami", "Qui suis-je ?");
        breakLine();
    };

    async function startup(){

        const p = document.createElement("p");
        p.setAttribute("id", "typing");
        p.innerHTML = `<p class="init">Initialisation ...</p>\n <p class="init">Ce terminal permet de réaliser quelques actions en ligne de commande (tappez <span class="help">help</span>)</p><br>`;
        terminal.appendChild(p);
        
        createLine(false);
    }

    startup();
    
    terminal.addEventListener("click", () => {
      focusInput();
    });
    
    terminal.addEventListener("keypress", (e) => {
        let input = document.getElementById("input");
        if(e.key === "Enter"){

            switch (input.value.toLowerCase()) {
                case "clear":
                    terminal.innerHTML = "";
                    createLine();
                    break;
                case "help":
                    removeInput();
                    displayAllCommands();
                    createLine();
                    break;
                case "whoami":
                    removeInput();
                    addText("Je suis Charles Thomas, étudiant en informatique.", "init");
                    breakLine();
                    createLine();
                    break;
                case "2048":
                removeInput();
                    addText('Easter Egg: Ouverture en cours ...')
                    window.open("https://hypnos-2048.herokuapp.com/");
                    createLine();
                    break;
                default:
                    removeInput();
                    addText("Commande inconnue, tappez help.", "init");
                    breakLine();
                    createLine();
                    break;
            }
        }
    });
  }, []);

    return (
        <section id="terminal">
            <div className="container terminal__container">

                <h1
                    className='section-title'
                    data-aos="fade-right"
                >
                    <span className='accent'>~</span>/terminal
                </h1>

                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="terminal__topbar">
                        <div className='terminal__controls'>
                            <div className='control red'></div>
                            <div className='control orange'></div>
                            <div className='control green'></div>
                        </div>
                        <div className='title'>
                            <p>Terminal</p>
                        </div>
                    </div>

                    <div className="terminal__field" id='field'>

                    </div>
                </div>

            </div>
        </section>
    )
    
}

export default Terminal