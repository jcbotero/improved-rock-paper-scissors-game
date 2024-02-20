'use client' // next por default trabaja desde el lado del servidor y asi no me deja usar usestate... por eso con esta linea trabajo desde el lado del client


import styles from "./page.module.css";
import Game from "./game";
import React from "react";
import { useState, useEffect, useRef } from "react";


export default function Home() {



  const [ score, setEscore ] = useState(0)
  const [ darkMode, setDark] = useState(true)

  useEffect(()=>{
    
  }, [score])

 let themeToggler = () => {
    const currentState = darkMode;
        setDark(!currentState );
        document.getElementById("rules").style.display = "flex "
        
       document.getElementById("black").style.display = "flex" 
      
       
  } /* esta fucntion se me dispara al darle click al boton , me hace cambiar el state theme, y por tanto la classname de ese div*/


  let rulesoff = () => {
    const currentState = darkMode;
    setDark(!currentState );
        document.getElementById("rules").style.display = "none"
        document.getElementById("black").style.display = "none" 
  } 




  return (
    <div className={ darkMode ? styles.light : styles.dark } id="darkMode"> {/* aqui estoy asignando una class name con base en un state que es theme, con la function themeToggler pasa de la classname light a dark */}
      <header className={styles.header}>
          <div>
              <h2>ROCK</h2>
              <h2>PAPER</h2>
              <h2>SCISSORS</h2>
              <h2>LIZARD</h2>
              <h2>SPOCK</h2>
          </div>
          <div className={styles.score} >
               <h3>SCORE</h3>
               <h1> {score}</h1>
          </div>
      </header>
      <section id="rules" className={styles.rules} style={{display : "none"}} >
          <h3>RULES</h3>
          <img className={styles.rulesimg}  src="/image-rules-bonus.svg" />
          <img className={styles.rulesX}onClick={rulesoff} src="/icon-close.svg" />
      </section>
      <main>
           < Game setEscore={setEscore} score={score}  /> 
      </main>
      <section style={{display : "none"}} className={styles.black} id="black">
           <div  ></div>
      </section> {/* pongo esta section para oscurecer todo la pantalla menos la parte de las reglas */}
      <footer className={styles.footer}>
          <button onClick={themeToggler}>RULES </button>
      </footer>
    </div>
  );
}
