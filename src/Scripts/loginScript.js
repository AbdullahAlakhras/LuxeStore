let users=localStorage.getItem("users") ?JSON.parse(localStorage.getItem("users")): [];

if(users.length == 0){
fetch('/src/Jsons/users.json').then(res =>res.json()).then(data => {
        users=data;
        localStorage.setItem("users",JSON.stringify(users));
    });
};
console.log(users);


const signinbutton = document.getElementById("log");
const signUpbutton = document.getElementById('reg');
const container= document.getElementById('Register');
const containerLog= document.getElementById('Login');
const showPasswordBtn= document.getElementById('show');
const userName = document.getElementById('user');
const passWord = document.getElementById('pass');


signUpbutton.addEventListener("click",() => {
    containerLog.style.display = "none";
    container.style.display = "flex";
    });

signinbutton.addEventListener("click",() => {
    containerLog.style.display = "";
    container.style.display = "none";
});

showPasswordBtn.addEventListener('click',()=>{
    if(passWord.type == "password"){
        passWord.type = "text";
    }else{
        passWord.type = "password"
    }
})

function storeUser(user){
    localStorage.setItem("activeUser",JSON.stringify(user));
}

function redirectToCustomer(){
    window.location.href= "/src/Html/customer.html";
};

function redirectToSeller(){
    window.location.href= "/src/Html/seller.html";
};

function redirectToAdmin(){
    window.location.href= "/src/Html/admin.html";
};

function authO(){

    for (u of users){
        console.log(u.typeOfAccount)
        if(userName.value===u.userName && passWord.value===u.password){
            if(u.typeOfAccount==="customer"){
                storeUser(u);
                redirectToCustomer();
                console.log(u);
            }  
            else if(u.typeOfAccount==="seller"){
                storeUser(u);
                redirectToSeller();
            }else if(u.typeOfAccount==="Admin"){
                storeUser(u);
                redirectToAdmin();
            }
        };
    };
}
