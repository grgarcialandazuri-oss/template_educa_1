document.addEventListener("DOMContentLoaded", () => {
  const filtro = document.getElementById("filtroCurso");
  const filas = document.querySelectorAll("tbody tr");

  if (!filtro) return;

  filtro.addEventListener("change", () => {
    const valor = filtro.value;

    filas.forEach(fila => {
      const curso = fila.children[0].textContent;

      fila.style.display =
        valor === "todos" || curso === valor ? "" : "none";
    });
  });
});
