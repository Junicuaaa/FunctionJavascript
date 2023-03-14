/* Declaración */
function saludar() {
    return "Hola";
  }
  
  saludar(); // 'Hola'
  typeof saludar; // 'function'

/* Funciones por expresion */

const saludo = function saludar() {
    return "Hola";
  };
  
  saludo(); // 'Hola'
  /* Funciones anonimas */

  // Función anónima "saludo"
const saludo2 = function () {
    return "Hola";
  };
  
  saludo2; // ƒ () { return 'Hola'; }
  saludo2(); // 'Hola'

  /* Callbacks */

  // fB = Función B
const fB = function () {
    console.log("Función B ejecutada.");
  };
  
  // fA = Función A
  const fA = function (callback) {
    callback();
  };
  
  fA(fB);

  /* Funciones autoejecutadas */

  // Función autoejecutable
(function () {
    console.log("Hola!!");
  })();
  
  // Función autoejecutable con parámetros
  (function (name) {
    console.log(`¡Hola, ${name}!`);
  })("Manz");

  /* Clausuras */
// Clausura: Función incr()
const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
  })();
  
  typeof incr; // 'function'
  incr(); // 1
  incr(); // 2
  incr(); // 3
  
  
/* Arrow Function */
const func = function () {
    return "Función tradicional.";
  };
  
  const func2 = () => "Función flecha.";