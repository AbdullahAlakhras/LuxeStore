
const cartItems=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [];
const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};
const amount=localStorage.getItem("amountFromCustomer");
let userExistInSaleHistory=false;
const saleHistory=localStorage.getItem("saleHistory")? JSON.parse(localStorage.getItem("saleHistory")): [];
document.querySelector("#username").textContent=user ? user.userName: "-";
document.querySelector("#pay-button").addEventListener("click",payAction);
document.querySelector("#amount").textContent=amount;
console.log(cartItems)
if (!saleHistory.length == 0) {
    for (let i = 0; i < saleHistory.length; i++) {
        if (saleHistory[i].userName == user.userName) {
            userExistInSaleHistory = true;
            break; 
        }
    }
}
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
    bodyRow.appendChild(quantityC);
    bodyRow.appendChild(priceC);
    tBody.appendChild(bodyRow);
    });
}

function payAction(){
    const userBankAccount=user ? user.bankAccount : -1;
    const inputBankAccount=document.querySelector("#bankAccount").value;

    if(inputBankAccount.length==0 ||userBankAccount==-1 || userBankAccount !==inputBankAccount){
        document.querySelector("#bankError").classList.remove("hidden");
        return;
    };
    storeSaleHistory();
    redirectToThankyouPage();


}; 

function redirectToThankyouPage(){
    window.location.href = "./thankyou.html";
}

function storeSaleHistory(){
    if(userExistInSaleHistory ==false){
        let sale={};
        sale.userName=user.userName;
        sale.items=[];
       cartItems.forEach((i) =>{
        sale.items.push(i);
        
    });
    saleHistory.push(sale);
    localStorage.setItem("saleHistory",JSON.stringify(saleHistory));
    }
    else{
        saleHistory.forEach((i) =>{
            if(i.userName==user.userName){
                cartItems.forEach((j) =>{
                    i.items.push(j);
                });
            }
        });
        localStorage.setItem("saleHistory",JSON.stringify(saleHistory));
    }
    
};


