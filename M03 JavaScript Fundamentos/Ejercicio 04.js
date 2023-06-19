/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // Retorna el valor de "num" elevado al cuadrado.
  // Tu código:

  console.log(num);
  elevado = Math.pow(num, 2);
  return elevado;
}

console.log(elevarAlCuadrado(10));

function elevarAlCubo(num) {
  // Retorna el valor de "num" elevado al cubo.
  // Tu código:

  console.log(num);

  elevado = Math.pow(num, 3);
  return elevado;
}

console.log(elevarAlCubo(5));

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:

  console.log(num, exponent);

  elevado = Math.pow(num, exponent);
  return elevado;
}

console.log(elevar(10, 3));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y retórnalo.
  // Tu código:

  console.log(num);
  redondear = Math.round(num);
  return redondear;
}

console.log(redondearNumero(4.15));

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:

  console.log(num);

  redondear = Math.ceil(num);
  return redondear;
}

console.log(redondearHaciaArriba(134.78));

function numeroRandom(a) {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:

   a = Math.random();
   return a;

}

console.log(numeroRandom());

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
};
