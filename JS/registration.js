const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phnoInput = document.querySelector('#phno');
const stateInput = document.querySelector('#state');
const districtInput = document.querySelector('#district');
const pinnoInput = document.querySelector('#pinno');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
var emailregx = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
var phnoregx = /^[6-9]\d{9}$/;
// 1. ^ represents the starting of the number.
// 2. [1-9]{1} represents the starting digit in the pin code ranging from 1 to 9.
// 3. [0-9]{2} represents the next two digits in the pin code ranging from 0 to 9.
// 4. \\s{0, 1} represents the white space in the pin code that can occur once or never.
// 5. [0-9]{3} represents the last three digits in the pin code ranging from 0 to 9.
// 6. $ represents the ending of the number.
pinnoregex = "^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$";
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (nameInput.value === '' || emailInput.value === '' || phnoInput.value === '' || stateInput.value === '' || districtInput.value === '' || pinnoInput.value === '' || usernameInput.value === '' || passwordInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 9000);
    }
    if (emailregx.test(emailInput.value)) {
        msg.classList.add('error');
        msg.innerHTML = 'please Enter a valid Email';
        setTimeout(() => msg.remove(), 3000);

    }
    if (phnoregx.test(phnoInput.value)) {
        msg.classList.add('error');
        msg.innerHTML = 'please Enter a valid Mobile No';
        setTimeout(() => msg.remove(), 3000);

    }
    if (pinnoregex.test(pinnoInput.value)) {
        msg.classList.add('error');
        msg.innerHTML = 'please Enter a valid Pin No';
        setTimeout(() => msg.remove(), 3000);

    }

}