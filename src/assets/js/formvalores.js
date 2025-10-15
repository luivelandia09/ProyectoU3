console.log("Formulario de valores cargado");

const formValores = document.getElementById("formValores");
if (!formValores) {
  console.warn("No se encontró el formulario con id 'formValores'");
} else {
  formValores.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página

    const campoIds = ["nombre", "correo", "valor", "comentarios"];
    const campos = campoIds.map((id) => document.getElementById(id));

    let vacios = false;
    let campoFaltante = null;

    // Validar campos (sin checkbox)
    for (let i = 0; i < campos.length; i++) {
      const campo = campos[i];
      if (!campo) {
        campoFaltante = campoIds[i];
        vacios = true;
        break;
      }

      const isSelect = campo.tagName === "SELECT";
      const value = (campo.value || "").trim();

      if ((isSelect && value === "") || (!isSelect && value === "")) {
        campoFaltante = campo.id;
        campo.style.border = "2px solid red";
        vacios = true;
        break;
      } else {
        campo.style.border = "2px solid #28a745";
      }
    }

    if (vacios) {
      alert(
        "Por favor llena el campo: " +
          (campoFaltante || "(campo no identificado)")
      );
      return;
    }

    // Mostrar valores en consola
    console.log("Valores enviados:", {
      nombre: campos[0].value,
      correo: campos[1].value,
      valor: campos[2].value,
      comentarios: campos[3].value,
    });

    // Limpiar formulario después de enviar
    this.reset();

    // Mostrar mensaje de éxito (elemento existente o creado al vuelo)
    let mensaje = document.getElementById("mensajeExito");
    if (!mensaje) {
      mensaje = document.createElement("p");
      mensaje.id = "mensajeExito";
      this.appendChild(mensaje);
    }

    mensaje.textContent = "✅ ¡Gracias por compartir tus valores con nosotros!";
    mensaje.classList.remove("d-none");
    mensaje.style.color = "green";
    mensaje.style.fontWeight = "bold";
    mensaje.style.textAlign = "center";

    // Ocultar el mensaje después de 4s
    setTimeout(() => {
      mensaje.classList.add("d-none");
    }, 4000);
  });
}
