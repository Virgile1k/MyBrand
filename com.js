const commentForm = document.querySelector('.comment-form');
const commentNameInput = document.querySelector('#comment-name');
const commentMessageInput = document.querySelector('#comment-message');
const postCommentButton = document.querySelector('[type="submit"]');

// Add comment data to local storage
postCommentButton.addEventListener('click', function(e) {
  e.preventDefault();
  
  const comment = {
    name: commentNameInput.value,
    message: commentMessageInput.value
  };
  
  // Get existing comments from local storage or create empty array
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  
  // Add new comment to array
  comments.push(comment);
  
  // Store updated comments in local storage
  localStorage.setItem('comments', JSON.stringify(comments));
  
  // Clear input fields
  commentNameInput.value = '';
  commentMessageInput.value = '';
});

// Retrieve comment data from local storage
window.addEventListener('load', function() {
  const comments = JSON.parse(localStorage.getItem('comments'));
  
  if (comments) {
    comments.forEach(function(comment) {
      // Display comments on page
      const commentSection = document.querySelector('.comments');
      const commentElement = document.createElement('div');
      commentElement.innerHTML = '<h3>' + comment.name + '</h3><p>' + comment.message + '</p>';
      commentSection.appendChild(commentElement);
    });
  }
});
