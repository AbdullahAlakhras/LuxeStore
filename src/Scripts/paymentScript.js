
const cartItems=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [];
const allUsers=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")): [];
let items=localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")): [];

const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};
const amount=localStorage.getItem("amountFromCustomer");
let userExistInSaleHistory=false;
const saleHistory=localStorage.getItem("saleHistory")? JSON.parse(localStorage.getItem("saleHistory")): [];
document.querySelector("#username").textContent=user ? user.userName: "-";
document.querySelector("#pay-button").addEventListener("click",payAction);
document.querySelector("#amount").textContent=amount +" $";
document.querySelector("#balance").textContent=user.balance +" $";
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
    // const userBankAccount=user ? user.bankAccount : -1;
    // const inputBankAccount=document.querySelector("#bankAccount").value;

    if(user.balance < Number(amount)){
        document.querySelector("#bankError").classList.remove("hidden");
        return;
    };
    user.balance= user.balance -Number(amount);
    console.log(amount+"sds");
    console.log(user.balance);
    localStorage.setItem("activeUser",JSON.stringify(user));

    const index=allUsers.findIndex((u) => u.userName == user.userName);
    
    allUsers[index].balance=user.balance;
    localStorage.setItem("users",JSON.stringify(allUsers));
    items.forEach((i) => {
    cartItems.forEach((c) => {
        if (i.nameProduct === c.item) {
            i.quantity -= c.quantity;
        }
    });
    });
    localStorage.setItem("items",JSON.stringify(items));
    storeSaleHistory();
    redirectToThankyouPage();

    
    



}; 

function redirectToThankyouPage(){
    window.location.href = "/src/Html/thankyou.html";
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


