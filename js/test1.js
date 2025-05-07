const preguntas = [
  {
    pregunta: "¿Qué es la ciberseguridad?",
    opciones: [
      "Proteger redes y sistemas informáticos de ataques",
      "Hacer copias de seguridad locales",
      "Controlar el hardware"
    ],
    respuesta: 0
  },
  {
    pregunta: "¿Qué es una contraseña segura?",
    opciones: [
      "123456",
      "Tu nombre con la fecha de nacimiento",
      "Una combinación de letras, números y símbolos"
    ],
    respuesta: 2
  },
  {
    pregunta: "¿Cuál es un ejemplo de un dato sensible?",
    opciones: [
      "Tu película favorita",
      "Tu correo personal y número de cuenta",
      "El modelo de tu móvil"
    ],
    respuesta: 1
  }
];

let indiceActual = 0;
let aciertos = 0;
let respondida = false; // NUEVO

function mostrarPregunta() {
  const preguntaObj = preguntas[indiceActual];
  document.getElementById("pregunta").textContent = preguntaObj.pregunta;

  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";

  preguntaObj.opciones.forEach((opcion, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.onclick = () => verificarRespuesta(index, btn); // añadimos `btn`
    opcionesDiv.appendChild(btn);
  });

  respondida = false; // reiniciamos al cargar una nueva pregunta
}

function verificarRespuesta(opcionSeleccionada, boton) {
  if (respondida) return; // Evita que se pueda responder más de una vez

  if (opcionSeleccionada === preguntas[indiceActual].respuesta) {
    aciertos++;
  }

  document.getElementById("resultado").textContent = `Respuesta registrada. Pulsa "Siguiente".`;
  respondida = true;

  // desactiva el boton para evitar varias respuestas
  const botones = document.querySelectorAll("#opciones button");
  botones.forEach(b => {
    b.disabled = true;
    if (b === boton) b.style.backgroundColor = "#d1e7dd"; // marcar seleccionada (verde claro)
  });
}

function siguientePregunta() {
  if (!respondida) {
    alert("Por favor, responde antes de continuar.");
    return;
  }

  indiceActual++;
  document.getElementById("resultado").textContent = "";

  if (indiceActual < preguntas.length) {
    mostrarPregunta();
  } else {
    document.getElementById("quiz").innerHTML = `<h2>Resultado final</h2><p>Has acertado ${aciertos} de ${preguntas.length} preguntas.</p>`;
  }
}

window.onload = mostrarPregunta;

