/* Condicionales - switch 
Funcionan similar a las condicionales, solo que se diferencian de la condici´n normal
if/else ya que la condicional switch solo se puede validar una sola condición entre varios keys  
y es utilizada cuando no necesitamos comparar, igualar o negar una condicion de otra*/
let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");
switch (edad) {
  case "18":
    alert("Tienes acceso al catalogo de peliculas violentas");
    break;
  case "25":
    alert("Tienes acceso al catalogo de peliculas violentas");
    break;
  case "35":
    alert("Tienes acceso al catalogo de peliculas violentas");
    break;
  default:
    alert("Debes ser mayor de 18 años para acceder al catálogo");
    break;
}
