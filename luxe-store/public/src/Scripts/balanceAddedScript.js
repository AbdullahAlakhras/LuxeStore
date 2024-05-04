async function getBalance(userName){
    const data = await fetch(`../../api/user/${userName}/balance/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 

async function getActiveUserName(){
    const data = await fetch(`../../api/user/`,{
        method:"GET",
        
    }).then(res => res.json());
    
    return data;
} 
document.addEventListener("DOMContentLoaded", async () => {

    const activeUser= await getActiveUserName();
    const balance= await getBalance(activeUser);
    // console.log(balance);
    // const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};
    document.querySelector("#return-button").addEventListener("click",redirectToCustomerPage);
    document.querySelector("#balance").textContent=balance+" $";
    function redirectToCustomerPage(){
        window.location.href = "/src/Html/customer.html";
    }
});
