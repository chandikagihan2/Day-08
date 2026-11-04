function btnClickName(){
    let txtName = document.getElementById("txtName").Value;

    document.getElementById("lblName").innerHTML = "Hello" + txtName;

    document.getElementById("olnames").innerHTML+=`<li>${txtName}<li>`;

}