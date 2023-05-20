const h3 = document.getElementById("h3");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  cambiar();
});

function cambiar() {
  h3.innerText = "hola";
}
