
let table, tableBody, tableHead;

function dynamicTable(){
    var body = document.getElementById("body");
    table = document.createElement("table");
    tableHead = document.createElement("thead");
    tableBody = document.createElement("tbody");
    table.append(tableHead);
    table.append(tableBody);
    table.classList.add("table");
    addHead("Name", "Age","DOB","Email","Compony");
    addRow("Devvrat","21","25-03-2001","devrat@gmail.com","gemini")
    addRow("Rahul","22","23-11-2000","rahul@gmail.com","accenture")
    addRow("Raj","31","21-09-1991","raj@gmail.com","TCS")
    addRow("Prem","18","21-09-2004","prem@gmail.com","Wipro")
    console.log(table);
    body.append(table)
}

function addRow(name,age,DOB,email,compony){
    var tableRow = document.createElement("tr");
    var tableD = document.createElement("td");
    var tableD2 = document.createElement("td");
    var tableD3 = document.createElement("td");
    var tableD4 = document.createElement("td");
    var table5 = document.createElement("td");
    var Name = document.createTextNode(name);
    var Age = document.createTextNode(age);
    var DoB = document.createTextNode(DOB);
    var Email = document.createTextNode(email);
    var Compony = document.createTextNode(compony);
    tableD.appendChild(Name);
    tableD2.appendChild(Age);
    tableD3.appendChild(DoB);
    tableD4.appendChild(Email);
    table5.appendChild(Compony);
    tableRow.append(tableD);
    tableRow.append(tableD2);
    tableRow.append(tableD3);
    tableRow.append(tableD4);
    tableRow.append(table5);
    tableBody.append(tableRow);
}

function addHead(name,age,DOB,email,compony){
    var tableRow = document.createElement("tr");
    tableRow.style.fontWeight = "500";
    tableRow.classList.add("table-dark");
    var tableD = document.createElement("th");
    var tableD2 = document.createElement("th");
    var tableD3 = document.createElement("th");
    var tableD4 = document.createElement("th");
    var table5 = document.createElement("th");
    var Name = document.createTextNode(name);
    var Age = document.createTextNode(age);
    var DoB = document.createTextNode(DOB);
    var Email = document.createTextNode(email);
    var Compony = document.createTextNode(compony);
    tableD.appendChild(Name);
    tableD2.appendChild(Age);
    tableD3.appendChild(DoB);
    tableD4.appendChild(Email);
    table5.appendChild(Compony);
    tableRow.append(tableD);
    tableRow.append(tableD2);
    tableRow.append(tableD3);
    tableRow.append(tableD4);
    tableRow.append(table5);
    tableHead.append(tableRow);
}