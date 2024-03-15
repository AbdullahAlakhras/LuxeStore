
document.addEventListener("DOMContentLoaded", () => {
    fetch('./items.json')
        .then(response => response.json())
        .then(data => {
        console.log(data); 
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
                addCartButton.id="add-cart-button";
                itemsButtonDiv.appendChild(addCartButton);

                const removeCartButton =document.createElement("button");
                removeCartButton.innerText="Remove from Cart";
                removeCartButton.classList.add("item-buttons");
                removeCartButton.id="remove-cart-button";
                removeCartButton.disabled=true;
                itemsButtonDiv.appendChild(removeCartButton);
                
                itemDescDiv.appendChild(itemsButtonDiv);

                


            itemDiv.appendChild(itemDescDiv);
            main.appendChild(itemDiv);
        });

    });
});
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

function toggleCart(){
    let cartDiv = document.getElementById('cart-div');
    if (cartDiv.style.right === '0px') {
        cartDiv.style.right = '-100%'; 
    } else {
        cartDiv.style.right = '0px'; 
    }
}

function redirectLoginPage(){
    window.location.href = "./login.html";
}
function redirectMainPage(){
    window.location.href = "./mainPage.html";
}