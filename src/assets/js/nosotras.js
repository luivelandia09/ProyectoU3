console.log("Hola");

const form =
  document.querySelector(".form-experiencia") ||
  document.querySelector(".experiencia form");
if (!form) {
  console.warn(
    "Formulario de experiencia no encontrado (selector .form-experiencia)"
  );
} else {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const campoIds = ["Nombres", "Correo", "Experiencia"];
    const campos = campoIds.map((id) => document.getElementById(id));

    let vacios = false;

    for (let i = 0; i < campos.length; i++) {
      const campo = campos[i];
      if (!campo || campo.value.trim() === "") {
        const nombreCampo = campo ? campo.id : campoIds[i];
        alert("Por favor llenar este campo: " + nombreCampo);
        if (campo) campo.style.border = "2px solid red";
        vacios = true;
        break;
      } else {
        campo.style.border = "2px solid green";
      }
    }

    if (vacios) return;

    console.log("Experiencia enviada: ", campos[2].value);

    const button =
      this.querySelector("button") ||
      document.querySelector(".form-experiencia button");
    if (button) {
      const originalText = button.textContent;
      button.textContent = "Enviando ....";
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    }

    // Mensaje de confirmación
    const mensaje = document.createElement("p");
    mensaje.textContent = "✅ ¡Gracias por compartir tu experiencia!";
    mensaje.style.color = "green";
    mensaje.style.fontWeight = "bold";
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "25px";
    mensaje.style.opacity = 0;
    mensaje.style.transition = "opacity 0.6s ease";

    this.appendChild(mensaje);

    setTimeout(() => (mensaje.style.opacity = 1), 50);
    setTimeout(() => {
      mensaje.style.opacity = 0;
      setTimeout(() => mensaje.remove(), 700);
    }, 3500);

    // Resetear el formulario después de mostrar el mensaje
    this.reset();
  });
}
