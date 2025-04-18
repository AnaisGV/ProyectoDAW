const preguntas = [
  {
    pregunta: "¿Qué debes hacer antes de abrir archivos adjuntos en correos?",
    opciones: [
      "Abrirlos directamente",
      "Verificar el remitente y el tipo de archivo",
      "Responder para preguntar qué es"
    ],
    respuesta: 1
  },
  {
    pregunta: "¿Es seguro conectarse a redes Wi-Fi públicas sin VPN?",
    opciones: [
      "Sí, si tiene buena señal",
      "No, puede comprometer tu información",
      "Sí, si usas navegador en incógnito"
    ],
    respuesta: 1
  },
  {
    pregunta: "¿Cada cuánto deberías cambiar tus contraseñas?",
    opciones: [
      "Nunca, si son buenas",
      "Cada 6 meses o si hay filtraciones",
      "Solo si las olvidas"
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
