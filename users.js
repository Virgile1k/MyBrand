const getUsers = () => {
  return JSON.parse(localStorage.getItem('users')) || [];
};
const userTableBody = document.querySelector('tbody');

const renderUsers = () => {
  const users = getUsers();
  userTableBody.innerHTML = '';

  users.forEach((user, index) => {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = index + 1;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = user.username;
    row.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    const actionsCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    actionsCell.appendChild(deleteButton);

    row.appendChild(actionsCell);
    userTableBody.appendChild(row);
  });
};

renderUsers();
const addUserButton = document.querySelector('button');
addUserButton.addEventListener('click', () => {
  window.location.href = 'register.html';
});
