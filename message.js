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
  let form = document.getElementById("table-m")
  console.log("blog")
  // blogTable.addEventListener("submit", (event) => {
  //     event.preventDefault();
  // interacting with our getblogs endpoint
  fetch('http://127.0.0.1:3000/api/v1/message')
      .then((response) => response.json())
      .then((blogs) => {
          console.log(blogs)
          blogs.data.forEach(blog => {
              const row = document.createElement("tr")
              const titleCell = document.createElement("td")
              const descriptionCell = document.createElement("td")
             // const authorCell = document.createElement("td")
              const imageUrlCell = document.createElement("td")
              const actionsCell = document.createElement("td")
              const deleteButton = document.createElement("button")
              // assign values to the cells
              titleCell.textContent = blog.username;
              descriptionCell.textContent = blog.email;
             // authorCell.textContent = blog.author;
               imageUrlCell.textContent = blog.message;
              deleteButton.textContent = "Remove"
              actionsCell.appendChild(deleteButton)
              //append rows
              row.appendChild(titleCell)
              row.appendChild(descriptionCell)
              //row.appendChild(authorCell)
              row.appendChild(imageUrlCell)
                row.appendChild(actionsCell)
              // append table body
              form.querySelector("tbody").appendChild(row)
                   deleteButton.addEventListener("click", () => {
                      deteleBlog(blog._id)
                   })
          })
      })
      .catch(err => alert(err))
   async function deteleBlog(blogId) {
     await fetch(`http://127.0.0.1:3000/api/v1/message/${blogId}`,
          {
              method: "DELETE"
          })
      // console.log(blogId)
      const blog = blogId
          //.then((response) => response.json())
          // .then((response) => {
          //     return response.json
          // })
          // .then((data) => {
          //     //fuctionalities of deleting
          //     alert(data.message)
          // })
          Promise.all(blog)
          .then(() => {
              alert("message delete succesfully")
          })
          .catch((error) => alert(error))
          window.location.reload();
  }