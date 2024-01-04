let pass = document.querySelector('.password');
let confirmPass = document.querySelector('.confirm-pass')

let password = document.querySelectorAll('#password');
password.forEach(element => {
    element.addEventListener('focusout', () => {
        if (confirmPass.value === pass.value) {
            pass.style.border = '2px solid rgb(173, 173, 173)';
            confirmPass.style.border = '2px solid rgb(173, 173, 173)';
        }
        else {
            pass.style.border = '2px solid red';
            confirmPass.style.border = '2px solid red';

        }
    } )
});