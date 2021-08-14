const myForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const msgText = document.querySelector("#msgId");
//const submitButton = document.querySelector('.submitbtn');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;
    const requestBody = {
        username: usernameInput.value,
        password: passwordInput.value
    };

    fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        })
        .then(r => r.json().then(data => ({ status: r.status, body: data })))
        .then(obj => {
            console.log('Body', obj.body.message);
            printText(obj);
        });


    // .then((res) => res.json())
    //     .then((data) => {
    //         console.log('Success:', data.status);
    //         printText(data.message);
    //     })

    // .catch((error) => {
    //     console.error('Error:', error);
    // });




}

function printText(obj) {
    msgText.innerHTML = obj.body.message;
}