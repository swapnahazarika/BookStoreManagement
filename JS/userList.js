const fetchButton = document.querySelector('.fetchButton');
const list = document.querySelector('.list');

fetchButton.addEventListener('click', getuserList);



function getuserList() {
    console.log("inside getUserList");
    fetch('http://localhost:8080/users')
        // .then((res) => res.json()).then((data) => data.forEach(function(item) {
        //                 const li = document.createElement("li");
        //                 console.log("inside loop");
        //                 li.appendChild(document.createTextNode(item.name));
        //                 li.appendChild(document.createTextNode(" "));
        //                 li.appendChild(document.createTextNode(item.pin));
        //                 list.appendChild(li);
        //             }))
        //         }
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

        let btnEdit = document.createElement("button");
        btnEdit.innerHTML = "Edit";
        btnEdit.addEventListener("click", function() {
            alert("Row is edited");
        });
        let btnDelete = document.createElement("button");
        btnDelete.innerHTML = "Delete";
        btnDelete.addEventListener("click", function() {
            alert("Row is deleted");
        });
        var tabCommon = tr.insertCell(-1);
        tabCommon.classList.add('customtabledata');
        tabCommon.appendChild(btnEdit);
        tabCommon.appendChild(btnDelete);

    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);

}