 // Get the HTML form element by its ID
const contactForm = document.getElementById('contact-form');

// Add an event listener for form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the values of the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Store the form data in local storage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('message', message);

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});

// Retrieve the form data from local storage when the page loads
window.addEventListener('load', function() {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const message = localStorage.getItem('message');

  // If the form data is in local storage, populate the form fields
  if (name && email && message) {
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('message').value = message;
  }
});
