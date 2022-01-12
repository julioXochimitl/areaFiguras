//calcular el area de un triangulo, cuadrado y rectangulo
//Parametros dentro de la funcion, parametros declarados y parametros enviados a la funcion!

//Nombre del archivo, "Funciones"

// Triángulo
var b_tri = 5;
var a_tri = 6;

function triangulo() {
    area_tri = (b_tri*a_tri)/2;
    alert("El área del triángulo es: " + area_tri);
}
triangulo();

// Círculo
var pi = 3.1416;

function circulo(radio) {
    var area_circulo = pi*(radio*radio);
    alert("El área del círculo es: " + area_circulo);
}
circulo(2);

// Rectángulo
function rectangulo() {
    var b = 2;
    var h = 8;
    var area_rect = b*h;
    alert("El área del rectángulo es: " + area_rect);
}
rectangulo();