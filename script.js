/* ======= CONFIG: agrega aquí tus canciones =======
   Cada objeto: { nombre: "Nombre - Artista", link: "https://www.youtube.com/..." }
   Solo edita el array `canciones` más abajo.
*/
const canciones = [
  // Ejemplos — reemplázalos con las tuyas
  { nombre: "TU TU TU — ", link: "https://www.youtube.com/watch?v=xxxxx" },
  { nombre: "Faldita — Eslabón Armado", link: "https://www.youtube.com/watch?v=xxxxx" },
  { nombre: "Con Tus Besos — Eslabón Armado", link: "https://www.youtube.com/watch?v=xxxxx" },
  { nombre: "XOXO — Eslabón Armado", link: "https://www.youtube.com/watch?v=xxxxx" },
  { nombre: "NO VOY A JUGAR — Eslabón Armado", link: "https://www.youtube.com/watch?v=xxxxx" }
];

const listEl = document.getElementById("songList");
const counterEl = document.getElementById("counter");

function actualizarContador(){
  const total = canciones.length;
  let escuchadas = 0;
  canciones.forEach((_, i) => {
    if (localStorage.getItem("song_" + i) === "true") escuchadas++;
  });
  counterEl.textContent = escuchadas + " / " + total;
}

function crearLista(){
  canciones.forEach((c, i) => {
    const li = document.createElement("li");
    li.className = "song-item";

    // Enlace
    const a = document.createElement("a");
    a.href = c.link;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = c.nombre;
    a.title = "Abrir en YouTube";

    // Checkbox
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.dataset.id = i;
    cb.setAttribute("aria-label", "Marcar canción escuchada");

    // Recuperar estado guardado
    if (localStorage.getItem("song_" + i) === "true") cb.checked = true;

    // Evento: al cambiar guardamos en localStorage y actualizamos contador
    cb.addEventListener("change", () => {
      localStorage.setItem("song_" + i, cb.checked);
      actualizarContador();
    });

    li.appendChild(a);
    li.appendChild(cb);
    listEl.appendChild(li);
  });

  actualizarContador();
}

/* Inicialización */
crearLista();
