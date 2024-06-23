const passwordmatch = document.querySelector("#passwordmatch");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");

password.addEventListener("focusout", confirmPasswords);
confirmPassword.addEventListener("focusout", confirmPasswords);


function confirmPasswords(e) {
    if (password.value == confirmPassword.value) {
        passwordmatch.textContent = "";
    } else {
        passwordmatch.textContent = "*Passwords don't match";
    }
}