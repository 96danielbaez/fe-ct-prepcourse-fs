/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:

  auxnum = Math.round(num);
  console.log(auxnum);
  if (auxnum > 0) {
    return "Es positivo";
  } else if (auxnum < 0) {
    return "Es negativo";
  } else {
    return false;
  }
}

console.log(esPositivo(5));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:

  console.log(str);

  auxstr = str + "!";
  console.log(auxstr);

  return auxstr;
}

console.log(agregarSimboloExclamacion("Tengo frio"));

function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:

  auxcombinar = nombre + " " + apellido;

  return auxcombinar;
}

console.log(combinarNombres("Soy", "Henry"));

function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:

  auxNombre = "Hola" + " " + nombre + "!";
  return auxNombre;
}

console.log(obtenerSaludo("Martin"));

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el área de un rectángulo teniendo su altura y ancho.
  // Tu código:

  console.log(alto, ancho);

  area = alto * ancho;
  return area;
}

console.log(obtenerAreaRectangulo(8, 5));

function retornarPerimetro(lado) {
  // La función recibe como argumento la medida de un lado de un cuadrado.
  // Debes retornar su perímetro.
  // Tu código:

  console.log(lado);

  perimetro = lado * 4;
  return perimetro;
}

console.log(retornarPerimetro(5));

function areaDelTriangulo(base, altura) {
  // Calcula el área de un triángulo y retorna el resultado.
  // Tu código:
  area = (base * altura) / 2;
  return area;
}

console.log(areaDelTriangulo(10, 5));

function deEuroAdolar(euro) {
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Debes calcular el valor recibido como argumento pasándolo a dolares.
  // Tu código:

  dolar = euro * 1.2;
  dolar = Math.round(dolar);
  return dolar;
}

console.log(deEuroAdolar(100));

function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  console.log(letra);
  letra = letra.toLowerCase(); // Paso de mayuscula a minuscula
  aux = letra.length;
  console.log(aux); // Calculo el tamaño del string
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    (letra === "u" && aux === 1)
  ) {
    return "Es vocal"; // Si es vocal y además es un solo caracter retorno "Es Vocal".
  } else {
    return "Dato incorrecto"; // Si no cumple la condición retorno "Dato Incorrecto".
  }
}

console.log(esVocal("A"));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
