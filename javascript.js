//variables para botones (mirar)

let btnAbrir1 = document.getElementById("abrirBoton1");
let btnCerrar1 = document.getElementById("cerrarBoton1");
let modal1 = document.getElementById("sesion1");
let btnAbrir2 = document.getElementById("abrirBoton2");
let btnCerrar2 = document.getElementById("cerrarBoton2");
let modal2 = document.getElementById("master2");
let btnAbrir3 = document.getElementById("abrirBoton3");
let btnCerrar3 = document.getElementById("cerrarBoton3");
let modal3 = document.getElementById("clases3");

//funcion abrir ventana modal sesion1
btnAbrir1.addEventListener("click", () => {
    modal1.style.display = "block";
})

btnCerrar1.addEventListener("click", () => {
    modal1.style.display = "none";
})

//funcion abrir ventana modal sesion2

btnAbrir2.addEventListener("click", () => {
    modal2.style.display = "block";
})

btnCerrar2.addEventListener("click", () => {
    modal2.style.display = "none";
})

//funcion abrir ventana modal sesion3

btnAbrir3.addEventListener("click", () => {
    modal3.style.display = "block";
})

btnCerrar3.addEventListener("click", () => {
    modal3.style.display = "none";
})

