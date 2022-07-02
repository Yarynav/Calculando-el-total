const quantity = document.querySelector("#quantity");
const color = document.querySelector("#color");
function calculatePrice() {
  const price = document.querySelector("#price");
  const total = parseInt(quantity.value) * parseInt(price.value);
  document.querySelector("#result").innerHTML = "$" + total.toLocaleString();
  document.querySelector("#resultColor").style.backgroundColor = color.value;
  document.querySelector("#resultQuantity").innerHTML = quantity.value;
}
document.querySelector("#calculate").addEventListener("click", calculatePrice);
