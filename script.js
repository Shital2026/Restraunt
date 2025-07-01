document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".order-btn");

  orderButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let name = this.getAttribute("data-name");
      let price = parseFloat(this.getAttribute("data-price")); //parseint also use

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({ name, price });

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${name} added to cart!`);
    });
  });
});
