const form = document.getElementById('form');
const title = document.getElementById('title');
const date = document.getElementById('date');
const body = document.getElementById('body');
const category = document.getElementById('category');
const statuse = document.getElementById('statuse');
const addBlog = document.getElementById('addBlog');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    console.log(inputControl + "input control")
    const errorDisplay = inputControl.querySelector('.error');
    console.log(errorDisplay + "error display");

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    console.log(inputControl.classList.add('error'))
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const titleValue = title.value.trim();
    const dateValue = date.value.trim();
    const bodyValue = body.value.trim();
    const pictureValue = picture.files;
    const categoryValue = category.value.trim();
    const statusValue = statuse.value.trim();

    if(titleValue === '') {
        setError(title, 'title is required');
    } else {
        const pattern = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    
        if (!pattern.test(titleValue)) {
            setError(title, 'Title should contain only characters');
        } else {
            setSuccess(title);
        }
    }

    if(dateValue === '') {
        setError(date, 'date is required');
    } else {
        setSuccess(date);
    }

    if(pictureValue.length === 0) {
        setError( picture, 'image is required');
    } else {
        const file = pictureValue[0];
        const fileType = file.type;
        const fileSize = file.size;
    
        if (fileType !== 'image/jpeg' && fileType !== 'image/png' && fileType !== 'image/jpg') {
            setError(picture, 'File type should be jpeg, png, or jpg');
        }  else {
            setSuccess( picture);
        }
    }
    

    if(bodyValue === '') {
        setError(body, 'Body is required');
    } else {
        setSuccess(body);
    }
    if(categoryValue === '') {
        setError(category, 'Category is required');
    } else {
        setSuccess(category);
    }
    if(statusValue === '') {
        setError(statuse, 'Status is required');
    } else {
        setSuccess(statuse);
    }

};



// adding blog using local storage
// 

blogs = JSON.parse(localStorage.getItem('blogs')) || [];

function saveBlog() {

    validateInputs();

    const inputControls = form.querySelectorAll('.form-group');
    const hasError = [...inputControls].some((inputControl) => inputControl.classList.contains('error'));
  
    if (hasError) {
      return;
    }

  let blog = {};
  blog.title = title.value
  blog.date = date.value
  blog.body= body.value
  blog.category = category.value
  blog.statuse = statuse.value
  blogs.push(blog);
  const stringBlogs = JSON.stringify(blogs);
  localStorage.setItem('blogs', stringBlogs);
    // Redirect to login page after saving blog
   window.location.replace("article.html");
}

// function displayBlogs() {
  
//     // retrieve the form data from local storage
//     const blogDataJson = localStorage.getItem('blogs');

//     // parse the JSON string to an object
//     const blogData = JSON.parse(blogDataJson);

//     const blogsTable = document.querySelector('.board tbody');
//     blogsTable.innerHTML = '';
//     blogs.forEach((blog, index) => {
//       const tr = document.createElement('tr');
//       tr.innerHTML = `
//         <td class="picture">
//           <img src="${blogData.cover}" alt="">
//         </td>
//         <td class="blog-title">
//           <p>${blogData.title}</p> 
//         </td>
//         <td class="author">
//           <p>${blogData.author}</p>
//         </td>
//         <td class="date">
//           <p>${blogData.date}</p>
//         </td>
//         <td class="status">
//           <p>${blogData.status}</p>
//         </td>
//         <td class="action">
//           <a href="edit.html"><i class='bx bxs-edit'></i></a> 
//           <a href=""><i class='bx bxs-trash'></i></a> 
//         </td>
//       `;
//       blogsTable.appendChild(tr);
//     });
//   }
  

submit.onclick = saveBlog;