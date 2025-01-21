function handleSubmit(event) {
  event.preventDefault();

  // Get the submit button element
  const submitButton = document.getElementById("submit-button");

  // Change the button text and style
  submitButton.textContent = "Sent";
  submitButton.style.backgroundColor = "#28a745";
}
function addToCart(productId, productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ id: productId, name: productName, price: productPrice });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " has been added to your cart!");
}
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((product) => product.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
