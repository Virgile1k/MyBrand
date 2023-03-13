const userTableBody = document.querySelector('tbody');
// Fetch users from server-side API
fetch('  http://localhost:3000/api/v1/message')
  .then(response => response.json())
  .then(data => {
    // Do something with the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle error if fetch fails
    console.error(error);
  });