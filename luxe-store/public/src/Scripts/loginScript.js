


async function verify(name,pass){
    const isUser = await fetch(`../../api/user/${name}/${pass}`,{
        method:"GET",
    }).then(res => res.json());
    return isUser.found;
} 

async function changeUserActiveState(name, isActive) {
    const isUser = await fetch(`../../api/user/${name}`, {
        method: "PATCH",

        body: JSON.stringify({
            userName: name,
            isActive: isActive
        })
    }).then(res => res.json());

    return isUser; 
}

async function getTypeOfAccount(name){
    const type = await fetch(`../../api/user/${name}/`,{
        method:"GET",
        
    }).then(res => res.json());
    return type;
} 

document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("loginBtn").addEventListener("click" , authO);

// let users=localStorage.getItem("users") ?JSON.parse(localStorage.getItem("users")): [];

// if(users.length == 0){
// fetch('/src/Jsons/users.json').then(res =>res.json()).then(data => {
//         users=data;
//         localStorage.setItem("users",JSON.stringify(users));
//     });
// };
// console.log(users);


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

async function authO(){

    // for (u of users){
    //     console.log(u.typeOfAccount)
    //     if(userName.value===u.userName && passWord.value===u.password){
    //         if(u.typeOfAccount==="customer"){
    //             storeUser(u);
    //             redirectToCustomer();
    //             console.log(u);
    //         }  
    //         else if(u.typeOfAccount==="seller"){
    //             storeUser(u);
    //             redirectToSeller();
    //         }else if(u.typeOfAccount==="Admin"){
    //             storeUser(u);
    //             redirectToAdmin();
    //         }
    //     };
    // };


    const user=userName.value;
    const pass=passWord.value;
    const isUser=await verify(user,pass);
    if(isUser){
        const userRecord=await changeUserActiveState(user,true);
        const typeOfAccount= await getTypeOfAccount(user);
        if(typeOfAccount=="customer"){
            redirectToCustomer();
        }else if(typeOfAccount =="seller"){
            redirectToSeller();
        }else if(typeOfAccount =="admin"){
            redirectToAdmin();
        }
    }
   
}

});
