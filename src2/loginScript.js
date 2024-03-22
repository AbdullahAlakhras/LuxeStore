let users=localStorage.getItem("users") ?JSON.parse(localStorage.getItem("users")): [];

if(users.length==0){
    fetch('./users.json').then(res =>res.json()).then(data => {
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



// let userObjects = [
//     { userName:"Barhamgi" , passWord:"B121212" }, 
//     { userName:"Abdullah" , passWord:"Void2004"}, 
//     { userName:"Faisal" , passWord:"faisal@@"}, 
//     { userName:"Abdulmagid ", passWord:"dev@admin01"},
//     { userName:"admin" , passWord:"admin"}, 
// ];

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

function redirectToCustomer(){
    window.location.href= "./customer.html";
};
function authO(){
    // for (i = 0; i<users.length; i++){
    //     console.log(userName.value);console.log(passWord.value);
    //     if(userName.value===users[i].userName && passWord.value===users[i].passWord){
    //         console.log("hello");
    //     }
    // }

    for (u of users){
        if(userName.value===u.userName && passWord.value===u.password){
          redirectToCustomer();
        };
    };
}
