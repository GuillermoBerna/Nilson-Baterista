//variables como abrir y cerrar modal
const modal = document.querySelector('.sesion');
const btnAbrir = document.getElementById('abrirBoton1');
const modal2 = document.querySelector('.master');
const btnAbrir2 = document.getElementById('abrirBoton2');
const modal3 = document.querySelector('.clases');
const btnAbrir3 = document.getElementById('abrirBoton3');
const btnCerrar = document.getElementById('cerrarBoton1');
const btnCerrar2 = document.getElementById('cerrarBoton2');
const btnCerrar3 = document.getElementById('cerrarBoton3');

//agregamos un evento al hacer click en el boton

btnAbrir.addEventListener('click', abrirModal);
btnCerrar.addEventListener('click', cerrarModal);
btnAbrir2.addEventListener('click', abrirModal2);
btnCerrar2.addEventListener('click', cerrarModal2);
btnAbrir3.addEventListener('click', abrirModal3);
btnCerrar3.addEventListener('click', cerrarModal3);

//funcion modal1
function abrirModal() {
  modal.style.display = 'block';
}

function cerrarModal() {
  modal.style.display = 'none';
}

//funcion modal2

function abrirModal2() {
  modal2.style.display = 'block';
}

function cerrarModal2() {
  modal2.style.display = 'none';
}

//funcion modal3 

function abrirModal3() {
  modal3.style.display = 'block';
}

function cerrarModal3() {
  modal3.style.display = 'none';
}

 

 




 



