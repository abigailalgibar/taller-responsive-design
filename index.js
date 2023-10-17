document.addEventListener("DOMContentLoaded", function () {
  const opcionesList = document.getElementById("opciones-list");
  const btnOpciones = document.getElementById("btn-opciones");

  btnOpciones.addEventListener("click", function (e) {
    e.preventDefault();
    opcionesList.classList.toggle("d-none");
  });
});
