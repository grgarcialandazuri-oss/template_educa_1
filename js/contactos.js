document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.querySelector("input[type='text']");
    const email = form.querySelector("input[type='email']");
    const mensaje = form.querySelector("textarea");

    // Limpiar estados previos
    [nombre, email, mensaje].forEach(campo => {
      campo.classList.remove("is-invalid", "is-valid");
    });

    let valido = true;

    // Validar nombre
    if (nombre.value.trim().length < 3) {
      nombre.classList.add("is-invalid");
      valido = false;
    } else {
      nombre.classList.add("is-valid");
    }

    // Validar email
    if (!email.value.includes("@")) {
      email.classList.add("is-invalid");
      valido = false;
    } else {
      email.classList.add("is-valid");
    }

    // Validar mensaje
    if (mensaje.value.trim().length < 10) {
      mensaje.classList.add("is-invalid");
      valido = false;
    } else {
      mensaje.classList.add("is-valid");
    }

    if (!valido) {
      alert("⚠️ Por favor complete correctamente el formulario.");
      return;
    }

    alert("✅ Mensaje enviado correctamente. Nos contactaremos pronto.");
    form.reset();

    // Quitar estilos después de enviar
    [nombre, email, mensaje].forEach(campo => {
      campo.classList.remove("is-valid");
    });
  });
});
