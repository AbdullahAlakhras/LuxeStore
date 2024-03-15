const signinbutton = document.getElementById("log");
const signUpbutton = document.getElementById('reg');
const container= document.getElementById('Register');
const containerLog= document.getElementById('Login');

let password = document.getElementById("pass")


signUpbutton.addEventListener("click",() => {
    containerLog.style.display = "none";
    container.style.display = "flex";
    });

signinbutton.addEventListener("click",() => {
    containerLog.style.display = "";
    container.style.display = "none";
});

if (password.value !== "hello"){
    console.log("Fak u")
}
