document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formInscripcion");

  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();

    if (!nombre || !email) {
      alert("⚠️ Complete todos los campos obligatorios.");
      return;
    }

    alert("✅ Inscripción enviada correctamente.");
    form.reset();
  });
});
