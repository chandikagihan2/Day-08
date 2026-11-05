function addCustomer() {
    const id = document.getElementById("txtId").value;
    const name = document.getElementById("txtName").value;
    const age = document.getElementById("txtAge").value;
    const city = document.getElementById("txtCity").value;
    const salary = document.getElementById("txtSalary").value;

    const customer = { id, name, age, city, salary };
    customerNames.push(customer);
    loadCustomerTable();
}

const customerNames = [];

function loadCustomerTable() {
    let body = `<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Salary</th>
    </tr>`;


    for (let customer of customerNames) {
        body += `<tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.city}</td>
            <td>${customer.salary}</td>
        </tr>`;
    }
    document.getElementById("CustomerTable").innerHTML = body;

}
function addCustomer() {
    const id = document.getElementById("txtId").value;
    const name = document.getElementById("txtName").value;
    const price = document.getElementById("txtAge").value;
    const  = document.getElementById("txtCity").value;
    const salary = document.getElementById("txtSalary").value;

    const customer = { id, name, age, city, salary };
    customerNames.push(customer);
    loadCustomerTable();
}

const ItemNames = [];

function loadItemTable() {
    let body = `<tr>
        <th>ID</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Material</th>
        <th>Discount</th>
    </tr>`;


    for (let item of ItemNames) {
        body += `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.material}</td>
            <td>${item.discount}</td>
        </tr>`;
    }
    document.getElementById("CustomerTable").innerHTML = body;

}


