/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:

  console.log(nombre);
  console.log(edad);

  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    },
  };

  console.log(gato.meow());

  return gato;
}

console.log(crearGato("Molly", 5));

function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retornar el objeto.
  // Tu código:

  console.log(nombre, email, password);

  objeto = {
    nombre: nombre,
    email: email,
    password: password,
  };

  return objeto;
}

console.log(nuevoUsuario("Daniel", "correo@gmail.com", "password123"));

function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:

  console.log(objeto, propiedad);

  objeto[propiedad] = null;

  console.log(objeto);

  return objeto;
}

var objetoPrueba = {
  nombre: "Daniel",
  edad: 26,
};

console.log(agregarPropiedad(objetoPrueba, "hamster"));

function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // [NOTA]: no necesitar retornar nada.
  // Tu código:

  console.log(objeto); // RECIBO EL OBJETO
  console.log(metodo); // RECIBO UN STRING
  console.log(objeto.hasOwnProperty(metodo)); // COMPARO SI MI OBJETO TIENE UNA PROPIEDAD IGUAL
  console.log(objeto.incrementX()); // EJECUTO LA FUNCION DE MI OBJETO
}

var objetoPrueba2 = {
  x: 1,
  incrementX: function () {
    console.log(++this.x);
  },
};

console.log(invocarMetodo(objetoPrueba2, "incrementX"));

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:

  console.log(objetoMisterioso);

  console.log((x = objetoMisterioso.numeroMisterioso * 5));

  return x;
}

var objetoPrueba3 = {
  numeroMisterioso: 2,
};

console.log(multiplicarNumeroDesconocidoPorCinco(objetoPrueba3));

function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:

  console.log(objeto);
  console.log(propiedad);

  console.log(delete objeto[propiedad]); // Eliminamos la propiedad recibida
  console.log(objeto);

  return objeto;
}

var objetoPrueba4 = {
  nombre: "Daniel",
  edad: 26,
  hamster: true,
};

console.log(eliminarPropiedad(objetoPrueba4, "hamster"));

function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:

  console.log(objetoUsuario);

  if (objetoUsuario.email != null) {
    return true;
  } else if (
    objetoUsuario.email == null ||
    objetoUsuario.email == undefined ||
    objetoUsuario.email == ""
  ) {
    return false;
  }
}

var objetoPrueba5 = {
  nombre: "Daniel",
  edad: 26,
  email: "correo@gmail.com",
};

console.log(tieneEmail(objetoPrueba5));

function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:

  console.log(objeto);
  console.log(propiedad);

  console.log((chequeo = objeto.hasOwnProperty(propiedad)));

  if (chequeo) {
    return true;
  } else {
    return false;
  }
}

var objetoPrueba6 = {
  propiedad: "prueba",
};

console.log(tienePropiedad(objetoPrueba6, "propiedad"));

function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:

  console.log(objetoUsuario);
  console.log(password);

  if (objetoUsuario.password == password) {
    return true;
  } else {
    return false;
  }
}

var objetoPrueba7 = {
  usuario: "pepito123",
  password: "123",
};

console.log(verificarPassword(objetoPrueba7, "1234"));

function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:

  console.log(objetoUsuario);
  console.log(nuevaPassword);

  console.log((objetoUsuario.password = nuevaPassword));
  return objetoUsuario;
}

console.log(actualizarPassword(objetoPrueba7, "1234"));

function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:

  console.log(objetoUsuario);
  console.log(nuevoAmigo);

  console.log(objetoUsuario["amigos"].push(nuevoAmigo));
  console.log(objetoUsuario);

  return objetoUsuario;
}

var objetoPrueba8 = {
  amigos: ["Pancho", "Pedro", "Carlitos"],
};

console.log(agregarAmigo(objetoPrueba8, "Arnaldo"));

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un array de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  console.log(objetoMuchosUsuarios);
  console.log(objetoMuchosUsuarios.length); // CANTIDAD USUARIOS

  // RECORREMOS EL ARRAY

  for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
    console.log(objetoMuchosUsuarios[i]);
    objetoMuchosUsuarios[i].esPremium = true;
  }

  return objetoMuchosUsuarios;
}

muchosUsuarios = [
  { usuario: "pepito", esPremium: false },
  { usuario: "pepito", esPremium: false },
  { usuario: "pepito", esPremium: false },
  { usuario: "pepito", esPremium: false },
  { usuario: "pepito", esPremium: false },
];

console.log(pasarUsuarioAPremium(muchosUsuarios));

function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  // VEMOS SI RECIBIMOS EL OBJETO
  console.log(objetoUsuario);

  // VEMOS CANTIDAD DE POSTS
  console.log(objetoUsuario.posts.length);

  // INICIALIZAMOS EL ACUMULADOR
  cantidadDeLikes = 0;

  // RECORREMOS EL VECTOR DEL OBJETO Y SUMAMOS LIKES
  for (var i = 0; i < objetoUsuario.posts.length; i++) {
    cantidadDeLikes = objetoUsuario.posts[i].likes + cantidadDeLikes;
    console.log(cantidadDeLikes);
  }

  // CANTIDAD DE LIKES TOTALES

  return cantidadDeLikes;
}

var objetoPrueba9 = {
  usuario: "Pepito123",
  password: "1234",
  posts: [
    { id: 1, post: "prueba", likes: 5 },
    { id: 2, post: "prueba2", likes: 235 },
    { id: 3, post: "asd", likes: 3000 },
  ],
};

console.log(sumarLikesDeUsuario(objetoPrueba9));

function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.

  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:

  console.log(objetoProducto);
  objetoProducto = {
    precio: 5,
    porcentajeDeDescuento: 0.5,
    calcularPrecioDescuento: function () {
      precioDescuento = this.precio * this.porcentajeDeDescuento;
      x = this.precio - precioDescuento;
      return x;
    },
  };

  console.log(objetoProducto);

  return objetoProducto.calcularPrecioDescuento();
}

var objetoPrueba10 = {};

console.log(agregarMetodoCalculoDescuento(objetoPrueba10));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearGato,
  nuevoUsuario,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
