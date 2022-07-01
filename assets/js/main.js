const cantidad = document.querySelector("#cantidad");
const color = document.querySelector("#color");
function calcularPrecio() {
  let total = parseInt(cantidad.value) * parseInt(precio.value);
  document.querySelector("#resultado").innerHTML = "$" + total.toLocaleString();
  document.querySelector("#resultadoColor").style.backgroundColor = color.value;
  document.querySelector("#resultadoCantidad").innerHTML = cantidad.value;
}
document.querySelector("#calcular").addEventListener("click", calcularPrecio);
