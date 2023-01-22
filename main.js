// alert
// Bienvienida.

alert(
  "Bienvenido a Freelander Calculator. Una herramienta simple para que usted sepa cuanto cobrar como freelancer."
);

// prompt / while / switch
// Solicitud de ingreso de la moneda para hacer el calculo.

let moneda = prompt(
  "Ingrese la moneda con la que desea hacer el cálculo:"
).toLowerCase();

while (
  moneda !== "dolar" &&
  moneda !== "dolares" &&
  moneda !== "euro" &&
  moneda !== "euros"
) {
  switch (moneda) {
    case "peso":
    case "pesos":
    case "peso argentino":
    case "pesos argentinos":
      alert(
        "¿Usted está loco?. ¿Cómo va a calcular en pesos jaja?. Esa moneda devalúa constantemente. Elija bien por favor."
      );
      break;
    case "real":
    case "reales":
    case "peso uruguayo":
    case "pesos uruguayos":
    case "libra":
    case "libras":
      alert(
        "No le recomendamos hacer el cálculo con esa moneda ya que es de uso local. Elija por favor una moneda de intercambio y ahorro a nivel mundial."
      );
      break;
    default:
      alert(
        "Usted no ingresó una moneda válida o el sistema no puede hacer el cálculo con esa moneda."
      );
      break;
  }
  moneda = prompt(
    "Ingrese la moneda con la que desea hacer el cálculo:"
  ).toLowerCase();
}

// arrow function // if //
// Cambio del string "dolar" o "euro" de singular a plural para el caso en el que el usuario lo ingrese en singular. Para que quede bien en la redacción.

const pluralize = () => {
  if (moneda === "dolar") {
    moneda = "dolares";
  } else {
    moneda = "euros";
  }
};

pluralize();

alert(
  "Usted eligió " +
    moneda.toLocaleUpperCase() +
    ". Va a poder hacer un cálculo correcto"
);

// FOR CLASICO

// let numeroIngresado = parseInt(
//   prompt("Ingrese un numero para mostrar la tabla de multiplicar")
// ); // 2
// i = 2
// for (let i = 0; i < 10; i++) {
//   let resultado = numeroIngresado * i; // 2, 4
//   console.log(numeroIngresado + " X " + i + " = " + resultado);
// }

// FOR CLASICO CON BREAK

// for (let i = 1; i <= 20; i++) {
//   let nombre = prompt("ingresamos un nombre");
//   console.log("Turno N° " + i + " Nombre:" + nombre);
//   if (i == 5 || i == 2) {
//     console.log("Llegamos al 2, asi que rompemos con break");
//     break;
//   }
// }

// FOR CLASICO CON CONTINUE

// for (let n = 1; n <= 10; n++) {
//   console.log(n);
//   if (n == 3) {
//     break;
//   }
//   if (n == 5) {
//     continue;
//   }
// }

// WHILE

// let entrada = prompt("Ingrese un dato");

// while (entrada != "ESC") { // mientras entrada(ESC) !== 'ESC'
//   // se ejecuta esto mientras sea distinto de ESC

//   console.log("Usted ingreso " + entrada);
//   entrada = prompt("Ingrese un dato"); // ESC
// }

// DO WHILE (AL MENOS UNA VEZ )

// let repetir = false;

// do {
//   console.log("Al menos una vez");
// } while (repetir);

// let numero = 0; // el cero es como un false, y todo lo que es distinto a cero es verdadero(1,2,3,.... infinito)
// do {
//   //Repetimos con do...while mientras el usuario ingresa un n°
//   numero = prompt("Ingresar Número");
//   console.log(numero);
//   //Si el parseo no resulta un número se interrumpe el bucle.
// } while (parseInt(numero)); // 2, para javascript esto es verdadero

// SWITCH

// let entrada = prompt(
//   "Ingresar un nombre o escriba salir para terminar la ejecucion"
// );
// //Repetimos hasta que se ingresa "salir"
// while (entrada != "salir") {
//   switch (entrada) {
//     case "ANA":
//       alert("HOLA ANA");
//       break;
//     case "JUAN":
//       alert("HOLA JUAN");
//       break;
//     case "PEPE":
//       alert("HOLA PEPE");
//       // mucho mas codigo
//       break;
//     default:
//       alert("¿QUIÉN SOS?");
//       break;
//   }

//   entrada = prompt("Ingresar un nombre");
// }

// let numeroIngresado = parseInt(prompt("Ingrese un numero"));
// for (let i = 1; i <= 10; i++) {
//   let resultado = numeroIngresado * i;
//   console.log(numeroIngresado + " X " + i + " = " + resultado);
// }
// while (numeroIngresado != 5) {
//   switch (numeroIngresado) {
//     case "6":
//       alert("No es el 6");
//       break;
//     case "7":
//       alert("No es el 7");
//       break;
//     default:
//       alert("No se si esto va a funcionar");
//   }
//   prompt("Ingrese un numero");
// }
