// =====================================================
// INVITACIÓN ROSEMARY & PABLO
// ====================================================

const FECHA_EVENTO = "2026-10-24T21:00:00";

// IMPORTANTE:
// Colocar el número con código de país, sin +, espacios ni guiones.
// Ejemplo Argentina: 5491123456789

const NUMERO_WHATSAPP = "5491166008018";

// Enlace de Google Maps.
// Podés reemplazarlo por el enlace exacto del salón.

const UBICACION_MAPS =
  "https://www.google.com/maps/search/?api=1&query=Salon+de+Eventos+El+Titan%2C+Riglos+5777%2C+Gonzalez+Catan%2C+Buenos+Aires";


// =====================================================
// CONTADOR REGRESIVO
// =====================================================

const elementos = {
  dias: document.getElementById("dias"),
  horas: document.getElementById("horas"),
  minutos: document.getElementById("minutos"),
  segundos: document.getElementById("segundos")
};


function actualizarContador() {
  const ahora = Date.now();
  const fechaEvento = new Date(FECHA_EVENTO).getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    elementos.dias.textContent = "00";
    elementos.horas.textContent = "00";
    elementos.minutos.textContent = "00";
    elementos.segundos.textContent = "00";
    return;
  }

  const dias = Math.floor(
    diferencia / (1000 * 60 * 60 * 24)
  );

  const horas = Math.floor(
    (diferencia / (1000 * 60 * 60)) % 24
  );

  const minutos = Math.floor(
    (diferencia / (1000 * 60)) % 60
  );

  const segundos = Math.floor(
    (diferencia / 1000) % 60
  );

  elementos.dias.textContent =
    String(dias).padStart(2, "0");

  elementos.horas.textContent =
    String(horas).padStart(2, "0");

  elementos.minutos.textContent =
    String(minutos).padStart(2, "0");

  elementos.segundos.textContent =
    String(segundos).padStart(2, "0");
}

actualizarContador();
setInterval(actualizarContador, 1000);

// =====================================================
// UBICACIÓN
// =====================================================

const mapButton = document.getElementById("mapButton");
if (mapButton) {
  mapButton.href = UBICACION_MAPS;
}

// =====================================================
// CONFIRMACIÓN DE ASISTENCIA
// =====================================================

const botonConfirmar =
  document.getElementById("confirmarAsistencia");

const campoNombre =
  document.getElementById("nombre");

const campoPersonas =
  document.getElementById("personas");

const mensajeFormulario =
  document.getElementById("form-message");

function mostrarMensaje(mensaje) {
  if (mensajeFormulario) {
    mensajeFormulario.textContent = mensaje;
  }
}

function confirmarAsistencia() {
  const nombre = campoNombre.value.trim();
  const personas = campoPersonas.value;

  if (!nombre) {

    mostrarMensaje(
      "Por favor, escribí tu nombre para continuar."
    );

    campoNombre.focus();

    return;
  }


  const cantidadTexto =
    personas === "1"
      ? "1 persona"
      : `${personas} personas`;


  const mensaje =
`Hola

Soy ${nombre}.

Confirmo mi asistencia.
Somos ${cantidadTexto}.

📅 Sábado 24 de octubre
🕘 21:00 hs
📍 Salón de Eventos El Titán
Riglos 5777, González Catán

¡Nos vemos para celebrar juntos sus 50 años! 🥂`;


  const urlWhatsApp =
    `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;


  if (NUMERO_WHATSAPP.includes("X")) {
    mostrarMensaje(
      "Primero configurá el número de WhatsApp en script.js."
    );

    return;
  }

  window.open(
    urlWhatsApp,
    "_blank",
    "noopener,noreferrer"
  );
}


if (botonConfirmar) {
  botonConfirmar.addEventListener(
    "click",
    confirmarAsistencia
  );

}


if (campoNombre) {
  campoNombre.addEventListener("input", () => {

    if (mensajeFormulario) {
      mensajeFormulario.textContent = "";
    }

  });

}