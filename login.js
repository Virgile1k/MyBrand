 // FORM VALIDATION on the Login page
 const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const emailValue= document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  const data={email: emailValue, password:passwordValue}
  fetch('http://localhost:3000/api/v1/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("token", data.token);
    location.href = "./Admindashboard.html";
    console.log(blog.message);
  })
  .catch(err => console.log(err));
});




  //use fetch method to interact with your login api endpoint
  
    // if (data.ok) {
    // // set our token in LS
    // localStorage.setItem("Token", data.token)
    // location.href = "/Admindashboard.html"
    // } else {
    // alert(data.message)
    // }
    // })
     
    
    
    
    
    
    
// const setError = (element, message) => {
// const inputControl = element.parentElement;
// const errorDisplay = inputControl.querySelector('.error');

 
// errorDisplay.innerText = message;
// inputControl.classList.add('error');
// inputControl.classList.remove('success');
// };

// const setSuccess = element => {
// const inputControl = element.parentElement;
// const errorDisplay = inputControl.querySelector('.error');

 
// errorDisplay.innerText = '';
// inputControl.classList.add('success');
// inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
// const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
// return re.test(String(email).toLowerCase());
// };

// const validateInputs = () => {
// const emailValue = email.value.trim();
// const passwordValue = password.value.trim();

 
// if (emailValue === '') {
//     setError(email, 'Email is required');
// } else if (!isValidEmail(emailValue)) {
//     setError(email, 'Provide a valid email address');
// } else {
//     setSuccess(email);
// }

// if (passwordValue === '') {
//     setError(password, 'Password is required');
// } else if (passwordValue.length < 8 ) {
//     setError(password, 'Password must be at least 8 characters');
// } else {
//     setSuccess(password);
// }
//    const users = JSON.parse(localStorage.getItem('users')) || [];
//       const user = users.find(user => user.email === emailValue);

//       if (user && user.password === passwordValue) {
//         console.log('User logged in:', user);
//         window.location.href = 'Admindashboard.html'; // replace with your admin dashboard URL
//       } else {
//         alert('Invalid email or password.');
//       }
      
//       form.reset();
//     }