const formSignUp = document.querySelector("#form");
formSignUp.addEventListener("submit", (event) => {
    event.preventDefault();

    //get data from user
    const username= document.getElementById("username").value;
    const email = document.getElementById("password").value;
    const password = document.getElementById("password").value;

    const data = { username, email, password };
    //interact with endpoint
    fetch("https://uninterested-bear-polo-shirt.cyclic.app/api/v1/signup", {
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
            // redirect to login page
            window.location.href = "./login.html";
        })
        .catch((error) => {
            console.error(error);
            alert("An error occurred during sign-up. Please try again later.");
        });
});
