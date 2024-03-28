const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};
const allUsers=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")): {};
let balance=Number(user.balance);
document.querySelector("#username").textContent+=user.userName;
document.querySelector("#balance").textContent+=user.balance+ " $";
document.querySelector("#add-balance-button").addEventListener("click",addBalanceAction);

function addBalanceAction(){
    const bankAccount=document.querySelector("#bankAccount").value;
    const amount=Number(document.querySelector("#amount").value);
    balance+=amount;
    user.balance=balance;
    const index= allUsers.findIndex((u) => user.userName==u.userName);
    allUsers[index].balance=balance;
    localStorage.setItem("activeUser",JSON.stringify(user));
    localStorage.setItem("users",JSON.stringify(allUsers));
    redirectToBalanceAdded();
};

function redirectToBalanceAdded(){
    window.location.href="/src/Html/balanceAdded.html";
};
