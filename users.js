const userTableBody = document.querySelector('tbody');
// Fetch users from server-side API
fetch('https://uninterested-bear-polo-shirt.cyclic.app/api/v1/users')
  .then(response => response.json())
  .then(data => {
    // Do something with the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle error if fetch fails
    console.error(error);
  });



//  const getUsers = () => {
//   return JSON.parse(localStorage.getItem('users')) || [];
// };


// const renderUsers = () => {
//   const users = getUsers();
//   userTableBody.innerHTML = '';

//   users.forEach((user, index) => {
//     const row = document.createElement('tr');

//     const idCell = document.createElement('td');
//     idCell.textContent = index + 1;
//     row.appendChild(idCell);

//     const nameCell = document.createElement('td');
//     nameCell.textContent = user.username;
//     row.appendChild(nameCell);

//     const emailCell = document.createElement('td');
//     emailCell.textContent = user.email;
//     row.appendChild(emailCell);

//     const actionsCell = document.createElement('td');

//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit';
//     editButton.addEventListener('click', () => {
//       window.location.href = `edit.html?index=${index}`;
//     });
//     actionsCell.appendChild(editButton);

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', () => {
//       const users = getUsers();
//       users.splice(index, 1);
//       localStorage.setItem('users', JSON.stringify(users));
//       renderUsers();
//     });
//     actionsCell.appendChild(deleteButton);

//     row.appendChild(actionsCell);
//     userTableBody.appendChild(row);
//   });
// };

// renderUsers();

// const addUserButton = document.querySelector('button');
// addUserButton.addEventListener('click', () => {
//   window.location.href = 'register.html';
// });
