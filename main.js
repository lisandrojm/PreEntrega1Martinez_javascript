// Bienvenida
alert(
  "Bienvenido a Freelander Calculator. Una herramienta simple para que usted sepa cuanto cobrar como freelancer."
);

// Ingreso de la moneda para hacer el calculo
let moneda = prompt(
  "Ingrese la moneda con la que desea hacer el cálculo:"
).toLowerCase();

while (moneda !== "dolar" && moneda !== "dolares") {
  switch (moneda) {
    case "pesos":
    case "peso":
      alert(
        "Usted está loco?. Cómo va a calcular en pesos jaja? Esa moneda devalúa constantemente. Elija bien."
      );
      break;
    case "euro":
    case "euros":
    case "libra":
    case "libras":
      alert(
        "No le conviene hacer el cálculo con esa moneda. Le recomendamos elegir la moneda de intercambio y ahorro a nivel mundial por excelencia. Pista: Es de color verde."
      );
      break;
    default:
      alert("Usted no ingresó una moneda de curso legal o el sistema no puede hacer el cálculo con esa moneda.");
      break;
  }
  moneda = prompt(
    "Ingrese la moneda con la que desea hacer el cálculo:"
  ).toLowerCase();
}


alert(`Felicitaciones usted ingresó ${moneda}, la moneda internacional por excelencia`)

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
