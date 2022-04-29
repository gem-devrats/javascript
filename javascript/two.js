let userName, email, number;
let userNameTrue, emailTrue, numberTrue;
let counter = 1;

function one() {
    userNameTrue = false
    emailTrue = false
    numberTrue = false
    userName = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;
    validate();
}

function validate() {
    var a = /^[A-Za-z]+$/;
    var b = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var c = /^\d{10}$/;
    if (a.test(userName) && userName.length != 0) {
        userNameTrue = true;
        document.getElementById("name-valid").style.display = "none";
    } else {
        userName = false;
        document.getElementById("name-valid").style.display = "block";
    }
    if (b.test(email) && email.length != 0) {
        emailTrue = true;
        document.getElementById("email-valid").style.display = "none";
    } else {
        email = false;
        document.getElementById("email-valid").style.display = "block";
    }
    if (c.test(number) || number.length == 0) {
        numberTrue = true;
        document.getElementById("number-valid").style.display = "none";
    } else {
        number = false;
        document.getElementById("number-valid").style.display = "block";
    }
    isvalid();
}


function isvalid() {
    if (userNameTrue && emailTrue && numberTrue) {
        saveInformation();
    }
}

function saveInformation() {
    localStorage.setItem(counter + "name", userName);
    localStorage.setItem(counter + "email", email);
    localStorage.setItem(counter + "number", number);
    showInformation();
}

function showInformation() {
    var table = document.getElementById("table-body");
    let p = document.createElement("tr")
    console.log(localStorage);
    p.innerHTML = `<tr>
    <th scope="row">${counter}</th>
    <td>${localStorage.getItem(counter + "name")}</td>
    <td>${localStorage.getItem(counter + "email")}</td>
    <td>${localStorage.getItem(counter + "number")}</td>
  </tr>`
    table.append(p);
    counter++;
}