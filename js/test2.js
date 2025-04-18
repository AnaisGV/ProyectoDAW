const preguntas = [
  {
    pregunta: "¿Qué es el ransomware?",
    opciones: [
      "Un tipo de virus que roba contraseñas",
      "Un malware que cifra tus archivos y pide rescate",
      "Un programa espía de red"
    ],
    respuesta: 1
  },
  {
    pregunta: "¿Cuál es una señal común de phishing?",
    opciones: [
      "Correos con errores gramaticales y enlaces sospechosos",
      "Correos internos de tu empresa",
      "Mensajes con tu nombre y apellido"
    ],
    respuesta: 0
  },
  {
    pregunta: "¿Qué hace el spyware?",
    opciones: [
      "Monitorea tu actividad en secreto",
      "Destruye archivos del sistema",
      "Borra tus redes sociales"
    ],
    respuesta: 0
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

  // Opcional: desactivar botones para evitar varias respuestas
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
