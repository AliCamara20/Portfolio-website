let hamMenu = document.querySelector(".hamMenu");
let navbar = document.querySelector(".nav");


hamMenu.addEventListener('click', function(){
    navbar.classList.toggle('nav-visible');
})

var form = document.getElementById("contact_form");


async function handleSubmit(event) {
event.preventDefault();
var name = document.getElementById('name_input').value;
var email = document.getElementById('email_input').value;
var message = document.getElementById('message_input').value;
var status = document.getElementById("contact_form-status");
fetch(event.target.action, {
    method: form.method,
    body: JSON.stringify({
    sender_name: name,
    sender_email: email,
    sender_message: message
    }),
    headers: {
        'Accept': 'application/json'
    }
}).then(response => {
    if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
    } else {
    response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
        status.innerHTML = "Oops! There was a problem submitting your form"
        }
    })
    }
}).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)
