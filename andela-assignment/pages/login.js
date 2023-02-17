 // FORM VALIDATION on the Login page
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Username =doucment.getElementById('usrname');

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

const isValidEmail = email => {
const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
const emailValue = email.value.trim();
const passwordValue = password.value.trim();

 
if (emailValue === '') {
    setError(email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}

if (passwordValue === '') {
    setError(password, 'Password is required');
} else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 characters');
} else {
    setSuccess(password);
}

// Retrieve user from local storage
const storedUser = JSON.parse(localStorage.getItem('user'));
if (storedUser && storedUser.email === emailValue && storedUser.password === passwordValue) {
    // Redirect user to admin page
    window.location.href = 'Admindashboard.html';
//end of admin page
    const storedUser = JSON.parse(localStorage.getItem('user'));

  // Set the user's name
  const username = document.getElementById('username');
  username.textContent = storedUser.name;

  // Set the user's profile picture
  const profilePic = document.getElementById('profile-pic');
  profilePic.src = storedUser.profilePicture

}
};
