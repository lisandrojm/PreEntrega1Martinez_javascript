//Proyecto Freelander: Una calculadora para saber cuánto cobrar como freelancer.

// alert
// Bienvienida.

alert(
  "Bienvenido a Freelo Calculator. Una herramienta simple para que sepas cuanto cobrar como freelancer."
);

// let / prompt / while / switch
// Solicitud de ingreso de la moneda para hacer el calculo.

let moneda = prompt(
  "Ingresa la moneda con la que deseas hacer el cálculo."
).toLowerCase();

while (
  moneda !== "dólar" &&
  moneda !== "dólares" &&
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
        "¿Pero estás loco?. ¿Cómo vas a calcular en PESOS jaja?. Esa moneda devalúa constantemente. Elige por favor una moneda estable de intercambio y ahorro a nivel mundial."
      );
      break;
    case "real":
    case "reales":
    case "peso uruguayo":
    case "pesos uruguayos":
    case "libra":
    case "libras":
      alert(
        "No te recomendamos hacer el cálculo con esa moneda ya que es de uso local. Elige por favor una moneda de intercambio y ahorro a nivel mundial."
      );
      break;
    default:
      alert(
        "No ingresaste una moneda válida o el sistema no puede hacer el cálculo con esa moneda."
      );
      break;
  }
  moneda = prompt(
    "Ingresa la moneda con la que deseas hacer el cálculo."
  ).toLowerCase();
}

// const / arrow function / if
// Cambio del string "dolar o "dólar" o "euro" de singular a plural para el caso en el que el usuario lo ingrese en singular. Para que quede bien en la redacción.

const pluralize = () => {
  if (moneda === "dolar" || moneda === "dólar") {
    moneda = "dólares";
  } else {
    moneda = "euros";
  }
};

pluralize();

let ingresos = parseInt(
  prompt(
    "Ingresa el monto en " +
      moneda.toLocaleUpperCase() +
      " de lo que pretendes ganar mensualmente."
  ).toLowerCase()
);

while (isNaN(ingresos)) {
  alert(
    "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
  );
  ingresos = parseInt(
    prompt(
      "Ingresa el monto en " +
        moneda.toLocaleUpperCase() +
        " de lo que pretendes ganar mensualmente."
    ).toLowerCase()
  );
}

alert(
  "Pretendes ganar " +
    ingresos +
    " " +
    moneda.toLocaleUpperCase() +
    " mensuales. Vamos a calcular cómo puedes lograrlo."
);
