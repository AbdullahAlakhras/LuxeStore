
const cartItems=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [];
const user=localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")): [];

document.querySelector("#username").textContent=user[0] ? user[0].userName: "-";
document.querySelector("#pay-button").addEventListener("click",payAction);
console.log(cartItems)
initialzeItems();

function initialzeItems(){
   const tBody=document.querySelector("#cart-items");

   cartItems.forEach((i) =>{
    const bodyRow=document.createElement("tr");
    const itemC=document.createElement("td");
    const priceC=document.createElement("td");
    const quantityC=document.createElement("td");

    itemC.textContent=i.item;
    priceC.textContent=i.price;
    quantityC.textContent=i.quantity;
    bodyRow.appendChild(itemC);
    bodyRow.appendChild(priceC);
    bodyRow.appendChild(quantityC);
    tBody.appendChild(bodyRow);
    });
}

function payAction(){
    const userBankAccount=user[0] ? user[0].bankAccount : -1;
    const inputBankAccount=document.querySelector("#bankAccount").value;

    if(inputBankAccount.length==0 ||userBankAccount==-1 || userBankAccount !==inputBankAccount){
        document.querySelector("#bankError").classList.remove("hidden");
        return;
    };
    redirectToThankyouPage();

}; 

function redirectToThankyouPage(){
    window.location.href = "./thankyou.html";
}

