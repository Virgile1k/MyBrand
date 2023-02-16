 // Get the form element and add a submit event listener
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the default form submission behavior

  // Get the form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate the form fields
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Save the form data to local storage
  const data = { name, email, message };
  localStorage.setItem("contact-data", JSON.stringify(data));

  alert("Thank you for contacting me!");

  // Clear the form fields
  form.reset();
});

// Helper function to validate email
function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
