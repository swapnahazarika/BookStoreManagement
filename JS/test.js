const myForm = document.querySelector('#my-form');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const fetchButton = document.querySelector('.fetchButton');
const list = document.querySelector('.list');

fetchButton.addEventListener('click', getData);

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // e.stopPropagation();

    let titleInputValue = titleInput.value;
    let bodyInputValue = bodyInput.value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: titleInputValue,
                body: bodyInputValue,

            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json()).then((data) => tableCreation(data))


}

function tableCreation(data) {
    //Create a HTML Table element.
    let table = document.createElement("TABLE");
    table.classList.add('table');

    //Get the count of columns.
    let columnCount = data.length;
    let col = [];
    for (let i = 0; i < columnCount; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1); // TABLE ROW.
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.classList.add('customth');
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < data.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.classList.add('customtabledata');
            tabCell.innerHTML = data[i][col[j]];

        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}