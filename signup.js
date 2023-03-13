 
const formSignUp = document.querySelector("#form");
formSignUp.addEventListener("submit", (event) => {
    event.preventDefault();

    //get data from user
    const username= document.getElementById("username").value;
    const email = document.getElementById("password").value;
    const password = document.getElementById("password").value;

    const data = { username, email, password };
    //interacy with endpoint
    fetch("  https://uninterested-bear-polo-shirt.cyclic.app/api/v1/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            alert(data.message);
        })
        .catch((error) => {
            console.error(error);
            alert("An error occurred during sign-up. Please try again later.");
        });
});
 



// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }
//     //retreiving user form the c
//  if (usernameValue && emailValue && passwordValue && password2Value && passwordValue === password2Value) {
//   let users = JSON.parse(localStorage.getItem('users')) || [];

//   // Check if user with same email already exists
//   const existingUser = users.find(user => user.email === emailValue);

//   if (existingUser) {
//     setError(email, 'User already exists, please login.');
//     requestAnimationFrame(() => email.focus());
//     return;
//   }

//   const newUser = {
//     username: usernameValue,
//     email: emailValue,
//     password: passwordValue
//   };

//   users.push(newUser);
//   localStorage.setItem('users', JSON.stringify(users));
//   alert('Registered succefully', newUser);
//   window.location.href = 'login.html';
//   form.reset();
// }}
