//Proyecto Freelander: Una calculadora para saber cuánto cobrar como freelancer.

// alert
// Bienvienida.

alert(
  "Bienvenido a Freelo Calculator. Una herramienta simple para sepas cuanto cobrar como freelancer."
);

// prompt / while / switch
// Solicitud de ingreso de la moneda para hacer el calculo.

let moneda = prompt(
  "Ingresa la moneda con la que deseas hacer el cálculo:"
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
        "¿Pero estás loco?. ¿Cómo vas a calcular en pesos jaja?. Esa moneda devalúa constantemente. Elegí bien por favor."
      );
      break;
    case "real":
    case "reales":
    case "peso uruguayo":
    case "pesos uruguayos":
    case "libra":
    case "libras":
      alert(
        "No te recomendamos hacer el cálculo con esa moneda ya que es de uso local. Elegí por favor una moneda de intercambio y ahorro a nivel mundial."
      );
      break;
    default:
      alert(
        "No ingresaste una moneda válida o el sistema no puede hacer el cálculo con esa moneda."
      );
      break;
  }
  moneda = prompt(
    "Ingresa la moneda con la que deseas hacer el cálculo:"
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

let ingresos = prompt(
  "Ingresa el monto en " +
    moneda.toLocaleUpperCase() +
    " de lo que pretendes ganar mensualmente."
).toLowerCase();

/* alert(
  "Elegiste " +
    moneda.toLocaleUpperCase() +
    ". Vas a poder hacer un cálculo correcto!"
); */

/* for (let ingresos = 0; ingresos < 1000; ingresos++) {
  alert(Hello);
} */
