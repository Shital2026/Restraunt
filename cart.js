function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartTable = document.getElementById("cart-items");
  let totalPrice = 0;

  cartTable.innerHTML = "";

  cart.forEach((item) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td><td>₹${item.price}</td>`;
    cartTable.appendChild(row);
    totalPrice += item.price;
  });

  document.getElementById("total-price").innerText = totalPrice;
}

function paybill() {
  // Set message inside the paragraph
  let msgElement = document.getElementById("thank-you-msg");
  msgElement.innerText = "Thank you for coming! 😊";
  msgElement.style.display = "block";
  localStorage.removeItem("cart");
  loadCart();
}
function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

document.addEventListener("DOMContentLoaded", loadCart);
function goTomenu() {
  window.location.href = "index.html#menu";
}
//Updated the files
