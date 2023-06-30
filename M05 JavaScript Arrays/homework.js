/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:

  console.log(array);
  return array[0];
}

console.log(devolverPrimerElemento((vector = [1, 2, 3, 4, 5])));

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:

  console.log(array);
  return array[array.length - 1];
}

console.log(devolverUltimoElemento((vector = [1, 2, 3, 4, 5])));

function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido por parámetro.
  // Tu código:

  console.log(array);
  return array.length;
}

console.log(obtenerLargoDelArray((vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])));

function incrementarPorUno(array) {
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:

  console.log(array);

  masUno = array.map((array) => array + 1);

  return masUno;
}

console.log(incrementarPorUno((vector = [1, 2, 3, 4])));

function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  console.log(array);
  console.log(elemento);
  console.log(array.push(elemento));
  return array;
}

console.log(agregarItemAlFinalDelArray((vector = [1, 2, 3]), 4));

function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  console.log(array);
  console.log(elemento);
  console.log(array.unshift(elemento));
  return array;
}

console.log(agregarItemAlComienzoDelArray((vector = [2, 3, 4]), 1));

function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:

  console.log(palabras);
  console.log((palabras = palabras.join(" ")));
  return palabras;
}

console.log(dePalabrasAFrase((vector = ["Hello", "world!"])));

function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:

  console.log(array);
  console.log(elemento);

  return array.includes(elemento);
}

console.log(arrayContiene((vector = [1, 2, 3, 4, 5]), 1));

function agregarNumeros(arrayOfNums) {
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:

  console.log(arrayOfNums);
  console.log(arrayOfNums.length);
  total = 0;
  for (i = 0; i < arrayOfNums.length; i++) {
    console.log((total = total + arrayOfNums[i]));
  }

  return total;
}

console.log(agregarNumeros((vector = [1, 2, 3, 4, 5])));

function promedioResultadosTest(resultadosTest) {
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:

  console.log(resultadosTest);
  cant = 0;

  for (i = 0; i < resultadosTest.length; i++) {
    console.log((cant = cant + resultadosTest[i]));
  }

  console.log((promedio = cant / resultadosTest.length));
  return promedio;
}

console.log(promedioResultadosTest((vector = [10, 8, 5, 6, 1])));

function numeroMasGrande(arrayOfNums) {
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:

  console.log(arrayOfNums);
  acum = 0;

  for (i = 0; i < arrayOfNums.length; i++) {
    if (acum < arrayOfNums[i]) {
      acum = arrayOfNums[i];
    }
  }

  console.log(acum);
  return acum;
}

console.log(numeroMasGrande((vector = [1, 100, 3, 250, 99, 76])));

function multiplicarArgumentos(argumentos) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  console.log(argumentos);
  producto = 1;

  if (argumentos == 0) {
    producto = 0;
  } else {
    for (i = 0; i < argumentos.length; i++) {
      producto = producto * argumentos[i];
    }
  }

  return producto;
}

console.log(multiplicarArgumentos((vector = [1, 5, 2, 3])));

function cuentoElementos(array) {
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:

  console.log(array);
  /*cant = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 18) {
      cant++;
    }
  }*/
  cant = 0;
  array.forEach((num) => {
    if (num > 18) {
      cant++;
    }
  });

  console.log(cant);
  return cant;
}

console.log(cuentoElementos((vector = [18, 1, 4, 23, 55, 66, 17])));

function diaDeLaSemana(numeroDeDia) {
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:

  console.log(numeroDeDia);

  vector = [1, 2, 3, 4, 5, 6, 7];

  vector.forEach((numeroDeDia) => {
    if (
      numeroDeDia == 1 ||
      numeroDeDia == 2 ||
      numeroDeDia == 3 ||
      numeroDeDia == 4 ||
      numeroDeDia == 5
    ) {
      estado = "Es dia laboral";
    } else if (numeroDeDia == 6 || numeroDeDia == 7) {
      estado = "Es fin de semana";
    }
  });

  return estado;
}

console.log(diaDeLaSemana(7));

function empiezaConNueve(num) {
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:

  console.log(num);
  console.log((str = num + "")); // Convertimos entero a string
  console.log((vec = str.split(""))); // String a vector

  if (vec[0] == "9") {
    estado = true;
  } else {
    estado = false;
  }

  return estado;
}

console.log(empiezaConNueve(4123));

function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:

  console.log(array);
  sonI = (x) => x == array[0];
  console.log((estado = array.every(sonI)));
  return estado;
}

console.log(todosIguales((vector = [2, 2, 2, 2])));

function mesesDelAño(array) {
  // El arreglo contiene algunos meses del año desordenados.
  // Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  console.log(array);

  vector = [];

  console.log(vector);
  array.forEach((mes) => {
    if (mes == "Enero" || mes == "Marzo" || mes == "Noviembre") {
      vector.push(mes);
    }
  });
  console.log(vector);

  if (vector.length == 3) {
    return vector;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

console.log(
  mesesDelAño(
    (vector = [
      "Enero",
      "Agosto",
      "Septiembre",
      "Diciembre",
      "Marzo",
      "Octubre",
      "Noviembre",
    ])
  )
);

function tablaDelSeis() {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
  resultados = [];
  for (i = 0; i <= 10; i++) {
    resultados[i] = i * 6;
  }
  return resultados;
}

console.log(tablaDelSeis());

function mayorACien(array) {
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:

  console.log(array);
  mayor100 = [];

  array.forEach((x) => {
    if (x > 100) {
      mayor100.push(x);
    }
  });

  console.log(mayor100);
  return mayor100;
}

console.log(mayorACien((vector = [1, 200, 50, 150, 101, 123, 4])));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
}

function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
