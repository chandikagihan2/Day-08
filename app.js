const customerNames = [];


function btnClickName(){
    let txtName = document.getElementById("txtName").value;
    customerNames.push(txtName);
    console.log(customerNames);
    loadNames();
}

function loadNames() {
    document.getElementById("lblName").innerHTML = "Hello, " + customerNames[customerNames.length - 1];
    for(let cName of customerNames){
        document.getElementById("lblName").innerHTML += `<li>${cName}</li>`;
    };
}