const burgerButton = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');

const form = document.getElementById('form');
const button = document.getElementById('button');

burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
})

button.addEventListener('click', () => {
    const email = document.getElementById('eMail').value;
    const password = document.getElementById('password').value;

    const successMessage = document.getElementById('successMessage');
    const warningMessage = document.getElementById('warningMessage');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>?]).{8,}$/;

    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    if(isValidEmail && isValidPassword) {
        localStorage.setItem('email', email);
        warningMessage.textContent = "";
        successMessage.textContent = "Log in succeeded";

        setTimeout(() => {
            window.location.assign("/post-add-pg/post-add-pg.html");
          }, 3000);
    } 
    else if(isValidEmail && !isValidPassword){
        warningMessage.textContent = "Password must contain at least 8 characters, included capital letters, numbers, symbols";
        successMessage.textContent = "";
    } 
    else {
        warningMessage.textContent = "Enter valid Email and password";
        successMessage.textContent = "";
    }
})