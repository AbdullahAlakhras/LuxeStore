const signinbutton = document.getElementById("log");
const signUpbutton = document.getElementById('reg');
const container= document.getElementById('Register');
const containerLog= document.getElementById('Login');


let userObjects = [
    { userName:"Barhamgi" , passWord:"B121212" }, 
    { userName:"Abdullah" , passWord:"Void2004"}, 
    { userName:"Faisal" , passWord:"faisal@@"}, 
    { userName:"Abdulmagid ", passWord:"dev@admin01"},
]


signUpbutton.addEventListener("click",() => {
    containerLog.style.display = "none";
    container.style.display = "flex";
    });

signinbutton.addEventListener("click",() => {
    containerLog.style.display = "";
    container.style.display = "none";
});

function authO(){
    var userName = document.getElementById('user').value;
    var passWord = document.getElementById('pass').value;

    for (i = 1; i<userObjects.length; i++){
        if(userName==userObjects[i].userName && passWord== userObjects[i].passWord){
            console.log("Welcome back Mr. "+userName)
            break;
        }else{
            console.log("Invalid userName")
        }
    }
    
}
