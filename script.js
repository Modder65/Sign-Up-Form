const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmpass');
const submit = document.querySelector('button');

confirmPass.addEventListener('input', (event) => {
    if (confirmPass.value !== password.value) {
        confirmPass.setCustomValidity("The passwords do not match!");
    } else if (confirmPass.value === password.value) {
        confirmPass.setCustomValidity("");
    }
});




