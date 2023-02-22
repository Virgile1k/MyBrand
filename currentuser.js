 const users = JSON.parse(localStorage.getItem('users')) || [];
let currentUserIndex = -1; // -1 indicates that no user is logged on

// Get the username and profile picture elements from the HTML
const usernameElem = document.querySelector('.username');
const profilePicElem = document.querySelector('.profile-pic');

// Check if a user is logged on and display their data if they are
function displayUserData() {
  if (currentUserIndex !== -1) {
    // Get the current user's data
    const currentUser = users[currentUserIndex];

    // Set the text content of the username element to the current user's name
    usernameElem.textContent = currentUser.username;

    // Generate a random profile picture URL and create an img element for it
    const profilePicUrl = `https://i.pravatar.cc/300?u=${currentUser.email}`;
    const profilePic = document.createElement('img');
    profilePic.src = profilePicUrl;
    profilePicElem.innerHTML = '';
    profilePicElem.appendChild(profilePic);
  }
}

// Check if a user is logged on when the page loads
displayUserData();

// Update the current user index when a user logs on
window.addEventListener('storage', () => {
  const newCurrentUserIndex = parseInt(localStorage.getItem('currentUserIndex'));
  if (newCurrentUserIndex !== currentUserIndex) {
    currentUserIndex = newCurrentUserIndex;
    displayUserData();
  }
});
