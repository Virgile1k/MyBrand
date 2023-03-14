const form = document.getElementById("table-m");

fetch('https://uninterested-bear-polo-shirt.cyclic.app/api/v1/users')
  .then((response) => response.json())
  .then((users) => {
    users.data.forEach((user) => {
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      const usernameCell = document.createElement("td");
      const emailCell = document.createElement("td");
      const actionsCell = document.createElement("td");
      const deleteButton = document.createElement("button");

      idCell.textContent = user.id;
      usernameCell.textContent = user.username;
      emailCell.textContent = user.email;
      deleteButton.textContent = "Remove";
      actionsCell.appendChild(deleteButton);

      row.appendChild(idCell);
      row.appendChild(usernameCell);
      row.appendChild(emailCell);
      row.appendChild(actionsCell);

      form.querySelector("tbody").appendChild(row);

      deleteButton.addEventListener("click", () => {
        deleteUser(user._id);
      });
    });
  })
  .catch((err) => alert(err));

async function deleteUser(userId) {
  await fetch(`https://uninterested-bear-polo-shirt.cyclic.app/api/v1/users/${userId}`, {
    method: "DELETE",
  });

  alert("User deleted successfully");
  window.location.reload();
}
