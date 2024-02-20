'use client' // next por default trabaja desde el lado del servidor y asi no me deja usar usestate... por eso con esta linea trabajo desde el lado del client



import { Esteban } from "next/font/google";
import styles from "./page.module.css";
import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Game( {setEscore , score  }) {


  const imagese = [  "./icon-scissors.svg", "./icon-spock.svg" , "./icon-lizard.svg" ,"./icon-rock.svg", "./icon-paper.svg"  ]
  
  const images = [  { src : "./icon-scissors.svg", className : "img1"}, 
  { src: "./icon-spock.svg", className : "img2"} , 
  { src :"./icon-lizard.svg" , className : "img3"},
  { src :"./icon-rock.svg",className : "img4"}, 
  { src :"./icon-paper.svg",className : "img5"}  ] // creo la propiedad className, para que al mapear esta array pueda hacer lo mismo con la className de cada img, asi a cada elemento/imagen le doy diferente color/className


  let tijeras = "./icon-scissors.svg";
  let vulcano =  "./icon-spock.svg";
  let lagarto =  "./icon-lizard.svg";
  let piedra =   "./icon-rock.svg";
  let papel =  "./icon-paper.svg"


  const [ imagenes, setImages ] = useState(images) // para mapear toda la arreay de imagenes
  const [ elegida, setElegida ] = useState()  // para que el usuario escoga una imagen 
   const [ azar , setAzar] = useState() // para que se escoga una imagen al azar y sea la de la "maquina"

   const [ estAzar , setEstiAzar] = useState()

   const [ backGroundimg , setBackgroundimg] = useState(styles.game)

   const [ estiloGanador , setGanador] = useState(styles.marcador)
   const [ estiloPerdedor , setPerdedor] = useState(styles.marcador)

   const [ puntaje , setPuntaje] = useState(styles.puntaje)

  const random = imagese[Math.floor(Math.random()*images.length)]; // me escoge al azar una imagen entre todas las de la array 



  useEffect(()=>{
  
  let usuario = imagese[elegida] ;
  let computadora = azar;


    switch ( true) { // switch para colocar el marcador, el mensaje de ganó o perdió y el diseño dependiendo del resultado
       case ( usuario == tijeras  &&   computadora == vulcano) :
         setEscore( score -1);
         document.getElementById("resultado").innerHTML = " YOU LOSE "
         setPerdedor(styles.perdedor) // asi le doy estilo a un div dependiendo si gana o pierde, en este caso si el usuario pierde
         setGanador(styles.ganador1)
         setPuntaje(styles.puntajePerdedor)
         break;
       case ( usuario == tijeras  &&   computadora == lagarto) :
         setEscore( score + 1 );
         document.getElementById("resultado").innerHTML = " YOU WIN "
         setGanador(styles.ganador)
         setPerdedor(styles.perdedor1)
         setPuntaje(styles.puntajeGanador)
       break;
       case ( usuario == tijeras  &&   computadora == piedra) :
        setEscore(score  - 1 );
        document.getElementById("resultado").innerHTML = " YOU LOSE "
        setPerdedor(styles.perdedor)
        setGanador(styles.ganador1)
        setPuntaje(styles.puntajePerdedor)
      break;
      case ( usuario == tijeras  &&   computadora == papel) :
        setEscore( score + 1 );
        document.getElementById("resultado").innerHTML = " YOU WIN "
        setGanador(styles.ganador)
        setPerdedor(styles.perdedor1)
        setPuntaje(styles.puntajeGanador)
      break;
      case ( usuario == tijeras  &&   computadora == tijeras) :
        setEscore( score + 0 );
        document.getElementById("resultado").innerHTML = " TIE "
      break;
      case ( usuario == vulcano  &&   computadora == vulcano) :
         setEscore( score + 0);
         document.getElementById("resultado").innerHTML = " TIE "
       break;
       case ( usuario == vulcano  &&   computadora == lagarto) :
         setEscore( score -1 );
         document.getElementById("resultado").innerHTML = " YOU LOSE "
         setPerdedor(styles.perdedor)
         setGanador(styles.ganador1)
         setPuntaje(styles.puntajePerdedor)
       break;
       case ( usuario == vulcano  &&   computadora == piedra) :
        setEscore(score + 1 );
        document.getElementById("resultado").innerHTML = " YOU WIN "
        setGanador(styles.ganador)
        setPerdedor(styles.perdedor1)
        setPuntaje(styles.puntajeGanador)
      break;
      case ( usuario == vulcano  &&   computadora == papel) :
        setEscore( score  -1 );
        document.getElementById("resultado").innerHTML = " YOU LOSE "
        setPerdedor(styles.perdedor)
        setGanador(styles.ganador1)
        setPuntaje(styles.puntajePerdedor)
      break;
      case ( usuario == vulcano  &&   computadora == tijeras) :
        setEscore( score + 1 );
        document.getElementById("resultado").innerHTML = " YOU WIN "
        setGanador(styles.ganador)
        setPerdedor(styles.perdedor1)
        setPuntaje(styles.puntajeGanador)
      break;
      case ( usuario == lagarto  &&   computadora == vulcano) :
         setEscore(score + 1);
         document.getElementById("resultado").innerHTML = " YOU WIN "
         setGanador(styles.ganador)
         setPerdedor(styles.perdedor1)
        setPuntaje(styles.puntajeGanador)
       break;
       case ( usuario == lagarto  &&   computadora == lagarto) :
         setEscore(score + 0 );
         document.getElementById("resultado").innerHTML = " TIE "
       break;
       case ( usuario == lagarto  &&   computadora == piedra) :
        setEscore( score -1 );
        document.getElementById("resultado").innerHTML = " YOU LOSE "
        setPerdedor(styles.perdedor)
        setGanador(styles.ganador1)
        setPuntaje(styles.puntajePerdedor)
      break;
      case ( usuario == lagarto  &&   computadora == papel) :
        setEscore( score + 1 );
        document.getElementById("resultado").innerHTML = " YOU WIN "
        setGanador(styles.ganador)
        setPerdedor(styles.perdedor1)
        setPuntaje(styles.puntajeGanador)
      break;
      case ( usuario == lagarto  &&   computadora == tijeras) :
        setEscore( score - 1 );
        document.getElementById("resultado").innerHTML = " YOU LOSE "
        setPerdedor(styles.perdedor)
        setGanador(styles.ganador1)
        setPuntaje(styles.puntajePerdedor)
      break;
      case ( usuario == piedra  &&   computadora == vulcano) :
         setEscore(score  -1);
         document.getElementById("resultado").innerHTML = " YOU LOSE "
         setPerdedor(styles.perdedor)
         setGanador(styles.ganador1)
         setPuntaje(styles.puntajePerdedor)
       break;
       case ( usuario == piedra  &&   computadora == lagarto) :
         setEscore( score + 1 );
         document.getElementById("resultado").innerHTML = " YOU WIN "
         setGanador(styles.ganador)
         setPerdedor(styles.perdedor1)
        setPuntaje(styles.puntajeGanador)
       break;
       case ( usuario == piedra  &&   computadora == piedra) :
        setEscore( score + 0 );
        document.getElementById("resultado").innerHTML = " TIE "
      break;
      case ( usuario == piedra  &&   computadora == papel) :
        setEscore( score -1 );
        document.getElementById("resultado").innerHTML = " YOU LOSE "
        setPerdedor(styles.perdedor)
        setGanador(styles.ganador1)
        setPuntaje(styles.puntajePerdedor)
      break;
      case ( usuario == piedra  &&   computadora == tijeras) :
        setEscore( score + 1 );
        document.getElementById("resultado").innerHTML = " YOU WIN "
        setGanador(styles.ganador)
        setPerdedor(styles.perdedor1)
        setPuntaje(styles.puntajeGanador)
      break;
      case ( usuario == papel  &&   computadora == vulcano) :
         setEscore( score + 1);
         document.getElementById("resultado").innerHTML = " YOU WIN "
         setGanador(styles.ganador)
         setPerdedor(styles.perdedor1)
        setPuntaje(styles.puntajeGanador)
       break;
       case ( usuario == papel  &&   computadora == lagarto) :
         setEscore( score -1 );
         document.getElementById("resultado").innerHTML = " YOU LOSE "
         setPerdedor(styles.perdedor)
         setGanador(styles.ganador1)
         setPuntaje(styles.puntajePerdedor)
       break;
       case ( usuario == papel  &&   computadora == piedra) :
        setEscore( score + 1 );
        document.getElementById("resultado").innerHTML = " YOU WIN "
        setGanador(styles.ganador)
        setPerdedor(styles.perdedor1)
        setPuntaje(styles.puntajeGanador)
      break;
      case ( usuario == papel  &&   computadora == papel) :
        setEscore( score + 0 );
        document.getElementById("resultado").innerHTML = " TIE "
      break;
      case ( usuario == papel  &&   computadora == tijeras) :
        setEscore( score -1 );
        document.getElementById("resultado").innerHTML = " YOU LOSE "
        setPerdedor(styles.perdedor)
        setGanador(styles.ganador1)
        setPuntaje(styles.puntajePerdedor)
      break;
    } // asi hago un switch statement con 2 o mas variables, le pongo true en la condicion y && en los cases, esto para cuadrar los casos del juego

    if ( azar === "./icon-scissors.svg") {
      setEstiAzar(styles.img1) 
    }  else  if (azar === "./icon-spock.svg") {
     setEstiAzar(styles.img2) 
    } else if (azar === "./icon-lizard.svg") {
     setEstiAzar(styles.img3) 
    }else if (azar ===  "./icon-rock.svg") {
     setEstiAzar(styles.img4) 
    } else if (azar ===  "./icon-paper.svg") {
     setEstiAzar(styles.img5) 
    }  // if para dar un className dependiendo del valor de un hook o el elemento mapeado elegido

    

   }, [elegida, azar])
    

  let result = () => {
     document.getElementById("puntaje").style.display = "flex"
     document.getElementById("marcador").style.display = "flex"
     setBackgroundimg(styles.game2)
  }

  let again = () => {
    document.getElementById("marcador").style.display = "none"
    setImages(images)
    setBackgroundimg(styles.game)
    setGanador(styles.marcador)
    setPerdedor(styles.marcador)
    setPuntaje(styles.puntaje)
 }

   const resultados = useRef();

// cuadrar las medias queries de poca diferencia para las imagenes

  return (
    <div className={backGroundimg} id="game">
       <div id="imagenes" className={styles.imagenes}>
            {imagenes?.map( (imagen, i, index) =>
              <section className={styles.mapeadas}> 
                    <div key={i}  onClick={() => {setElegida(i) ; setImages([]) ; setAzar(random) ; result() }}  >
                      {<img  src={imagen.src}  index={index} className={styles[imagen.className]}   />}   {/* asi mapeo una array de imagenes */}
                    </div>     {/*  className={styles[imagen.className]} asi coloco una className proviniente de un array/objecto. Esto para que a cada elemento mapeado le pueda asignar una className diferente  */}
              </section>
            )}
        </div>        
       <section id="marcador"  style={{ display : "none" }} className={styles.resultado}>
         <div className={estiloGanador} id="elegida">
                <h4 >YOU PICKED</h4>
                {<img src={imagese[elegida]} className={styles[images[elegida]?.className]} id={styles.elegida}/>} {/* asi paso un index tomado en un onclick a que me refleje su valor dentro de un array, en este caso una imagen */}
          </div>   
          <div id="puntaje" style={{ display : "none" }} className={puntaje}>                          {/* y asi tambien paso una ClassName con un click, de un elemento mapeado*/}
                  <h4 ref={resultados}  id="resultado"  ></h4>
                  <button onClick={again}>PLAY AGAIN</button>
          </div>
          <div className={estiloPerdedor} id="house">
                <h4  >THE HOUSE PICKED</h4>
                {<img src={azar} className={estAzar} id={styles.azar} />}
          </div>
       </section>
    </div>
  );
}
