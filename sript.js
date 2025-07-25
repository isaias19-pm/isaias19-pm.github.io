/*
  Este es un pequeño homenaje a cómo el código, al igual que el amor,
  puede ser elegante, complejo y, a veces, un poco inesperado.
*/

const tuNombre = "Mi Amor"; // ¡Reemplaza esto con el nombre de tu ser querido!
const miNombre = "Tu Admirador Secreto"; // ¡Y esto con tu nombre!

class Sentimiento {
  constructor(tipo, intensidad) {
    this.tipo = tipo;
    this.intensidad = intensidad;
  }

  expresar() {
    if (this.intensidad > 90) {
      return `¡Mi ${this.tipo} por ti, ${tuNombre}, es abrumadoramente inmenso! ❤️‍🔥`;
    } else if (this.intensidad > 60) {
      return `Siento un ${this.tipo} muy profundo por ti, ${tuNombre}. 😊`;
    } else {
      return `Mi ${this.tipo} por ti, ${tuNombre}, es un dulce murmullo. 🥰`;
    }
  }

  crecer(cantidad) {
    this.intensidad = Math.min(100, this.intensidad + cantidad);
    console.log(`El ${this.tipo} ha crecido. Nueva intensidad: ${this.intensidad}`);
  }
}

// Inicializando el amor...
const amor = new Sentimiento("Amor", 95);
const admiracion = new Sentimiento("Admiración", 88);
const felicidad = new Sentimiento("Felicidad", 92);

console.log(`${miNombre} te envía este mensaje:`);
console.log(amor.expresar());
console.log(admiracion.expresar());
console.log(felicidad.expresar());

// El amor, como el código, puede evolucionar
amor.crecer(3); // ¡Un poquito más de amor cada día!

console.log("\nUn pequeño extra:");

function despertarPensamiento(nombre) {
  return `Cada línea de mi código, cada pensamiento, me lleva a ti, ${nombre}.`;
}

console.log(despertarPensamiento(tuNombre));

// Una función para recordar momentos especiales
function recordarMomento(descripcion) {
  return `Recordando el momento cuando ${descripcion}. Es un "bug" hermoso en mi memoria. 😉`;
}

console.log(recordarMomento("te vi por primera vez"));

/*
  Aunque este es solo un código, espero que te saque una sonrisa.
  Eres la sintaxis perfecta en el algoritmo de mi vida.
*/