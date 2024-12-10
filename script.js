var poplayer=document.querySelector(".popup-overlay");
var popbox=document.querySelector(".popupbox");
var addpop=document.querySelector("#add-popup-button");
addpop.addEventListener("click",()=>{
    poplayer.style.display="block";
    popbox.style.display="block";
})

var cancel=document.querySelector("#cancel-b");
var addb=document.querySelector("#add-b");
var container=document.querySelector(".container");
cancel.addEventListener("click",function(event){
event.preventDefault();
    poplayer.style.display="none";
    popbox.style.display="none";
})
var btin=document.querySelector("#bt-input");
var bain=document.querySelector("#ba-input");
var bdin=document.querySelector("#bd-input");

addb.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    
    div.innerHTML=`<h2>${btin.value}</h2>`+
    `<h4>${bain.value}</h4>`+
    `<p>${bdin.value}</p>`+
    "<button onclick='deleteb(event)'>Delete</button>";

    container.append(div);
    poplayer.style.display="none";
    popbox.style.display="none";
})

function deleteb(event){
    event.target.parentElement.remove();
}