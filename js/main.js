//Proyecto Freelander: Una calculadora para saber cuánto cobrar como freelancer.

// alert
// Bienvienida.

alert(
  "Bienvenido a Freelo Calculator. Una herramienta simple para que usted sepa cuanto cobrar como freelancer."
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
