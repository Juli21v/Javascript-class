/* DOM - Document Object Model Obtener elemento el HTML 
Js puede acceder al DOM, y a través de el, puede modificar
la página, de hecho puede modificar todos los estilos CSS
eleminar o añadir elementos, atributos relacionados con la página
además reacciona a todos los eventos de la página */
let datos = document.getElementById("datos");
//función
const nombreUsuario = () => {
    let nombre = prompt("Ingresa tu nombre")
    alert(nombre)
}
//Función vacia
//Eventos (onclick desde js)
datos.onclick = function () {
    nombreUsuario();
}
