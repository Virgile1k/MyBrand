 const form = document.querySelector('#form-2');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//Storing a user
let currentUser = null;

//Getting already eisting users from the local storage
const users = JSON.parse(localStorage.getItem("users")) ?? [];
let isGenuine = localStorage.getItem("isGenuine", "true"); //Question = (more explanation on this code)...........

let id = users.length;

//Function to add New Users 
function addOfData(e) { 
    const users = JSON.parse(localStorage.getItem("users")) ?? [{
        id: 0,
        username: "Ndayambaje",
        email: "ndayambajevg16@gmail.com",
        password: "planet@virus",
        password2: "planet@virus"
    }]
    let isGenuine = localStorage.getItem("isGenuine", "true");
    let id = users.length;

    currentUser = {
        id: id,
        username: username.value,
        email: email.value,
        password: password.value,
        password2: password2.value
    }
    users.push(currentUser)
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.getItem("isGenuine", "true");

    if(users.id === 0 && users.username === "Ndayambaje" && users.email === "ndayambajevg16@gmail.com" && users.password === "planet@virus" && users.password2 === "planet@virus"){
        // location.href = "../Admin-Panel/admin.html";
        location.reload();
    } else {
        location.href = "../Index/index.html#contact-me-page";
    }
    
}

//Form Validation


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs() && addOfData();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if (usernameValue && emailValue && passwordValue && password2Value) {
        return true;
         localStorage.setItem(usernameValue, emailValue, passwordValue);
         location.reload();
      } else {
        return false;
      }}
      