const modal = document.getElementById("sesion1");
const modal2 = document.getElementById("master2");
const modal3 = document.getElementById("clases3");
const btnAbrir = document.getElementById("abrirBoton1");
const btnCerrar = document.getElementById("cerrarBoton1");
const btnAbrir2 = document.getElementById("abrirBoton2");
const btnCerrar2 = document.getElementById("cerrarBoton2");
const btnAbrir3 = document.getElementById("abrirBoton3");
const btnCerrar3 = document.getElementById("cerrarBoton3");

// Abrir el modal con animación de desvanecimiento
function abrirModal() {
  modal.classList.add('animate__animated', 'animate__fadeIn');
  modal.style.display = 'block';
}

// Cerrar el modal con animación de deslizamiento
function cerrarModal() {
  modal.classList.remove('animate__fadeIn');
  modal.classList.add('animate__animated', 'animate__fadeOut');
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('animate__fadeOut');
  }, 1000); // Espera 1 segundo para ocultar el modal después de la animación
}

btnAbrir.addEventListener('click', abrirModal);
btnCerrar.addEventListener('click', cerrarModal);

//modal 2

function abrirModal2() {
  modal2.classList.add('animate__animated', 'animate__fadeIn');
  modal2.style.display = 'block';
}

function cerrarModal2() {
  modal2.classList.remove('animate__fadeIn');
  modal2.classList.add('animate__animated', 'animate__fadeOut');
  setTimeout(() => {
    modal2.style.display = 'none';
    modal2.classList.remove('animate__fadeOut');
  }, 1000); // Espera 1 segundo para ocultar el modal después de la animación
}
 
btnAbrir2.addEventListener('click', abrirModal2);
btnCerrar2.addEventListener('click', cerrarModal2);

//modal3

function abrirModal3() {
  modal3.classList.add('animate__animated', 'animate__fadeIn');
  modal3.style.display = 'block';
}

function cerrarModal3() {
  modal3.classList.remove('animate__fadeIn');
  modal3.classList.add('animate__animated', 'animate__fadeOut');
  setTimeout(() => {
    modal3.style.display = 'none';
    modal3.classList.remove('animate__fadeOut');
  }, 900); // Espera 1 segundo para ocultar el modal después de la animación
}
 
btnAbrir3.addEventListener('click', abrirModal3);
btnCerrar3.addEventListener('click', cerrarModal3);


 




 



