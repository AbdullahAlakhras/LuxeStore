let items=localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")): [];

let activeUser=localStorage.getItem("activeUser") ?
    JSON.parse(localStorage.getItem("activeUser")): [];

if(items.length==0){
    fetch('/src/Jsons/items.json').then(res =>res.json()).then(data => {
        items=data;
        localStorage.setItem("items",JSON.stringify(items));
    });
    
};

document.querySelector("#browse-button").addEventListener("click",browseAction);
document.querySelector("#clear-button").addEventListener("click", clearAction);
document.querySelector("#reset-button").addEventListener("click", resetAction);
document.querySelector("#link").addEventListener("input", linkAction);
document.querySelector("#add-item-button").addEventListener("click", addItemAction);


function browseAction(){
    document.getElementById('fileInput').click();
};

function clearAction(){
    document.querySelector("#link").value=""; 
    document.querySelector("#image").src="";
};

function addItemAction(){
    const productName= document.querySelector("#product-name").value; 
    if(productName.trim().length===0){
        document.querySelector("#warning").classList.remove("hidden");
        return;    
    }
    const company= document.querySelector("#company-name").value; 
     if(company.trim().length===0){
        document.querySelector("#warning").classList.remove("hidden"); 
        return;   
    }
    const description= document.querySelector("#description").value; 
     if(description.trim().length===0){
        document.querySelector("#warning").classList.remove("hidden");
        return;    
    }
    let quantity= document.querySelector("#quantity").value; 
    quantity=Number(quantity);
     if(quantity<=0){
        document.querySelector("#warning").classList.remove("hidden");
        return;    
    }
    const price= document.querySelector("#price").value; 
    if(price.trim().length===0){
        document.querySelector("#warning").classList.remove("hidden");
        return;    
    }
    const typeOfProduct= document.querySelector("#type-of-product").value;
    if(typeOfProduct.trim().length===0){
        document.querySelector("#warning").classList.remove("hidden");
        return;    
    } 
    //
    const link= document.querySelector("#link").value; 
    if(link.trim().length===0){
        document.querySelector("#warning").classList.remove("hidden");
        return;    
    }
    const image= document.querySelector("#image");

    const seller={
        companyName: company ,
        userName: activeUser.userName,
        password: activeUser.password ,
        bankAccount: activeUser.bankAccount
    }

    const item={
        id : items.length+1,
        link : link,
        description:description,
        quantity:Number(quantity),
        nameProduct: productName,
        price: Number(price),
        seller: seller,
        type: typeOfProduct
    }
    items.push(item);
    localStorage.setItem("items",JSON.stringify(items));
    console.log('hahah');
};

function resetAction(){
    document.querySelector("#product-name").value=""; 
    document.querySelector("#company-name").value=""; 
    document.querySelector("#description").value=""; 
    document.querySelector("#quantity").value=0; 
    document.querySelector("#price").value=""; 
    document.querySelector("#type-of-product").value=""; 
    //
    document.querySelector("#link").value=""; 
    document.querySelector("#image").src="";
};

function linkAction(){
     const link= document.querySelector("#link").value;
     const image= document.querySelector("#image");
     
     if(link.trim().length===0){
        return;
     }

    image.src=link;
}