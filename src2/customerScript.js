let items=localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")): [];

let saleHistory =localStorage.getItem("saleHistory") ?
    JSON.parse(localStorage.getItem("saleHistory")): [];

let user =localStorage.getItem("user") ?
    JSON.parse(localStorage.getItem("user")): [];

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
                const quantitySelector = document.createElement('div');
                quantitySelector.classList.add('quantity-selector');

                const decrementButton = document.createElement('button');
                decrementButton.classList.add('decrement');
                decrementButton.textContent = '-';
                decrementButton.addEventListener("click",decrementQuantity);
                decrementButton.classList.add("quantity-buttons");
                function decrementQuantity(){
                    const quantityInput=document.getElementById(`quantityInput-${item.id}`);
                    let currentValue = parseInt(quantityInput.value);
                        if (currentValue > 1) {
                            quantityInput.value = currentValue - 1;
                  }
                }

                quantitySelector.appendChild(decrementButton);

                const quantityInput = document.createElement('input');
                quantityInput.id=`quantityInput-${item.id}`;
                quantityInput.classList.add('quantity');
                quantityInput.setAttribute('type', 'number');
                quantityInput.setAttribute('value', '1');
                quantityInput.setAttribute('min', '1');
                quantityInput.style.width = '50px';
                quantitySelector.appendChild(quantityInput);

                const incrementButton = document.createElement('button');
                incrementButton.classList.add('increment');
                incrementButton.textContent = '+';
                incrementButton.addEventListener("click",incrementQuantity);
                incrementButton.classList.add("quantity-buttons");
                function incrementQuantity(){
                        const quantityInput=document.getElementById(`quantityInput-${item.id}`);
                        let currentValue = parseInt(quantityInput.value);
                        quantityInput.value = currentValue + 1;
                    }
                quantitySelector.appendChild(incrementButton);
                
               
                itemDescDiv.appendChild(quantitySelector);

                
                                


                const paraName =document.createElement("p");
                paraName.textContent=item.nameProduct;
                paraName.classList.add("name-product");
                itemDescDiv.appendChild(paraName);

               
                const paraPrice =document.createElement("p");
                paraPrice.textContent=`Price: ${item.price}$`;
                paraPrice.classList.add("item-price");
                const paraSeller =document.createElement("p");
                paraSeller.textContent=`Seller: ${item.seller}`;
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
        changeTotalLabel();
        document.querySelector("#clear-button").addEventListener("click",clearCartAction);
    };


const signOutButton=document.querySelector("#sign-out-button");
signOutButton.addEventListener("click", redirectMainPage);

function clearCartAction(){
    document.querySelector("#cart-table-body").replaceChildren();
    cartItems.splice(0);
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    changeTotalLabel();

   const addButtons= document.querySelectorAll(".disable-add");
   const removeButtons= document.querySelectorAll(".disable-remove");

   Array.from(addButtons).map((i) =>{
    i.disabled=false;
   });
   Array.from(removeButtons).map((i) =>{
    i.disabled=true;
   });
   changeNoOfCartItems();
};


function changeTotalLabel(){
    const totalLabel=document.querySelector("#total-price");
    if(cartItems.length==0){
        totalLabel.textContent=0;
        return;
    }
    else{
        const sum =cartItems.reduce((sum,i)=>{
        return sum= sum + (i.price * i.quantity);
        
    }, 0);
    console.log(sum);
    totalLabel.textContent=sum; 
    }
   
};


function toggleCartEmptyLabel(){
    const label =document.querySelector("#no-items-decleration");
    if(label.classList.contains("hidden")){
        label.classList.remove("hidden");
    }
    else{
        label.classList.add("hidden");
    }
}

function removeFromCart(item,price,quantity){
    const tBody= document.querySelector("#cart-table-body");
    const dataRow= document.querySelector(`#${item.replace(/\s/g, "-")}`);
    tBody.removeChild(dataRow);
    const index= cartItems.findIndex((i) => i.item==item.replace("-", " "));
    cartItems.splice(index,1);
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    if(cartItems.length==0){
        toggleCartEmptyLabel();
    };
    changeNoOfCartItems();
}

function addToCart(item,price,quantity){
    if(cartItems.length==0){
        toggleCartEmptyLabel();
    };

    const tBody= document.querySelector("#cart-table-body");

    const bodyRow=document.createElement("tr");
    bodyRow.id=item.replace(/\s/g, "-");

    const bodyData1=document.createElement("td");
    const bodyData2=document.createElement("td");
    const bodyData3=document.createElement("td");

    bodyData1.textContent=item;
    bodyData2.textContent=price;
    bodyData3.textContent=quantity;

    bodyRow.appendChild(bodyData1);
    bodyRow.appendChild(bodyData2);
    bodyRow.appendChild(bodyData3);

    tBody.appendChild(bodyRow);

    cartItems.push({item,price,quantity});
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    changeNoOfCartItems();
};
 

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

function toggleCart(){
    let cartDiv = document.getElementById('cart-div');
    if (cartDiv.style.right === '0px') {
        cartDiv.style.right = '-100%'; 
    } else {
        cartDiv.style.right = '0px'; 
    }
}

function changeNoOfCartItems(){
    const noOfCartItems=document.querySelector("#counter");
    if(cartItems.length!=0){
        const counter=cartItems.reduce((sum,i) =>{
        return sum=sum +Number(i.quantity);
       
    } , 0);
    noOfCartItems.textContent=counter;
    }
    else{
        noOfCartItems.textContent=0;
    }
    
}

function redirectLoginPage(){
    window.location.href = "./login.html";
}
function redirectMainPage(){
    window.location.href = "./mainPage.html";
}

function redirectToPaymentPage(){ 
    sendAmount();
    window.location.href = "./payment.html";

}

function sendAmount(){
    localStorage.setItem("amountFromCustomer",document.querySelector("#total-price").textContent);
}