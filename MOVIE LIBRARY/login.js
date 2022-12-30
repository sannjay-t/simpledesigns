/**
 * Variables
 */
 const signupButton = document.getElementById('signup-button'),
 loginButton = document.getElementById('login-button'),
 userForms = document.getElementById('user_options-forms')

/**
* Add event listener to the "Sign Up" button
*/
signupButton.addEventListener('click', () => {
userForms.classList.remove('bounceRight')
userForms.classList.add('bounceLeft')
}, false)

/**
* Add event listener to the "Login" button
*/
loginButton.addEventListener('click', () => {
userForms.classList.remove('bounceLeft')
userForms.classList.add('bounceRight')
}, false)


function validate(e) {
    e.preventDefault();
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }
    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    window.location.href = "/index.html"

} 