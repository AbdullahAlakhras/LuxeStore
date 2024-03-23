
let items=localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")): [];


let saleHistory =localStorage.getItem("saleHistory") ?
    JSON.parse(localStorage.getItem("saleHistory")): [];

let user =localStorage.getItem("activeUser") ?
    JSON.parse(localStorage.getItem("activeUser")): {};

if(!Object.keys(user).length==0){
    document.querySelector("#user-label").textContent+=user.userName;
    document.querySelector("#email-label").textContent+=user.email;
};

let cartItems =[];
localStorage.setItem("cartItems",JSON.stringify(cartItems));


    
    
if(items.length==0){
    fetch('./items.json').then(res =>res.json()).then(data => {
        items=data;
        localStorage.setItem("items",JSON.stringify(items));
    });
    
};
initialze(items);

    
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

            const addCartButton =document.createElement("button");
            addCartButton.innerText="Add to Cart";
            addCartButton.classList.add("item-buttons");
            addCartButton.classList.add("disable-add");
            addCartButton.id="add-cart-button";
            itemsButtonDiv.appendChild(addCartButton);
            addCartButton.addEventListener("click", function (){
                addToCart(item.nameProduct,item.price,document.getElementById(`quantityInput-${item.id}`).value);
                removeCartButton.disabled=false;
                addCartButton.disabled=true;
                quantityInput.disabled=true;
                incrementButton.disabled=true;
                decrementButton.disabled=true;
                changeTotalLabel();
            });

            const removeCartButton =document.createElement("button");
            removeCartButton.innerText="Remove from Cart";
            removeCartButton.classList.add("item-buttons");
            removeCartButton.classList.add("disable-remove");
            removeCartButton.id="remove-cart-button";
            removeCartButton.disabled=true;
            removeCartButton.addEventListener("click",function(){
                removeFromCart(item.nameProduct,item.price,document.getElementById(`quantityInput-${item.id}`).value);
                removeCartButton.disabled=true;
                addCartButton.disabled=false;
                quantityInput.disabled=false;
                incrementButton.disabled=false;
                decrementButton.disabled=false;
                changeTotalLabel();
            });
            itemsButtonDiv.appendChild(removeCartButton);
            
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
    window.location.href = "./login.html";
}
function redirectMainPage(){
    window.location.href = "./mainPage.html";
}