let items=localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")): [];
    
if(items.length==0){
    fetch('./items.json').then(res =>res.json()).then(data => {
        items=data;
        localStorage.setItem("items",JSON.stringify(items));
    });
    
};

document.querySelector("#browse-button").addEventListener("click",browseAction);
document.querySelector("#link").addEventListener("click", clearAction);


function browseAction(){
    document.getElementById('fileInput').click();
};

function clearAction(){
    document.querySelector("#link").textContent="";
    console.log("hello");
};