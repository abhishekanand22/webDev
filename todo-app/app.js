let btn = document.querySelector(".addButton");
let ul = document.querySelector(".unList");
let inp = document.querySelector("input");


btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Mark as Done";
    dltBtn.classList.add("delete");
    

    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value="";
});



ul.addEventListener("click" , function(event){
     if(event.target.nodeName="BUTTON")
     {
        let listItem = event.target.parentElement;
        listItem.remove();
     }
});

