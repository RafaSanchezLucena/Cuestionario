import { data } from "./data.js";

// Selección de los botones/texto y asignación de valores
const tituloPregunta = document.querySelector(".titulo-pregunta");
const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
const boton4 = document.querySelector(".boton4");
const informacionRespuesta = document.querySelector(".informacion-respuesta");
const numeracionPreguntas = document.querySelector(".contador");

// Clase principal
class Pregunta {
  constructor(pregunta, opcion1, opcion2, opcion3, respuesta, preguntaNumero) {
    this.pregunta = pregunta;
    this.opcion1 = opcion1;
    this.opcion2 = opcion2;
    this.opcion3 = opcion3;
    this.respuesta = respuesta;
    this.preguntaNumero = preguntaNumero;
  }
}

// Creamos un array con todos los objetos de data
const question = data.map(
  (pregunta) =>
    new Pregunta(
      pregunta.pregunta,
      pregunta.opcion1,
      pregunta.opcion2,
      pregunta.opcion3,
      pregunta.respuesta,
      pregunta.preguntaNumero
    )
);

var puntuacion = 0;
var nombre;
var valorBoton;

// Función principal del programa
function comprobar(i) {
  if (i === 0) {
    nombre = prompt("Hola, ¿cómo te llamas?");
  };

  informacionRespuesta.textContent = "";
  tituloPregunta.textContent = question[i].pregunta;
  boton1.value = question[i].opcion1;
  boton2.value = question[i].opcion2;
  boton3.value = question[i].opcion3;
  boton4.value = "Siguiente";
  numeracionPreguntas.textContent = "Pregunta nº " + question[i].preguntaNumero;

  boton1.onclick = function () {
    valorBoton = boton1.value;
    comprobarResultado();    
  };

  boton2.onclick = function () {
    valorBoton = boton2.value;
    comprobarResultado();
  };

  boton3.onclick = function () {
    valorBoton = boton3.value;
    comprobarResultado();
  };

  function comprobarResultado() {
    if (valorBoton === question[i].respuesta) {
      puntuacion++;
      informacionRespuesta.textContent = "¡¡ CORRECTO !!";
      informacionRespuesta.style.color = "green";
    } else {
      informacionRespuesta.textContent = "Lo siento, es incorrecto.";
      informacionRespuesta.style.color = "red";
    }
  }
};

let i = 0;

// Función que inicia la aplicación cargando una pregunta cada vez
boton4.onclick = function () {
  if (i <= 14) {
    comprobar(i);
  } else {
    alert(`Enhorabuena ${nombre}, has acertado ${puntuacion} preguntas.`);
  };
  i++;
};;
