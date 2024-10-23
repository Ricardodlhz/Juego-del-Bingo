/*Variables */
const numerosBingo = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90
];
const bingo__container=document.getElementById("bingo__container")
const bingo__carton=document.getElementById("bingo__carton")
const bingo__carton__child=document.getElementById("bingo__carton__child")
const jugar=document.getElementById("jugar")
const container__juego=document.getElementById("container__juego")
const numero__elegido=document.getElementById("numero__elegido")
const tittle=document.getElementById("tittle")
const body=document.getElementById("body")
/*Función para cargar el carton del bingo*/
let fragment=document.createDocumentFragment()
let posicion
const cargarCarton=()=>{
    
    for (let index = 0; index < 24; index++) {
        posicion=Math.floor(Math.random()*numerosBingo.length)
        let newP=document.createElement("P")
        newP.textContent=posicion
        newP.classList="bingo__casilla"
        fragment.append(newP)
    }
    
    bingo__carton.append(fragment)
}

let contadorAciertos=0;
const comprobarCarton=(event)=>{
    if(event.target.nodeName=="P"){
        console.log("haces click en el texto")
        if(event.target.textContent==numero__elegido.textContent){
            contadorAciertos++;
            console.log("Bien tienes el número en el carton")
            event.target.textContent=""
            event.target.classList="fa-solid fa-flag bingo__casilla icono"
        }
    }

}

/*Comprobamos si hemos ganado o perdido */
const ganado=()=>{
    if(contadorAciertos==1){
        return true;
    }else{
        return false;
    }
}
let interval
let contador=0;
const generarNumero=()=>{
    contador+=100
    posicion=Math.floor(Math.random()*numerosBingo.length)
    numero__elegido.textContent=posicion
    if(contador==400){
        clearInterval(interval)
        console.log(contadorAciertos)
        console.log("Se acabó el tiempo")
        numero__elegido.classList="red"
        numero__elegido.textContent="Se ha acabado el Tiempo"
        bingo__carton.innerHTML="";
        jugar.style.display="block"
        if(ganado()){
            tittle.textContent="HAS GANADO"
            numero__elegido.style.display="none"
            body.style.backgroundImage="url('./../assets/images/ganado.jpg')";
            
        }else{
            tittle.textContent="HAS PERDIDO"
            numero__elegido.style.display="none"
            body.style.backgroundImage="url('./../assets/images/perder.jpg')";
        }
    }
       
        
    
}



const juego=(event)=>{
    if(event.target.nodeName=="INPUT"){
        body.style.backgroundImage="url('./../assets/images/bolas bingo fondo.jpg')";
        jugar.style.display="none"
        numero__elegido.style.display="block"
        tittle.textContent="Debes Cantar Bingo no se puede ganar a lineas"
        contador=0;
        contadorAciertos=0;
        console.log(contador)
        generarNumero()
        cargarCarton()
         numero__elegido.classList="numero__elegido"
        console.log("Hiciste click en jugar")
       interval=setInterval(generarNumero,5000)
    }
}









/*Listener */

container__juego.addEventListener("click",juego)
bingo__container.addEventListener("click",comprobarCarton)
