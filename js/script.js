/* Alterna entre mostrar u ocultar los links de navegacion cuando el usuario hace click en el ícono hamburguesa */

  function showHide() {
    const menu = document.getElementById("myLinks");
    const icon = document.querySelector(".topnav a.icon");

    // Toggle class
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


const toggle = document.getElementById('toggle-mode');
const sol = document.querySelector('.sun');

// Función para aplicar el modo visual
function aplicarModo(oscuro) {
  document.body.classList.toggle('dark-mode', oscuro);
  document.body.classList.toggle('light-mode', !oscuro);
  sol.src = oscuro ? '../assets/images/Moon.png' : '../assets/images/sun.png';
  toggle.checked = oscuro;
}

// Leer preferencia guardada o usar la del sistema
let modoGuardado = localStorage.getItem('dark-mode');
let modoOscuro = modoGuardado !== null 
  ? modoGuardado === 'true'
  : window.matchMedia('(prefers-color-scheme: dark)').matches;

// Aplicar al cargar
aplicarModo(modoOscuro);

toggle.addEventListener("change", () => {
	modoOscuro = toggle.checked;
	localStorage.setItem("dark-mode", modoOscuro);
	location.reload(); // 🔁 Recarga la página
});



  window.onload = function () {
		try {
			TagCanvas.Start("myCanvas");
		} catch (e) {
			// something went wrong, hide the canvas container
			document.getElementById("myCanvasContainer").style.display = "none";
		}
	}; 




// // Cambiar cuando se usa el switch
// toggle.addEventListener('change', () => {
//   modoOscuro = toggle.checked;
//   localStorage.setItem('dark-mode', modoOscuro);
//   aplicarModo(modoOscuro);
// });