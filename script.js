document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("message");

  if (email === "" || pass === "") {
    msg.textContent = "Por favor completa todos los campos.";
    msg.style.color = "yellow";
    return;
  }

  // Simulación de login
  if (email === "admin@example.com" && pass === "123456") {
    msg.textContent = "Inicio de sesión exitoso 🎉";
    msg.style.color = "#00ff88";
  } else {
    msg.textContent = "Email o contraseña incorrectos ❌";
    msg.style.color = "red";
  }
});
