const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};
const allUsers=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")): [];

document.querySelector("#userName").value=user.userName;
document.querySelector("#password").value=user.password;
document.querySelector("#email").value=user.email;
document.querySelector("#firstName").value=user.firstName;
document.querySelector("#lastName").value=user.lastName;
document.querySelector("#shippingAddress").value=user.shipping;
document.querySelector("#bankAccount").value=user.bankAccount;


const showPasswordBtn= document.getElementById('show');
const password = document.getElementById('password');


showPasswordBtn.addEventListener('click',()=>{
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password"
    }
});

document.querySelector("#modify-button").addEventListener("click",modifyAccountAction);
document.querySelector("#delete-button").addEventListener("click",deleteAccount);
document.querySelector("#main-button").addEventListener("click",redirectToCustomerPage);


 function modifyAccountAction(){
    const userName= document.querySelector("#userName").value;
    const pass= document.querySelector("#password").value;
    const email= document.querySelector("#email").value;
    const firstName= document.querySelector("#firstName").value;
    const lastName= document.querySelector("#lastName").value;
    const shippingAddress= document.querySelector("#shippingAddress").value;
    const bankAccount = document.querySelector("#bankAccount").value;

    // allUsers.forEach((u) => {
    //     if(u.userName==userName){
    //         u.userName=userName;
    //         u.password=pass;
    //         u.email=email;
    //         u.firstName=firstName;
    //         u.lastName=lastName;
    //         u.shipping=shippingAddress;
    //         u.bankAccount=bankAccount;  
    //     }
    // });
    const index = allUsers.findIndex((us) => us.userName == user.userName);
    allUsers[index].userName=userName;
    allUsers[index].password=pass;
    allUsers[index].email=email;
    allUsers[index].firstName=firstName;
    allUsers[index].lastName=lastName;
    allUsers[index].shipping=shippingAddress;
    allUsers[index].bankAccount=bankAccount;
   

    user.userName=userName;
    user.password=pass;
    user.email=email;
    user.firstName=firstName;
    user.lastName=lastName;
    user.shipping=shippingAddress;
    user.bankAccount=bankAccount;

  
    localStorage.setItem("activeUser",JSON.stringify(user));
    localStorage.setItem("users",JSON.stringify(allUsers));
};

function deleteAccount(){
    const index = allUsers.findIndex((us) => us.userName == user.userName);
    allUsers.splice(index,1);

     for (let key in user) {
        if (user.hasOwnProperty(key)) {
            delete user[key];
        }
    }
    localStorage.setItem("activeUser",JSON.stringify(user));
    localStorage.setItem("users",JSON.stringify(allUsers));
    redirectToMainPage();
};

function redirectToMainPage(){
    window.location.href="/src2/Html/mainPage.html";
}

function redirectToCustomerPage(){
    window.location.href="/src2/Html/customer.html";
}