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
const emailmsg = document.querySelector('.emailmsg');
const phnomsg = document.querySelector('.phnomsg');
const pinnomsg = document.querySelector('.pinnomsg');
const userList = document.querySelector('#users');
const emailregx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9-]+).([a-z]+)(.[a-z]+)?$/;
const phnoregx = /^[6-9]\d{9}$/;
// 1. ^ represents the starting of the number.
// 2. [1-9]{1} represents the starting digit in the pin code ranging from 1 to 9.
// 3. [0-9]{2} represents the next two digits in the pin code ranging from 0 to 9.
// 4. \\s{0, 1} represents the white space in the pin code that can occur once or never.
// 5. [0-9]{3} represents the last three digits in the pin code ranging from 0 to 9.
// 6. $ represents the ending of the number.
const pinnoregex = /^(\d{4}|\d{6})$/;
myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault();
    // e.stopPropagation();
    if (nameInput.value === '' || emailInput.value === '' || phnoInput.value === '' || stateInput.value === '' || districtInput.value === '' || pinnoInput.value === '' || usernameInput.value === '' || passwordInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        // Remove error after 3 seconds
        setTimeout(() => { msg.classList.remove('error'), msg.innerHTML = "" }, 3000);
    } else if (!emailValidation(emailInput.value.trim())) {
        emailmsg.classList.add('error');
        emailmsg.innerHTML = 'please Enter a valid Email';
        //console.log("ddddddddddddddddddddd");
        setTimeout(() => { emailmsg.classList.remove('error'), emailmsg.innerHTML = "" }, 3000);

    } else if (!phnoValidation(phnoInput.value.trim())) {
        phnomsg.classList.add('error');
        phnomsg.innerHTML = 'please Enter a valid Mobile No';
        setTimeout(() => { phnomsg.classList.remove('error'), phnomsg.innerHTML = "" }, 3000);

    } else if (!pinnoValidation(pinnoInput.value.trim())) {
        pinnomsg.classList.add('error');
        pinnomsg.innerHTML = 'please Enter a valid Pin No';
        setTimeout(() => { pinnomsg.classList.remove('error'), pinnomsg.innerHTML = "" }, 3000);
    }
    let nameInputValue = nameInput.value;
    let emailInputValue = emailInput.value;
    let phnoInputValue = phnoInput.value;
    let stateInputValue = stateInput.value;
    let districtInputValue = districtInput.value;
    let pinnoInputValue = pinnoInput.value;
    let usernameInputValue = usernameInput.value;
    let passwordInputValue = passwordInput.value;
    const apiurl = 'http://localhost:8080/user';

    fetch(apiurl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: nameInputValue,
                email: emailInputValue,
                phoneNo: phnoInputValue,
                state: stateInputValue,
                district: districtInputValue,
                pin: pinnoInputValue,
                username: usernameInputValue,
                password: passwordInputValue
            })
        })
        //.then((res) => console.log(res))
        .then(function(res) {
            if (res.status === 200) {
                location.href = "/BookStoreManagement/login.html";
            };
        })

}

function emailValidation(emailInput) {
    return emailregx.test(emailInput);

}

function phnoValidation(phnoInput) {
    return phnoregx.test(phnoInput);

}

function pinnoValidation(pinnoInput) {
    return pinnoregex.test(pinnoInput);

}