// Lista de canciones (puedes agregar todas las que quieras)
const songs = [
  { name: "TU TU TU – Clave Especial x Edgardo Nuñez", url: "https://youtu.be/XXXX" },
  { name: "Faldita – Eslabón Armado", url: "https://youtu.be/XXXX" },
  { name: "Con Tus Besos – Eslabón Armado", url: "https://youtu.be/XXXX" },
  { name: "XOXO – Eslabón Armado", url: "https://youtu.be/XXXX" },
  { name: "NO VOY A JUGAR – Eslabón Armado", url: "https://youtu.be/XXXX" },
  { name: "Eres Arte <3 – Eslabón Armado", url: "https://youtu.be/XXXX" }
];

// Renderizar canciones
const songList = document.getElementById("songList");
const counter = document.getElementById("counter");

let savedState = JSON.parse(localStorage.getItem("songProgress")) || {};

function renderSongs() {
  songList.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.classList.add("song-item");

    li.innerHTML = `
      <a class="song-link" href="${song.url}" target="_blank">${song.name}</a>
      <input type="checkbox" class="song-check" data-id="${index}">
    `;

    songList.appendChild(li);
  });

  document.querySelectorAll(".song-check").forEach(check => {
    const id = check.getAttribute("data-id");

    // Restaurar estado desde localStorage
    if (savedState[id]) check.checked = true;

    check.addEventListener("change", updateProgress);
  });

  updateCounter();
}

function updateProgress() {
  const id = this.getAttribute("data-id");
  savedState[id] = this.checked;
  localStorage.setItem("songProgress", JSON.stringify(savedState));
  updateCounter();
}

function updateCounter() {
  const total = Object.values(savedState).filter(v => v).length;
  counter.textContent = total;
}

renderSongs();
