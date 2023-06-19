/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:

  console.log(x);
  console.log(y);

  if (x === y) {
    return true;
  } else {
    return false;
  }
}

console.log(sonIguales(10, 5));

function tienenMismaLongitud(str1, str2) {
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  auxLong1 = str1.length;
  console.log(auxLong1);

  auxLong2 = str2.length;
  console.log(auxLong2);

  if (auxLong1 === auxLong2) {
    return true;
  } else {
    return false;
  }
}
console.log(tienenMismaLongitud("asado", "auto"));

function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:

  console.log(num);

  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

console.log(menosQueNoventa(25));

function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:

  console.log(num);

  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

console.log(mayorQueCincuenta(55));

function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  console.log(num);

  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(20));

function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:

  console.log(num);

  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esImpar(13));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  esPar,
  esImpar,
};
