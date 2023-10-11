/**
 * Contesta a todas las preguntas al lado
 */

function isPositive(num) {
  return num > 0;
}

/**
 * 1. ¿Que nombre tiene esta función? isPositive
 * 2. ¿Que deberíamos escribir para ejecutar esta función? isPositive(4) ((nombre de la función + parametro ))
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean? Boolean
 * 4. El código de abajo usa la función isPositive. ¿La usa adecuadamente? ¿Por qué? Texto esta intercambiado o añadir (!isPositive(x))
 */

let x = 4;
if (isPositive(x)) {
  console.log("El número es positivo");
} else {
  console.log("El número es negativo");
}
