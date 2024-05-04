async function getActiveUserName(){
    const data = await fetch(`../../api/user/`,{
        method:"GET",
        
    }).then(res => res.json());
    
    return data;
} 
async function getEmail(userName){
    const data = await fetch(`../../api/user/${userName}/email`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 

async function getFirstName(userName){
     const dataType="firstName";
    const data = await fetch(`../../api/user/${userName}/firstName`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 
async function getLastName(userName){
    const data = await fetch(`../../api/user/${userName}/lastName`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 
async function getShippingAddress(userName){
    const data = await fetch(`../../api/user/${userName}/shipping`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 
async function getPassword(userName){
    const data = await fetch(`../../api/user/${userName}/get-password`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 
async function getBankAccount(userName){
    const data = await fetch(`../../api/user/${userName}/bank`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 


async function getTypeOfAccount(name){
    const type = await fetch(`../../api/user/${name}/`,{
        method:"GET",
    }).then(res => res.json());
    return type;
} 

async function updateUser(userName,password,firstName,lastName,email,shipping,bankAccount){
    const data = await fetch(`../../api/user/`,{
        method:"PATCH", 
        body:JSON.stringify({
            userName,
            password,
            firstName,
            lastName,
            email,
            shipping,
            bankAccount,
        }),
       
        
    }).then(res => res.json());
    
    return data;
} 

async function deleteUser(userName){
    const data = await fetch(`../../api/user/${userName}`,{
        method:"DELETE", 
       
        
    }).then(res => res.json());
    
    return data;
} 

document.addEventListener("DOMContentLoaded", async () => {
    // const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};
    // const allUsers=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")): [];
    const activeUser=await getActiveUserName();
    const email =await getEmail(activeUser);
    const firstName =await getFirstName(activeUser);
    const lastName =await getLastName(activeUser);
    const shippingAddress =await getShippingAddress(activeUser);
    const userPass =await getPassword(activeUser);
    const bankAccount =await getBankAccount(activeUser);
    const typeOfAccount =await getTypeOfAccount(activeUser);
    // await updateUser("user4","pass4","Nawal","Jones","Nawal@sara.com","Qatar-Doha-Aspire","10001");
    // console.log(typeOfAccount);

    document.querySelector("#userName").value=activeUser;
    document.querySelector("#password").value=userPass;
    document.querySelector("#email").value=email;
    document.querySelector("#firstName").value=firstName;
    document.querySelector("#lastName").value=lastName;
    document.querySelector("#shippingAddress").value=shippingAddress;
    document.querySelector("#bankAccount").value=bankAccount;
    document.querySelector("#userName").disabled = true;


    const showPasswordBtn= document.getElementById('show');
    const password = document.getElementById('password');


    showPasswordBtn.addEventListener('click',()=>{
        if(password.type == "password"){
            password.type = "text";
        }else{
            password.type = "password"
        }
    });

    document.querySelector("#modify-button").addEventListener("click", modifyAction);
    document.querySelector("#delete-button").addEventListener("click",deleteAccount);
    document.querySelector("#main-button").addEventListener("click",redirectToCustomerPage);

    async function modifyAction(event){
        event.preventDefault();
        const userName = document.querySelector("#userName").value?? "";
        const pass = document.querySelector("#password").value ?? "";
        const email = document.querySelector("#email").value ?? "";
        const firstName = document.querySelector("#firstName").value?? "";
        const lastName = document.querySelector("#lastName").value?? "";
        const shippingAddress = document.querySelector("#shippingAddress").value?? "";
        const bankAccount = document.querySelector("#bankAccount").value?? "";
        await  updateUser(activeUser, pass, firstName, lastName, email, shippingAddress, bankAccount);
        alert("Your Account has been modified");
    }
    //   function modifyAccountAction(){
     
    //     const userName = document.querySelector("#userName").value?? "";
    //     const pass = document.querySelector("#password").value ?? "";
    //     const email = document.querySelector("#email").value ?? "";
    //     const firstName = document.querySelector("#firstName").value?? "";
    //     const lastName = document.querySelector("#lastName").value?? "";
    //     const shippingAddress = document.querySelector("#shippingAddress").value?? "";
    //     const bankAccount = document.querySelector("#bankAccount").value?? "";
    //     console.log(pass);
        // await  updateUser(activeUser, pass, firstName, lastName, email, shippingAddress, bankAccount);
    
      
    //     // allUsers.forEach((u) => {
    //     //     if(u.userName==userName){
    //     //         u.userName=userName;
    //     //         u.password=pass;
    //     //         u.email=email;
    //     //         u.firstName=firstName;
    //     //         u.lastName=lastName;
    //     //         u.shipping=shippingAddress;
    //     //         u.bankAccount=bankAccount;  
    //     //     }
    //     // });
    //     // const index = allUsers.findIndex((us) => us.userName == user.userName);
    //     // allUsers[index].userName=userName;
    //     // allUsers[index].password=pass;
    //     // allUsers[index].email=email;
    //     // allUsers[index].firstName=firstName;
    //     // allUsers[index].lastName=lastName;
    //     // allUsers[index].shipping=shippingAddress;
    //     // allUsers[index].bankAccount=bankAccount;
    

    //     // user.userName=userName;
    //     // user.password=pass;
    //     // user.email=email;
    //     // user.firstName=firstName;
    //     // user.lastName=lastName;
    //     // user.shipping=shippingAddress;
    //     // user.bankAccount=bankAccount;

    
    //     // localStorage.setItem("activeUser",JSON.stringify(user));
    //     // localStorage.setItem("users",JSON.stringify(allUsers));

        


    // };

    async function deleteAccount(){
        // const index = allUsers.findIndex((us) => us.userName == user.userName);
        // allUsers.splice(index,1);

        // for (let key in user) {
        //     if (user.hasOwnProperty(key)) {
        //         delete user[key];
        //     }
        // }
        // localStorage.setItem("activeUser",JSON.stringify(user));
        // localStorage.setItem("users",JSON.stringify(allUsers));
        await deleteUser(activeUser);
        alert("YourAccount is been removed")
        redirectToMainPage();
    };

    function redirectToMainPage(){
        window.location.href="/src/Html/mainPage.html";
    }

    function redirectToCustomerPage(){
        if(typeOfAccount.toLowerCase()=="customer")
            window.location.href="/src/Html/customer.html";
        if(typeOfAccount.toLowerCase()=="seller")
            window.location.href="/src/Html/seller.html";
    }  
    function redirecttoModifyAccountPage(){
        window.location.href = "/src/Html/modify.html";
    }
});


