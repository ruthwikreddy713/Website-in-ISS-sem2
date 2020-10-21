function addrow() {
    "use strict";
    var table=document.getElementById("table");
    var row=document.createElement("tr");
    console.log(row);
    var td1 = document.createElement("td");
     var td2 = document.createElement("td");
     var td3 = document.createElement("td");
    var td4 = document.createElement("td");

     td1.innerHTML = document.getElementById("name").value;
    td2.innerHTML  = document.getElementById("skill").value;
    td3.innerHTML  = document.getElementById("level").value;
    td4.innerHTML = document.getElementById("comment").value;
    if (document.getElementById("level").value==1) 
                td3.innerHTML="Beginner";
    else if (document.getElementById("level").value==2)
                td3.innerHTML="Medium";
    else 
                td3.innerHTML="expert";
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    table.children[0].appendChild(row);

}