const customerNames = [];

function btnClickName(){
    let txtName = document.getElementById("txtName").value;
    customerNames.push(txtName);
    console.log(customerNames);
    loadNames();
}

function loadNames() {
    document.getElementById("lblName").innerHTML = "Hello, " + customerNames[customerNames.length - 1];
    let olNames = document.getElementById("olnames");
    olNames.innerHTML = "";
    for(let cName of customerNames){
        olNames.innerHTML += `<li>${cName}</li>`;
    };
}

const itemNames = [];

function btnClickItem(){
    let txtItem = document.getElementById("txtItem").value;
    itemNames.push(txtItem);
    console.log(itemNames);
    loadItems();
}   

function loadItems() {
    document.getElementById("lblItem").innerHTML = "Last added: " + itemNames[itemNames.length - 1];
    let olItems = document.getElementById("olitems");
    olItems.innerHTML = "";
    for(let itemName of itemNames){
        olItems.innerHTML += `<li>${itemName}</li>`;
    };
}
