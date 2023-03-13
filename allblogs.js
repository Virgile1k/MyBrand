let form = document.getElementById("table-m")
  console.log("blog")
  // blogTable.addEventListener("submit", (event) => {
  //     event.preventDefault();
  // interacting with our getblogs endpoint
  fetch('  https://uninterested-bear-polo-shirt.cyclic.app/api/v1/blogs')
      .then((response) => response.json())
      .then((blogs) => {
          console.log(blogs)
          blogs.data.forEach(blog => {
              const row = document.createElement("tr")
              const titleCell = document.createElement("td")
              const descriptionCell = document.createElement("td")
              //const authorCell = document.createElement("td")
              const imageUrlCell = document.createElement("td")
              const actionsCell = document.createElement("td")
              const deleteButton = document.createElement("button")
              // assign values to the cells
              titleCell.textContent = blog.title;
              descriptionCell.textContent = blog.content;
              //authorCell.textContent = blog.author;
              imageUrlCell.textContent = blog.image;
              deleteButton.textContent = "Remove"
              actionsCell.appendChild(deleteButton)
              //append rows
              row.appendChild(titleCell)
              row.appendChild(descriptionCell)
             // row.appendChild(authorCell)
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
     await fetch(`https://uninterested-bear-polo-shirt.cyclic.app/api/v1/blogs/${blogId}`,
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
              alert("blog deleted successfully")
          })
          .catch((error) => alert(error))
          window.location.reload();
  }