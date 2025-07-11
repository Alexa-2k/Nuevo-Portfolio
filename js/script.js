/* Alterna entre mostrar u ocultar los links de navegacion cuando el usuario hace click en el ícono hamburguesa */

  function showHide() {
    const menu = document.getElementById("myLinks");
    const icon = document.querySelector(".topnav a.icon");

    // Toggle class
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


// function showHide() {
// 	let x = document.getElementById("myLinks");
// 	if (x.style.display === "block") {
// 		x.style.display = "none";
// 	} else {
// 		x.style.display = "block";
// 	}
// }
