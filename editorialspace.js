  //form validation 
  // Validate form inputs
 function validateForm() {
  var title = document.getElementById('title').value;
  var date = document.getElementById('date').value;
  var body = document.getElementById('body').value;

  // Check that all required fields are filled in
  if (!title || !date || !body) {
    alert('Please fill in all required fields.');
    return false;
  }

  // Check that the date is in a valid format (yyyy-mm-dd)
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!date.match(dateRegex)) {
    alert('Please enter the date in the format yyyy-mm-dd.');
    return false;
  }

  return true;
}

// Save blog data to local storage and redirect to blog page
document.getElementById('blogForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Validate form inputs
  if (!validateForm()) {
    return;
  }

  var title = document.getElementById('title').value;
  var image = document.getElementById('imagePreview').src;
  var date = document.getElementById('date').value;
  var body = document.getElementById('body').value;

  var blogData = {
    title: title,
    image: image,
    date: date,
    body: body
  };

  blogDataArray.push(blogData);
  localStorage.setItem('blogDataArray', JSON.stringify(blogDataArray));

  alert('Blog data saved to local storage!');
  document.getElementById('blogForm').reset();
  clearPreview();
});

  //form validation
    var blogDataArray = [];

    // Preview uploaded image
    function previewImage(event) {
        var image = document.getElementById('imagePreview');
        image.src = URL.createObjectURL(event.target.files[0]);
    }

    // Preview blog
    function previewBlog() {
        var title = document.getElementById('title').value;
        var image = document.getElementById('imagePreview').src;
        var date = document.getElementById('date').value;
        var body = document.getElementById('body').value;
        var blogPreview = '<div class="blog-card">' +
            '<h2>' + title + '</h2>' +
            '<img src="' + image + '" alt="">' +
            '<p>Date: ' + date + '</p>' +
            '<p>' + body + '</p>' +
            '</div>';
        document.getElementById('blogPreview').innerHTML = blogPreview;
    }

    // Save blog data to local storage and redirect to blog page
    document.getElementById('blogForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var title = document.getElementById('title').value;
        var image = document.getElementById('imagePreview').src;
        var date = document.getElementById('date').value;
        var body = document.getElementById('body').value;

        var blogData = {
            title: title,
            image: image,
            date: date,
            body: body
        };

        blogDataArray.push(blogData);
        localStorage.setItem('blogDataArray', JSON.stringify(blogDataArray));

        alert('Blog data saved to local storage!');
        document.getElementById('blogForm').reset();
        clearPreview();
    });

    // Clear preview
    function clearPreview() {
        document.getElementById('blogPreview').innerHTML = '';
        document.getElementById('imagePreview').src = '#';
    }

    // Load blog data from local storage
    // Load blog data from local storage
var storedBlogDataArray = JSON.parse(localStorage.getItem('blogDataArray'));
if (storedBlogDataArray) {
  blogDataArray = storedBlogDataArray;
  for (var i = 0; i < blogDataArray.length; i++) {
    var blogData = blogDataArray[i];
    var title = blogData.title;
    var image = blogData.image;
    var date = blogData.date;
    var body = blogData.body;

    var blogPreview = '<div class="blog-card">' +
      '<h2>' + title + '</h2>' +
      '<img src="' + image + '" alt="">' +
      '<p>Date: ' + date + '</p>' +
      '<p>' + body + '</p>' +
      '<button onclick="deleteBlog(' + i + ')">Delete</button>' +
      '<button onclick="updateBlog(' + i + ')">Update</button>' +
      '</div>';
    document.getElementById('blogPreview').innerHTML += blogPreview;
  }
}

// Delete blog
function deleteBlog(index) {
  blogDataArray.splice(index, 1);
  localStorage.setItem('blogDataArray', JSON.stringify(blogDataArray));
  document.getElementById('blogPreview').innerHTML = '';
  for (var i = 0; i < blogDataArray.length; i++) {
    var blogData = blogDataArray[i];
    var title = blogData.title;
    var image = blogData.image;
    var date = blogData.date;
    var body = blogData.body;

    var blogPreview = '<div class="blog-card">' +
      '<h2>' + title + '</h2>' +
      '<img src="' + image + '" alt="">' +
      '<p>Date: ' + date + '</p>' +
      '<p>' + body + '</p>' +
      '<button onclick="deleteBlog(' + i + ')">Delete</button>' +
      '<button onclick="updateBlog(' + i + ')">Update</button>' +
      '</div>';
    document.getElementById('blogPreview').innerHTML += blogPreview;
  }
}

// Update blog
function updateBlog(index) {
  var blogData = blogDataArray[index];
  document.getElementById('title').value = blogData.title;
  document.getElementById('imagePreview').src = blogData.image;
  document.getElementById('date').value = blogData.date;
  document.getElementById('body').value = blogData.body;
  blogDataArray.splice(index, 1);
  localStorage.setItem('blogDataArray', JSON.stringify(blogDataArray));
  document.getElementById('blogPreview').innerHTML = '';
  for (var i = 0; i < blogDataArray.length; i++) {
    var blogData = blogDataArray[i];
    var title = blogData.title;
    var image = blogData.image;
    var date = blogData.date;
    var body = blogData.body;

    var blogPreview = '<div class="blog-card">' +
      '<h2>' + title + '</h2>' +
      '<img src="' + image + '" alt="">' +
      '<p>Date: ' + date + '</p>' +
      '<p>' + body + '</p>' +
      '<button onclick="deleteBlog(' + i + ')">Delete</button>' +
      '<button onclick="updateBlog(' + i + ')">Update</button>' +
      '</div>';
    document.getElementById('blogPreview').innerHTML += blogPreview;
  }
}
