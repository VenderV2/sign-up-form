let pass = document.querySelector('.password');
let confirmPass = document.querySelector('.confirm-pass')

let password = document.querySelectorAll('#password');
password.forEach(element => {
    element.addEventListener('keyup', () => {
        if (confirmPass.value == pass.value) {
            element.style.border = '2px solid rgb(173, 173, 173)';
        }
        else {
            element.style.border = '2px solid red';

        }
    } )
});