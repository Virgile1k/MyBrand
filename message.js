let form = document.getElementById("table-m")
console.log("message")

fetch('https://uninterested-bear-polo-shirt.cyclic.app/api/v1/message')
    .then((response) => response.json())
    .then((messages) => {
        console.log(messages)
        messages.data.forEach(message => {
            const row = document.createElement("tr")
            const nameCell = document.createElement("td")
            const emailCell = document.createElement("td")
            const messageCell = document.createElement("td")
            const actionsCell = document.createElement("td")
            const deleteButton = document.createElement("button")
            
            nameCell.textContent = message.name;
            emailCell.textContent = message.email;
            messageCell.textContent = message.message;
            deleteButton.textContent = "Remove"
            actionsCell.appendChild(deleteButton)
            
            row.appendChild(nameCell)
            row.appendChild(emailCell)
            row.appendChild(messageCell)
            row.appendChild(actionsCell)
            
            form.querySelector("tbody").appendChild(row)
                 
            deleteButton.addEventListener("click", () => {
                deleteMessage(message._id)
            })
        })
    })
    .catch(err => alert(err))
    
async function deleteMessage(messageId) {
    await fetch(`https://uninterested-bear-polo-shirt.cyclic.app/api/v1/message/${messageId}`,
        {
            method: "DELETE"
        })
    
    const message = messageId
        
    Promise.all(message)
        .then(() => {
            alert("message deleted successfully")
        })
        .catch((error) => alert(error))
        
    window.location.reload();
}

































// const userTableBody = document.querySelector('tbody');
// // Fetch users from server-side API
// fetch('  http://localhost:3000/api/v1/message')
//   .then(response => response.json())
//   .then(data => {
//     // Do something with the retrieved data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle error if fetch fails
//     console.error(error);
//   });
//function getBlogs(blogs) {
//   let form = document.getElementById("table-m")
//   console.log("message")
//   // blogTable.addEventListener("submit", (event) => {
//   //     event.preventDefault();
//   // interacting with our getblogs endpoint
//   fetch('http://127.0.0.1:3000/api/v1/message')
//       .then((response) => response.json())
//       .then((message) => {
//           console.log(message)
//           message.data.forEach(message => {
//               const row = document.createElement("tr")
//               const titleCell = document.createElement("td")
//               const descriptionCell = document.createElement("td")
//              // const authorCell = document.createElement("td")
//               //const imageUrlCell = document.createElement("td")
//               const actionsCell = document.createElement("td")
//               //const deleteButton = document.createElement("button")
//               // assign values to the cells
//               titleCell.textContent = message.username;
//               descriptionCell.textContent = message.email;
            
//                imageUrlCell.textContent = message.message;
//               deleteButton.textContent = "Remove"
//               actionsCell.appendChild(deleteButton)
//               //append rows
//               row.appendChild(titleCell)
//               row.appendChild(descriptionCell)
//               //row.appendChild(authorCell)
//               row.appendChild(imageUrlCell)
//                 row.appendChild(actionsCell)
//               // append table body
//               form.querySelector("tbody").appendChild(row)
//                    deleteButton.addEventListener("click", () => {
//                       deteleBlog(id)
//                    })
//           })
//       })
//       .catch(err => alert(err))
//    async function message(id) {
//      await fetch(`  ttp://localhost:3000/api/v1/message/${id}`,
//           {
//               method: "DELETE"
//           })
//       // console.log(blogId)
//       const message = id
          //.then((response) => response.json())
          // .then((response) => {
          //     return response.json
          // })
          // .then((data) => {
          //     //fuctionalities of deleting
          //     alert(data.message)
          // })
//           Promise.all(message)
//           .then(() => {
//               alert("message delete succesfully")
//           })
//           .catch((error) => alert(error))
//           window.location.reload();
//   }