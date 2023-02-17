 const form = document.getElementById('form');
const title = document.getElementById('title');
const date = document.getElementById('date');
const body = document.getElementById('body');
const picture = document.getElementById('picture');
const category = document.getElementById('category');
const status = document.getElementById('status');
const addBlog = document.getElementById('addBlog');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

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
    const statusValue = status.value.trim();

    if (titleValue === '') {
        setError(title, 'Title is required');
    } else {
        const pattern = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    
        if (!pattern.test(titleValue)) {
            setError(title, 'Title should contain only characters');
        } else {
            setSuccess(title);
        }
    }

    if (dateValue === '') {
        setError(date, 'Date is required');
    } else {
        setSuccess(date);
    }

    if (pictureValue.length === 0) {
        setError(picture, 'Image is required');
    } else {
        const file = pictureValue[0];
        const fileType = file.type;
        const fileSize = file.size;
    
        if (fileType !== 'image/jpeg' && fileType !== 'image/png' && fileType !== 'image/jpg') {
            setError(picture, 'File type should be jpeg, png, or jpg');
        }  else {
            setSuccess(picture);
        }
    }
    

    if (bodyValue === '') {
        setError(body, 'Body is required');
    } else {
        setSuccess(body);
    }

    if (categoryValue === '') {
        setError(category, 'Category is required');
    } else {
        setSuccess(category);
    }

    if (statusValue === '') {
        setError(status, 'Status is required');
    } else {
        setSuccess(status);
    }
};

let renderImage;
document.querySelector("#picture").addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener('load', () =>{
        localStorage.setItem("recent-image", reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});

let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

function saveBlog() {
    renderImage = localStorage.getItem('recent-image');
    validateInputs();

    const inputControls = form.querySelectorAll('.form-group');
    const hasError = [...inputControls].some((inputControl) => inputControl.classList.contains('error'));
  
    if (hasError) {     return;
    }

  let blog = {};
  blog.picture = renderImage
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

addBlog.onclick = saveBlog;
