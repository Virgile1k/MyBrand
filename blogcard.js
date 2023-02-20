// Get the blog card element
const blogCard = document.getElementById("blogCard");
 // Get the container for the blog cards
const cardsContainer = document.querySelector(".cardscontainer");

// Get the blog post from local storage
const blogDataArray = JSON.parse(localStorage.getItem("blogDataArray"));

// Create a blog card HTML element
const blogCardElement = document.createElement("div");
blogCardElement.classList.add("blog-card");
blogCardElement.innerHTML = `
  <h2>${ blogDataArray .title}</h2>
  <img src="${ blogDataArray .image}" alt="">
  <p>Date: ${ blogDataArray .date}</p>
  <p>${ blogDataArray .body.substring(0, 100)}...</p>
  <a href="blogs.html">Read More</a>
`;

// Display the blog card element
cardsContainer.appendChild(blogCardElement);

