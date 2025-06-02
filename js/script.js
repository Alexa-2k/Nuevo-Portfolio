/* Alterna entre mostrar u ocultar los links de navegacion cuando el usuario hace click en el ícono hamburguesa */

function showHide() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
