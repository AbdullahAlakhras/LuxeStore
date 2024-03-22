const cartItems=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [];
const tBody=document.querySelector("#cart-items");
console.log(cartItems)
initialzeItems();

function initialzeItems(){
   
    console.log(tBody);
}