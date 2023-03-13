//  // Define API endpoint
// const apiEndpoint = "https://uninterested-bear-polo-shirt.cyclic.app/blogs";

// // Get form inputs
// const titleInput = document.getElementById("title");
// const imageInput = document.getElementById("image");
// const dateInput = document.getElementById("date");
// const bodyInput = document.getElementById("body");

// // Get blog list container
// const blogListContainer = document.getElementById("blogList");

// // Function to create a blog post
// const createBlogPost = async () => {
//   // Get form input values
//   const title = titleInput.value;
//   const date = dateInput.value;
//   const body = bodyInput.value;

//   // Create form data object for image upload
//   const formData = new FormData();
//   formData.append("title", title);
//   formData.append("date", date);
//   formData.append("body", body);
//   formData.append("image", imageInput.files[0]);

//   try {
//     // Send POST request to API
//     const response = await fetch(apiEndpoint, {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error("Error creating blog post");
//     }

//     // Clear form inputs
//     titleInput.value = "";
//     imageInput.value = "";
//     dateInput.value = "";
//     bodyInput.value = "";

//     // Reload blog list
//     getBlogList();
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Function to get blog list
// const getBlogList = async () => {
//   try {
//     // Send GET request to API
//     const response = await fetch(apiEndpoint);

//     if (!response.ok) {
//       throw new Error("Error fetching blog list");
//     }

//     // Parse response data as JSON
//     const blogList = await response.json();

//     // Clear blog list container
//     blogListContainer.innerHTML = "";

//     // Loop through blog list and add each blog post to container
//     blogList.forEach((blog) => {
//       const blogContainer = document.createElement("div");
//       blogContainer.innerHTML = `
//         <h2>${blog.title}</h2>
//         <img src="${blog.imageUrl}" alt="">
//         <p>${blog.body}</p>
//         <button onclick="previewBlog('${blog._id}')">Preview</button>
//         <button onclick="deleteBlogPost('${blog._id}')">Delete</button>
//         <button onclick="editBlogPost('${blog._id}')">Edit</button>
//       `;
//       blogListContainer.appendChild(blogContainer);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Function to preview blog post
// const previewBlog = async (blogId) => {
//   try {
//     // Send GET request to API for specific blog post
//     const response = await fetch(`${apiEndpoint}/${blogId}`);

//     if (!response.ok) {
//       throw new Error("Error fetching blog post");
//     }

//     // Parse response data as JSON
//     const blog = await response.json();

//     // Display preview of blog post
//     const blogPreviewContainer = document.getElementById("blogPreview");
//     blogPreviewContainer.innerHTML = `
//       <h2>${blog.title}</h2>
//       <img src="${blog.imageUrl}" alt="">
//       <p>${blog.body}</p>
//       <button onclick="editBlogPost('${blog._id}')">Edit</button>
//       <button onclick="deleteBlogPost('${blog._id}')">Delete</button>
//     `;
//   } catch (error) {
//     console.error(error);
//   }
// };

// Function to delete blog post





  //form validation 
  // Validate form inputs
//  function validateForm() {
//   var title = document.getElementById('title').value;
//   var date = document.getElementById('date').value;
//   var body = document.getElementById('body').value;

//   // Check that all required fields are filled in
//   if (!title || !date || !body) {
//     alert('Please fill in all required fields.');
//     return false;
//   }

//   // Check that the date is in a valid format (yyyy-mm-dd)
//   var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
//   if (!date.match(dateRegex)) {
//     alert('Please enter the date in the format yyyy-mm-dd.');
//     return false;
//   }

//   return true;
// }

// // Save blog data to local storage and redirect to blog page
// document.getElementById('blogForm').addEventListener('submit', function (event) {
//   event.preventDefault();

//   // Validate form inputs
//   if (!validateForm()) {
//     return;
//   }

const form =document.getElementById("blogForm");
form.addEventListener("submit",(event)=>{
    event.preventDefault()


  var title = document.getElementById('title').value;
  var image = document.getElementById('image').value;
  //var date = document.getElementById('date').value;
  var content= document.getElementById('body').value;

  var blogData = {
    title ,  image ,content
  
  };
  fetch (' https://uninterested-bear-polo-shirt.cyclic.app/api/v1/blogs',{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(blogData)
  })
  .then((response)=>{
    return response.json()
  }).then((blogData)=>{
    alert(blogData.message)
  })
  .catch((error)=>alert(error))
   
});
//   blogDataArray.push(blogData);
//   localStorage.setItem('blogDataArray', JSON.stringify(blogDataArray));

//   alert('Blog data saved to local storage!');
//   document.getElementById('blogForm').reset();
//   clearPreview();
// });

//   //form validation
//     var blogDataArray = [];

//     // Preview uploaded image
//     function previewImage(event) {
//         var image = document.getElementById('imagePreview');
//         image.src = URL.createObjectURL(event.target.files[0]);
//     }

//     // Preview blog
//     function previewBlog() {
//         var title = document.getElementById('title').value;
//         var image = document.getElementById('imagePreview').src;
//         var date = document.getElementById('date').value;
//         var body = document.getElementById('body').value;
//         var blogPreview = '<div class="blog-card">' +
//             '<h2>' + title + '</h2>' +
//             '<img src="' + image + '" alt="">' +
//             '<p>Date: ' + date + '</p>' +
//             '<p>' + body + '</p>' +
//             '</div>';
//         document.getElementById('blogPreview').innerHTML = blogPreview;
//     }

//     // Save blog data to local storage and redirect to blog page
//     document.getElementById('blogForm').addEventListener('submit', function (event) {
//         event.preventDefault();
//         var title = document.getElementById('title').value;
//         var image = document.getElementById('imagePreview').src;
//         var date = document.getElementById('date').value;
//         var body = document.getElementById('body').value;

//         var blogData = {
//             title: title,
//             image: image,
//             date: date,
//             body: body
//         };

//         blogDataArray.push(blogData);
//         localStorage.setItem('blogDataArray', JSON.stringify(blogDataArray));

//         alert('Blog data saved to local storage!');
//         document.getElementById('blogForm').reset();
//         clearPreview();
//     });

//     // Clear preview
//     function clearPreview() {
//         document.getElementById('blogPreview').innerHTML = '';
//         document.getElementById('imagePreview').src = '#';
//     }

//     // Load blog data from local storage
//     // Load blog data from local storage
// var storedBlogDataArray = JSON.parse(localStorage.getItem('blogDataArray'));
// if (storedBlogDataArray) {
//   blogDataArray = storedBlogDataArray;
//   for (var i = 0; i < blogDataArray.length; i++) {
//     var blogData = blogDataArray[i];
//     var title = blogData.title;
//     var image = blogData.image;
//     var date = blogData.date;
//     var body = blogData.body;

//     var blogPreview = '<div class="blog-card">' +
//       '<h2>' + title + '</h2>' +
//       '<img src="' + image + '" alt="">' +
//       '<p>Date: ' + date + '</p>' +
//       '<p>' + body + '</p>' +
//       '<button onclick="deleteBlog(' + i + ')">Delete</button>' +
//       '<button onclick="updateBlog(' + i + ')">Update</button>' +
//       '</div>';
//     document.getElementById('blogPreview').innerHTML += blogPreview;
//   }
// }

// // Delete blog
// function deleteBlog(index) {
//   blogDataArray.splice(index, 1);
//   localStorage.setItem('blogDataArray', JSON.stringify(blogDataArray));
//   document.getElementById('blogPreview').innerHTML = '';
//   for (var i = 0; i < blogDataArray.length; i++) {
//     var blogData = blogDataArray[i];
//     var title = blogData.title;
//     var image = blogData.image;
//     var date = blogData.date;
//     var body = blogData.body;

//     var blogPreview = '<div class="blog-card">' +
//       '<h2>' + title + '</h2>' +
//       '<img src="' + image + '" alt="">' +
//       '<p>Date: ' + date + '</p>' +
//       '<p>' + body + '</p>' +
//       '<button onclick="deleteBlog(' + i + ')">Delete</button>' +
//       '<button onclick="updateBlog(' + i + ')">Update</button>' +
//       '</div>';
//     document.getElementById('blogPreview').innerHTML += blogPreview;
//   }
// }

// // Update blog
// function updateBlog(index) {
//   var blogData = blogDataArray[index];
//   document.getElementById('title').value = blogData.title;
//   document.getElementById('imagePreview').src = blogData.image;
//   document.getElementById('date').value = blogData.date;
//   document.getElementById('body').value = blogData.body;
//   blogDataArray.splice(index, 1);
//   localStorage.setItem('blogDataArray', JSON.stringify(blogDataArray));
//   document.getElementById('blogPreview').innerHTML = '';
//   for (var i = 0; i < blogDataArray.length; i++) {
//     var blogData = blogDataArray[i];
//     var title = blogData.title;
//     var image = blogData.image;
//     var date = blogData.date;
//     var body = blogData.body;

//     var blogPreview = '<div class="blog-card">' +
//       '<h2>' + title + '</h2>' +
//       '<img src="' + image + '" alt="">' +
//       '<p>Date: ' + date + '</p>' +
//       '<p>' + body + '</p>' +
//       '<button onclick="deleteBlog(' + i + ')">Delete</button>' +
//       '<button onclick="updateBlog(' + i + ')">Update</button>' +
//       '</div>';
//     document.getElementById('blogPreview').innerHTML += blogPreview;
//   }
// }
