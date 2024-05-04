async function getActiveUserName(){
    const data = await fetch(`../../api/user/`,{
        method:"GET",
        
    }).then(res => res.json());
    
    return data;
} 

async function getAllCartItems(){
    const data = await fetch(`../../api/cart`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    return data;
}

async function getBalance(userName){
    const data = await fetch(`../../api/user/${userName}/balance/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 

async function getCartItemSumPrice(){
    const data = await fetch(`../../api/cart`,{
        method:"GET", 
        
        
    }).then(res => res.json());
    
    const totalPrice = data.reduce((sum, item) => {
    return sum + item.quantity * item.price;
    }, 0);

    return totalPrice;
}

async function getItemQuantity(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}`,{
        method:"GET", 
        
        
    }).then(res => res.json());
    

    return data;
}

async function updateItemQuantity(nameProduct,quantity){
    const data = await fetch(`../../api/item/${nameProduct}/${quantity}`,{
        method:"PATCH", 
        
        
    }).then(res => res.json());
    

    return data;
}

async function getCartItemQuantity(nameProduct){
    const data = await fetch(`../../api/cart/${nameProduct}`,{
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

async function createSaleHistory(userName,nameProduct,price,quantity){
    const data = await fetch(`../../api/user/${userName}/`,{
        method:"POST",
        
        body:JSON.stringify({
            nameProduct,
            price,
            quantity,
        }),
        
        
    }).then(res => res.json());
    

    return data;
}

document.addEventListener("DOMContentLoaded", async () => {
    // const cartItems=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [];
    // const allUsers=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")): [];
    // let items=localStorage.getItem("items") ?
    //     JSON.parse(localStorage.getItem("items")): [];

    // const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};
    // const amount=localStorage.getItem("amountFromCustomer");
    // let userExistInSaleHistory=false;
    // const saleHistory=localStorage.getItem("saleHistory")? JSON.parse(localStorage.getItem("saleHistory")): [];
    // const itemQuantity = await getItemQuantity("Iphone 4");
    // const item = await getCartItemQuantity("Iphone x");
    // console.log(item);
    // const s = await createSaleHistory("user1","Iphone x",20,1);
    // console.log(s);
    const activeUser= await getActiveUserName();
    const amount= await getCartItemSumPrice();
    const balance= await getBalance(activeUser);
    const cartItems=await getAllCartItems();

    // console.log(balance);
    document.querySelector("#username").textContent=activeUser;
    document.querySelector("#pay-button").addEventListener("click",payAction);
    document.querySelector("#amount").textContent=amount +" $";
    document.querySelector("#balance").textContent=balance +" $";
    // console.log(cartItems)
    // if (!saleHistory.length == 0) {
    //     for (let i = 0; i < saleHistory.length; i++) {
    //         if (saleHistory[i].userName == user.userName) {
    //             userExistInSaleHistory = true;
    //             break; 
    //         }
    //     }
    // }
    initialzeItems();

    function initialzeItems(){
    const tBody=document.querySelector("#cart-items");

    cartItems.forEach((i) =>{
        const bodyRow=document.createElement("tr");
        const itemC=document.createElement("td");
        const priceC=document.createElement("td");
        const quantityC=document.createElement("td");

        itemC.textContent=i.nameProduct;
        priceC.textContent=i.price;
        quantityC.textContent=i.quantity;
        bodyRow.appendChild(itemC);
        bodyRow.appendChild(quantityC);
        bodyRow.appendChild(priceC);
        tBody.appendChild(bodyRow);
        });
    }

    async function payAction(){
        // const userBankAccount=user ? user.bankAccount : -1;
        // const inputBankAccount=document.querySelector("#bankAccount").value;
        const balanceAfterDeduction = balance - amount;
        if(balance - amount<0){
            document.querySelector("#bankError").classList.remove("hidden");
            return;
        };
        cartItems.forEach(async (i)=>{
            await createSaleHistory(activeUser,i.nameProduct,i.price,i.quantity);
        });
        await reduceUserBlance(activeUser,amount);
        redirectToThankyouPage();
        // user.balance= user.balance -Number(amount);
        // console.log(amount+"sds");
        // console.log(user.balance);
        // localStorage.setItem("activeUser",JSON.stringify(user));

        // const index=allUsers.findIndex((u) => u.userName == user.userName);
        
        // allUsers[index].balance=user.balance;
        // localStorage.setItem("users",JSON.stringify(allUsers));
        // items.forEach((i) => {
        // cartItems.forEach((c) => {
        //     if (i.nameProduct === c.item) {
        //         i.quantity -= c.quantity;
        //     }
        // });
        // });
        // localStorage.setItem("items",JSON.stringify(items));
        // storeSaleHistory();
        // redirectToThankyouPage();


        
        



    }; 

    function redirectToThankyouPage(){
        window.location.href = "/src/Html/thankyou.html";
    }

    function storeSaleHistory(){
        if(userExistInSaleHistory ==false){
            let sale={};
            sale.userName=user.userName;
            sale.items=[];
        cartItems.forEach((i) =>{
            sale.items.push(i);
            
        });
        saleHistory.push(sale);
        localStorage.setItem("saleHistory",JSON.stringify(saleHistory));
        }
        else{
            saleHistory.forEach((i) =>{
                if(i.userName==user.userName){
                    cartItems.forEach((j) =>{
                        i.items.push(j);
                    });
                }
            });
            localStorage.setItem("saleHistory",JSON.stringify(saleHistory));
        }
        
    };



});
