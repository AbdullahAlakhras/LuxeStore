
const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};
document.querySelector("#return-button").addEventListener("click",redirectToCustomerPage);
document.querySelector("#balance").textContent=user.balance+" $";
function redirectToCustomerPage(){
    window.location.href = "/src2/Html/customer.html";
}