 const commentTable = document.querySelector('table');
const deleteButtons = [];

window.addEventListener('load', function() {
  const comments = JSON.parse(localStorage.getItem('comments'));
  
  if (comments) {
    comments.forEach(function(comment, index) {
      // Add comment to table
      const newRow = commentTable.insertRow();
      const nameCell = newRow.insertCell();
      const messageCell = newRow.insertCell();
      const actionCell = newRow.insertCell();
      
      nameCell.textContent = comment.name;
      messageCell.textContent = comment.message;
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      actionCell.appendChild(deleteButton);
      
      deleteButton.addEventListener('click', function() {
        // Remove comment from local storage
        comments.splice(index, 1);
        localStorage.setItem('comments', JSON.stringify(comments));
        
        // Remove comment from table
        commentTable.deleteRow(index + 1);
        deleteButtons.splice(index, 1);
      });
      
      deleteButtons.push(deleteButton);
    });
  }
});

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
  
  // Add comment to table
  const newRow = commentTable.insertRow();
  const nameCell = newRow.insertCell();
  const messageCell = newRow.insertCell();
  const actionCell = newRow.insertCell();
  
  nameCell.textContent = comment.name;
  messageCell.textContent = comment.message;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  actionCell.appendChild(deleteButton);
  
  deleteButton.addEventListener('click', function() {
    // Remove comment from local storage
    const index = deleteButtons.indexOf(deleteButton);
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    
    // Remove comment from table
    commentTable.deleteRow(index + 1);
    deleteButtons.splice(index, 1);
  });
  
  deleteButtons.push(deleteButton);
});
