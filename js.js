let pantalla = document.getElementById("pantalla");

/* ------------------------------------------------------------------
Funcion Limpiar:
Se creo la variable limpiar a la cual se le asigo el Id limpiar.
Se agrego un event listener de click a esa variable a la cual se le asigno una funcion anonima
que limpia el value del Id pantalla */
let limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", function () {
    pantalla.value = "";
});

/* ------------------------------------------------------------------
Impresion en pantalla de los numeros y operaciones:
Se creo una variable por cada numero a la cual se le asigno el Id de su numero.
Se agrego un event listener de click a esa variable a la cual se le asigno una funcion anonima.
Esta funcion pasa el texto que contiene esa variable a pantalla concatenando el texto que 
ya se encuentra en pantalla.
Especial atencion con la tecla de multiplicar ya que su valor es diferente al operador */

let uno = document.getElementById("uno");
uno.addEventListener("click", function () {
    pantalla.value += uno.textContent;
});

let dos = document.getElementById("dos");
dos.addEventListener("click", function () {
    pantalla.value += dos.textContent;
});

let tres = document.getElementById("tres");
tres.addEventListener("click", function () {
    pantalla.value += tres.textContent;
});

let cuatro = document.getElementById("cuatro");
cuatro.addEventListener("click", function () {
    pantalla.value += cuatro.textContent;
});

let cinco = document.getElementById("cinco");
cinco.addEventListener("click", function () {
    pantalla.value += cinco.textContent;
});

let seis = document.getElementById("seis");
seis.addEventListener("click", function () {
    pantalla.value += seis.textContent;
});

let siete = document.getElementById("siete");
siete.addEventListener("click", function () {
    pantalla.value += siete.textContent;
});

let ocho = document.getElementById("ocho");
ocho.addEventListener("click", function () {
    pantalla.value += ocho.textContent;
});
let nueve = document.getElementById("nueve");
nueve.addEventListener("click", function () {
    pantalla.value += nueve.textContent;
});

let cero = document.getElementById("cero");
cero.addEventListener("click", function () {
    pantalla.value += cero.textContent;
});

let punto = document.getElementById("punto");
punto.addEventListener("click", function () {
    pantalla.value += punto.textContent;
});

let parentesisIzquierdo = document.getElementById("parentesisIzquierdo");
parentesisIzquierdo.addEventListener("click", function () {
    pantalla.value += parentesisIzquierdo.textContent;
});

let parentesisDerecho = document.getElementById("parentesisDerecho");
parentesisDerecho.addEventListener("click", function () {
    pantalla.value += parentesisDerecho.textContent;
});

let sumar = document.getElementById("sumar");
sumar.addEventListener("click", function () {
    pantalla.value += sumar.textContent;
});

let restar = document.getElementById("restar");
restar.addEventListener("click", function () {
    pantalla.value += restar.textContent;
});

let multiplicar = document.getElementById("multiplicar");
multiplicar.addEventListener("click", function () {
    pantalla.value += "*";
});

let dividir = document.getElementById("dividir");
dividir.addEventListener("click", function () {
    pantalla.value += dividir.textContent;
});

/* ------------------------------------------------------------------
Funcion igual:
Se creo la variable igual a la cual se le asigo el Id igual.
Se agrego un event listener de click a esa variable a la cual se le asigno una funcion anonima
la cual evalua si la pantalla esta vacia y evitar el "undefined". Si no lo esta el metodo eval
evalua la expresion descrita en pantalla
*/

let igual = document.getElementById("igual");
igual.addEventListener("click", function () {
    pantalla.value == "" ? pantalla.value = "" : pantalla.value = eval(pantalla.value);
});