
let items=localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")): [];




let saleHistory =localStorage.getItem("saleHistory") ?
    JSON.parse(localStorage.getItem("saleHistory")): [];

let user =localStorage.getItem("activeUser") ?
    JSON.parse(localStorage.getItem("activeUser")): {};

let sellerItems=getSellerItems();

if(!Object.keys(user).length==0){
    document.querySelector("#user-label").textContent+=user.userName;
    document.querySelector("#email-label").textContent+=user.email;
};

let cartItems =[];
localStorage.setItem("cartItems",JSON.stringify(cartItems));
document.querySelector("#main-link").setAttribute("href","/src/Html/seller.html");

    
    
if(items.length==0){
    fetch('/src/Jsons/items.json').then(res =>res.json()).then(data => {
        items=data;
        localStorage.setItem("items",JSON.stringify(items));
    });
    
};
initialze(sellerItems);

    
function initialze(data){
    const main =document.querySelector("#main");
    data.forEach(item => {
        const itemDiv=document.createElement("div");
            itemDiv.classList.add("item");
        
        const itemImgDiv=document.createElement("div");
            itemImgDiv.classList.add('photo-div');
            const photo=document.createElement("img");
            photo.src=item.link;
            photo.alt="Item";
            photo.classList.add("photo");
            itemImgDiv.appendChild(photo);
        itemDiv.appendChild(itemImgDiv);

        const itemDescDiv=document.createElement("div");    
            

            itemDescDiv.id="item-desc-div";
            const paraDesc =document.createElement("p");
            paraDesc.textContent=item.description;
            paraDesc.classList.add("disc");
            itemDescDiv.appendChild(paraDesc);
            itemDescDiv.appendChild(paraDesc);
            
            const paraName =document.createElement("p");
            paraName.textContent=item.nameProduct;
            paraName.classList.add("name-product");
            itemDescDiv.appendChild(paraName);

            
            const paraPrice =document.createElement("p");
            paraPrice.textContent=`Price: ${item.price}$`;
            paraPrice.classList.add("item-price");
            const paraSeller =document.createElement("p");
            paraSeller.textContent=`Quantity: ${item.quantity}`;
            paraSeller.classList.add("item-price");
            itemDescDiv.appendChild(paraPrice);
            itemDescDiv.appendChild(paraSeller);

            const itemsButtonDiv =document.createElement("div");
            itemsButtonDiv.classList.add("item-button-div");

            const ModifyItemButton =document.createElement("button");
            ModifyItemButton.innerText="Modify Item";
            ModifyItemButton.classList.add("item-buttons");
            ModifyItemButton.id="add-cart-button";
            itemsButtonDiv.appendChild(ModifyItemButton);
            ModifyItemButton.addEventListener("click", function (){
                const index=items.findIndex((i)=> i.nameProduct==paraName.textContent);
                localStorage.setItem("modifyItem",JSON.stringify(items[index]));
                redirectToModifyPage();
            });

            const removeItemButton =document.createElement("button");
            removeItemButton.innerText="Take off market";
            removeItemButton.classList.add("item-buttons");
            removeItemButton.id="remove-cart-button";
            removeItemButton.addEventListener("click",function(){
                const index=items.findIndex((i)=> i.nameProduct==paraName.textContent);
                items.splice(index,1);
                localStorage.setItem("items",JSON.stringify(items));
                location.reload();

            });
            itemsButtonDiv.appendChild(removeItemButton);
            
            itemDescDiv.appendChild(itemsButtonDiv);

            


        itemDiv.appendChild(itemDescDiv);
        main.appendChild(itemDiv);
    });
    if (cartItems.length!=0){
        document.querySelector("#no-items-decleration").classList.add("hidden");
    };
    
    
};

const loginButton=document.querySelector("#sign-out-button");
loginButton.addEventListener("click", redirectMainPage);
console.log(loginButton);

const addItemsButton=document.querySelector("#add-items-button");
addItemsButton.addEventListener("click", redirectToAddItemsPage);

document.querySelector("#modify-account-button").addEventListener("click",redirectToModifyUserPage);
    

function toggleMenu() {
    let menu = document.getElementById('menu');
    if (menu.style.left === '0px') {
        menu.style.left = '-100%'; 
    } else {
        menu.style.left = '0px'; 
    }
}

function toggleAccount(){
    let account = document.getElementById('account-div');
    if (account.style.top === '0px') {
        account.style.top = '-100%'; 
        
    } else {
        account.style.top = '0px'; 
        
    }
}
// function clickOutsideAccount(event) {
//     let accountButton=document.getElementById('account-button');
//     let account = document.getElementById('account-div');
//     if (!account.contains(event.target) && event.target !== accountButton) {
//         account.style.top = '0px';
//         document.removeEventListener('click', clickOutsideAccount);
//     }
// }


function redirectLoginPage(){
    window.location.href = "/src/Html/login.html";
}
function redirectMainPage(){
    window.location.href = "/src/Html/mainPage.html";
}

function redirectToAddItemsPage(){
    window.location.href = "/src/Html/addItemsPage.html";
}

function getSellerItems(){
    const array=[];
    items.forEach((item)=>{
        if(item.seller.userName==user.userName){
            array.push(item);
        }
    });
    return array;
};

function redirectToModifyPage(){
     window.location.href = "/src/Html/modifyItemPage.html";
}
function redirectToModifyUserPage(){
     window.location.href = "/src/Html/modify.html";
}