// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Quiero compartir mi silla... contigo", time: 5 },
  { text: "Quiero ver salir el sol... y desperdirlo", time: 12 },
  { text: "Quiero caminar y correr... a tu ladito", time: 19 },
  { text: "Quiero buscar y encontrarme a solas contigo", time: 26 },
  { text: "Quiero dormir y soñar, caricias contigo", time: 31 },
  { text: "Quiero reir y llorar, con tus ojitos", time: 39 },
  { text: "Quiero compartir mis secretos y mis suspiros", time: 48 },
  { text: "Quiero aprender a entender al mundo contigo.", time: 53 },
  { text: "Pero hay una cosa que te debo decir", time: 60 },
  { text: "No es nada fácil, estar tan lejos de ¡Tí!", time: 68 },
  { text: "Porque me haces enloquecer", time: 74 },
  { text: "Tú me enchinas la piel", time: 78 },
  { text: "Cada parte de tu ser", time: 80 },
  { text: "Es alimento a mi bien.", time: 85 },
  { text: "Vuelvo a respirar", time: 89 },
  { text: "Y comienzo a temblar", time: 92 },
  { text: "Cada paso que das", time: 95 },
  { text: "Afirmas mi amar", time: 100 },
  { text: "Busco dormirme en tus ojos y en tus sentidos", time: 103 },
  { text: "Busco derramar mi querer por tus oídos", time: 109 },
  { text: "Busco rendir mi ser y volar contigo", time: 118 },
  { text: "Quisiera compartir toda mi vida contigo.", time: 124 },
  { text: "Pero hay una cosa que te debo decir", time: 130 },
  { text: "No es nada fácil, estar tan lejos de ¡Tí!", time: 138 },
  { text: "Porque me haces enloquecer", time: 144 },
  { text: "Cada parte de tu ser", time: 150 },
  { text: "Es alimento a mi bien", time: 153 },
  { text: "Vuelvo a respirar.", time: 157 },
  { text: "Y comienzo a temblar.", time: 160 },
  { text: "Cada paso que das.", time: 162 },
  { text: "Afirmas mi amar.", time: 164 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);