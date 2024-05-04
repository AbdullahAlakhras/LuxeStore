async function getActiveUserName(){
    const data = await fetch(`../../api/user/`,{
        method:"GET",
        
    }).then(res => res.json());
    
    return data;
} 

async function addUserBalance(userName,amount){
    const data = await fetch(`../../api/user/${userName}/balance/add/${amount}`,{
        method:"PATCH", 
        
        
    }).then(res => res.json());
    

    return data;
}

async function reduceUserBlance(userName,amount){
    const data = await fetch(`../../api/user/${userName}/balance/reduce/${amount}`,{
        method:"PATCH", 
        
        
    }).then(res => res.json());
    

    return data;
}

async function getBalance(userName){
    const data = await fetch(`../../api/user/${userName}/balance/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 


document.addEventListener("DOMContentLoaded", async () => {


    // const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};
    // const allUsers=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")): {};
    // let balance=Number(user.balance);
    const activeUser= await getActiveUserName();
    const balance= await getBalance(activeUser);
    console.log(balance);
    document.querySelector("#username").textContent+=activeUser;
    document.querySelector("#balance").textContent+=balance+ " $";
    document.querySelector("#add-balance-button").addEventListener("click",addBalanceAction);

    async function addBalanceAction(){
        const bankAccount=document.querySelector("#bankAccount").value;
        const amount=parseFloat(document.querySelector("#amount").value);
        // balance+=amount;
        // user.balance=balance;
        // const index= allUsers.findIndex((u) => user.userName==u.userName);
        // allUsers[index].balance=balance;
        // localStorage.setItem("activeUser",JSON.stringify(user));
        // localStorage.setItem("users",JSON.stringify(allUsers));
        await addUserBalance(activeUser,amount);
        redirectToBalanceAdded();
    };

    function redirectToBalanceAdded(){
        window.location.href="/src/Html/balanceAdded.html";
    };

});
