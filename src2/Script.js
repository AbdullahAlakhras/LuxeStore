const signinbutton = document.getElementById("log");
const signUpbutton = document.getElementById('reg');
const container= document.getElementById('Register');
const containerLog= document.getElementById('Login');
const showPasswordBtn= document.getElementById('show');
const passWord = document.getElementById('pass');



let userObjects = [
    { userName:"Barhamgi" , passWord:"B121212" }, 
    { userName:"Abdullah" , passWord:"Void2004"}, 
    { userName:"Faisal" , passWord:"faisal@@"}, 
    { userName:"Abdulmagid ", passWord:"dev@admin01"},
    { userName:"admin" , passWord:"admin"}, 
];

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
        console.log("Working")
        passWord.type = "text";
    }else{
        passWord.type = "password"
    }
})

function authO(){
    const userName = document.getElementById('user').value;
 
    for (i = 1; i<userObjects.length; i++){
        if(userName==userObjects[i].userName && passWord.value==userObjects[i].passWord){
            window.location.href= "mainPage.html";
            break;
        }
    }

}
