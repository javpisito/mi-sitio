/* ======= CONFIG: agrega aquí tus canciones =======
   Cada objeto: { nombre: "Nombre - Artista", link: "https://www.youtube.com/..." }
   Solo edita el array `canciones` más abajo.
*/
const canciones = [
  // Ejemplos — reemplázalos con las tuyas
  { nombre: "TU TU TU  ", link: "https://www.youtube.com/watch?v=JDwE_is53mo" },
  { nombre: "Faldita ", link: "https://www.youtube.com/watch?v=LD4lwGnBN94" },
  { nombre: "Con Tus Besos ", link: "https://www.youtube.com/watch?v=r7UL8KuH3mY" },
  { nombre: "XOXO ", link: "https://www.youtube.com/watch?v=AB5L5_lVmtw&pp=ygUEeG94bw%3D%3D" },
  { nombre: "NO VOY A JUGAR ", link: "https://www.youtube.com/watch?v=YJqSM2wMEI8&pp=ygUObm8gdm95IGEganVnYXI%3D" },
  { nombre: "Eres Arte <3", link: "https://www.youtube.com/watch?v=1TX64OWa2pc&pp=ygUJZXJlcyBhcnRl" },
  { nombre: "Peliculiando", link: "https://www.youtube.com/watch?v=CkxN1dDtTOk&pp=ygUMcGVsaWN1bGlhbmRv" },
  { nombre: "Por Esos Ojos", link: "https://www.youtube.com/watch?v=IpgbHjhiotg&pp=ygUNUG9yIGVzb3Mgb2pvcw%3D%3D" },
  { nombre: "Hecha Pa' Mí (Mia)", link: "https://www.youtube.com/watch?v=IbE7peGTpmc" },
  { nombre: "ROCKSTAR", link: "https://www.youtube.com/watch?v=XpwOXEnQDXg&pp=ygUIcm9ja3N0YXI%3D" },
  { nombre: "Tus Vueltas", link: "https://www.youtube.com/watch?v=SOXYr6CsUJU&pp=ygULVHVzIHZ1ZWx0YXM%3D" },
  { nombre: "Mi Bello Angel", link: "https://www.youtube.com/watch?v=hkrBbBJg3S4&pp=ygUOTWkgYmVsbG8gYW5nZWw%3D" },
  { nombre: "Eres", link: "https://www.youtube.com/watch?v=AAYGTykWs34&pp=ygUEZXJlcw%3D%3D" },
  { nombre: "Baja Beach", link: "https://www.youtube.com/watch?v=hQTKvRTz8Nw&pp=ygUKYmFqYSBiZWFjaA%3D%3D" },
  { nombre: "Asquerosamente Rico", link: "https://www.youtube.com/watch?v=7jT06YNI-qk&pp=ygUgYXNxdWVyb3NhbWVudGUgcmljbyBvc2NhciBtYXlkb24%3D" },
  { nombre: "Flores", link: "https://www.youtube.com/watch?v=EN42A4x0CjU&pp=ygUGZmxvcmVz" },
  { nombre: "P.Y.T", link: "https://www.youtube.com/watch?v=1ZZQuj6htF4&pp=ygUFcC55LnQ%3D" },
  { nombre: "Rock With You (Formo parte de mi infancia <3)", link: "https://www.youtube.com/watch?v=5X-Mrc2l1d0&pp=ygUNUm9jayB3aXRoIHlvdQ%3D%3D" },
  { nombre: "U Deserve", link: "https://www.youtube.com/watch?v=P0rGRtV-8Ms&pp=ygUJdSBkZXNlcnZl" },
  { nombre: "luther", link: "https://www.youtube.com/watch?v=HfWLgELllZs&pp=ygUGbHV0aGVy" },
  { nombre: "Una y otra vez", link: "https://www.youtube.com/watch?v=QsRhHEIn0Nw&pp=ygUOdW5hIHkgb3RyYSB2ZXo%3D" },
  { nombre: "Bajo el agua", link: "https://www.youtube.com/watch?v=zLX_GcXt2pI&pp=ygUMYmFqbyBlbCBhZ3Vh" },
  { nombre: "cómo dormiste?", link: "https://www.youtube.com/watch?v=PSjeJrDI4a4&pp=ygUNY29tbyBkb3JtaXN0ZQ%3D%3D" },
  { nombre: "A mí", link: "https://www.youtube.com/watch?v=Q4Js9OEODHM&pp=ygUEYSBtaQ%3D%3D" },
  { nombre: "El Cielo", link: "https://www.youtube.com/watch?v=xCZuaSSL7Ws&pp=ygUIZWwgY2llbG8%3D" },
  { nombre: "CRUSH", link: "https://www.youtube.com/watch?v=heediUmXHjs&pp=ygUFY3J1c2g%3D" },
  { nombre: "Qué Pasaría...", link: "https://www.youtube.com/watch?v=g08y_x83d5E&pp=ygULcXVlIHBhc2FyaWE%3D" },
  { nombre: "Maldades", link: "https://www.youtube.com/watch?v=FffIbY79rRQ&pp=ygUIbWFsZGFkZXM%3D" },
  { nombre: "Tu Foto", link: "https://www.youtube.com/watch?v=LomAeZXsIcQ&pp=ygUHdHUgZm90bw%3D%3D" },
  { nombre: "SOPHIE RAIN", link: "https://www.youtube.com/watch?v=M8qtd1mfB-c&pp=ygULc29waGllIHJhaW4%3D" },
  { nombre: "DIME A VER", link: "https://www.youtube.com/watch?v=jc7X82NewUg&pp=ygUKZGltZSBhIHZlcg%3D%3D" },
  { nombre: "LO QUE PIDE", link: "https://www.youtube.com/watch?v=EebOzhstoPI&pp=ygULbG8gcXVlIHBpZGU%3D" },
  { nombre: "MÁS ALLÁ", link: "https://www.youtube.com/watch?v=AdXY86avUUQ&pp=ygUIbWFzIGFsbGE%3D" },
  { nombre: "Tú (Tú siempre)", link: "https://www.youtube.com/watch?v=uEs8RF4Mj6c&pp=ygUCdHU%3D" },
  { nombre: "Tuyo (siempre)", link: "https://www.youtube.com/watch?v=KSsx-eFJZFw&pp=ygUFdHV5byA%3D" },
  { nombre: "Te Conocí Perriando", link: "https://www.youtube.com/watch?v=XToFzhUvZsg&pp=ygUTdGUgY29ub2NpIHBlcnJpYW5kb9IHCQkVCgGHKiGM7w%3D%3D" },
  { nombre: "Gangster Enamorado", link: "https://www.youtube.com/watch?v=vJ8bX72V1PY&pp=ygUSZ2FuZ3N0ZXIgZW5hbW9yYWRv" },
  { nombre: "PIDA LO QUE QUIERA MAMI", link: "https://www.youtube.com/watch?v=Cy7hRREslJQ&pp=ygUXcGlkYSBsbyBxdWUgcXVpZXJhIG1hbWk%3D" },
  { nombre: "Le Pido a Dios", link: "https://www.youtube.com/watch?v=YIfCDgC6sLQ&pp=ygUObGUgcGlkbyBhIGRpb3M%3D" },
  { nombre: "California", link: "https://www.youtube.com/watch?v=Qvm9QQ7laKk&pp=ygUKY2FsaWZvcm5pYQ%3D%3D" },
  { nombre: "PRIVILEGIOS (Yo cuando no te veo)", link: "https://www.youtube.com/watch?v=ZQSlYLQLkUI&pp=ygULcHJpdmlsZWdpb3M%3D" },
  { nombre: "ROMÁNTICOS DE LUNES", link: "https://www.youtube.com/watch?v=-xNzx_9APdE&pp=ygUTcm9tYW50aWNvcyBkZSBsdW5lcw%3D%3D" },
  { nombre: "EY CHORY", link: "https://www.youtube.com/watch?v=q3YJ6_kSb9E&pp=ygUIZXkgY2hvcnk%3D" },
  { nombre: "FERXXO 151", link: "https://www.youtube.com/watch?v=ww7UQTDsPEc&pp=ygUKZmVyeHhvIDE1MQ%3D%3D" },
  { nombre: "VENTE CONMIGO", link: "https://www.youtube.com/watch?v=0-oF_x8-EAY&pp=ygUNdmVudGUgY29ubWlnbw%3D%3D" },
  { nombre: "AGAIN", link: "https://www.youtube.com/watch?v=HCJbg3F7QV8&pp=ygUFYWdhaW4%3D" },
  { nombre: "TGIF", link: "https://www.youtube.com/watch?v=G97WGRp4y28&pp=ygUEdGdpZg%3D%3D" },
  { nombre: "Me Gustas Natural (Me encantas)", link: "https://www.youtube.com/watch?v=bd5hoE39N_Q&pp=ygURbWUgZ3VzdGFzIG5hdHVyYWw%3D" },
  { nombre: "Ponte Linda", link: "https://www.youtube.com/watch?v=BxYXakqR2IA&pp=ygULcG9udGUgbGluZGE%3D" },
  { nombre: "QLOO* (Esta es muy buena)", link: "https://www.youtube.com/watch?v=u6Fkx2I2ksI&pp=ygUFcWxvbyo%3D" },
  { nombre: "CONTIGO", link: "https://www.youtube.com/watch?v=VfYDABWaLEY&pp=ygUNw7Flam8gQ09OVElHT9IHCQkVCgGHKiGM7w%3D%3D" },
  { nombre: "A Tu Merced", link: "https://www.youtube.com/watch?v=ublf6qfpuuo&pp=ygUMYSB0dSBtZXJjZWRm" },
  { nombre: "MÍA", link: "https://www.youtube.com/watch?v=OSUxrSe5GbI&pp=ygUDbWlh" },
  { nombre: "WELTiTA", link: "https://www.youtube.com/watch?v=hitCWMxsMi4&pp=ygUHd2VsdGl0YQ%3D%3D" },
  { nombre: "Arca 10Mil (Esta es de mis favoritas)", link: "https://www.youtube.com/watch?v=a0Oj8064U_g&pp=ygUKYXJjYSAxMG1pbA%3D%3D" },
  { nombre: "Los Roques", link: "https://www.youtube.com/watch?v=--5C-UgWf4M&pp=ygUKbG9zIHJvcXVlcw%3D%3D" },
  { nombre: "Brilloteo", link: "https://www.youtube.com/watch?v=JsyOyRnyxs0&pp=ygUJYnJpbGxvdGVv" },
  { nombre: "Promesa", link: "https://www.youtube.com/watch?v=TG3w7MBO1OM&pp=ygUOcHJvbWVzYSBlbGFkaW8%3D" }
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
