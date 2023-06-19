/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
  // Debe retornar un string.
  // Tu código:
  string = "Henry";
  auxStr = string;
  return auxStr;
}
devolverString();

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
  // Retorna el resultado de su suma.
  // Tu código:
  auxSuma = x + y;
  return auxSuma;
}
suma(12, 5);

function resta(x, y) {
  // Retorna el resultado de la resta.
  // Tu código:
  auxResta = x - y;
  return auxResta;
}
resta(100, 50);

function divide(x, y) {
  // Retorna el resultado de su división.
  // Tu código:
  auxDivide = x / y;
  return auxDivide;
}
divide(10,2);


function multiplica(x, y) {
  // Retorna el resultado de su multiplicación.
  // Tu código:
  auxMulti = x * y;
  return auxMulti;
}
multiplica(2,5);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  auxMod = x % y;
  return auxMod;
}
obtenerResto(54,5);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverString,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
};
