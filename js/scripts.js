function handleSubmit(event) {
  event.preventDefault();

  // Get the submit button element
  const submitButton = document.getElementById("submit-button");

  // Change the button text and style
  submitButton.textContent = "Sent";
  submitButton.style.backgroundColor = "#28a745";
}
