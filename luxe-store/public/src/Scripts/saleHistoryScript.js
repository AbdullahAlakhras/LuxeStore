
async function getSaleHistory(userName) {
    const data = await fetch(`../../api/saleHistory/${userName}`, {
        method: "GET",
        
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
    // const user=localStorage.getItem("activeUser")? JSON.parse(localStorage.getItem("activeUser")): {};

    // const saleHistory=localStorage.getItem("saleHistory")? JSON.parse(localStorage.getItem("saleHistory")): [];
    const activeUser=await getActiveUserName();
    const saleHistory=await getSaleHistory("user1");
    // console.log(activeUser);

    document.querySelector("#hidden-message").classList.remove("hidden");
    if (!saleHistory.length == 0) {
        document.querySelector("#hidden-message").classList.add("hidden");
        const saleItems=document.querySelector("#sale-items");
        
        saleHistory.forEach((i) => {
            // if(i.userName==user.userName){
                // i.items.forEach((j) => {
                    const tr=document.createElement("tr");
                    const item=document.createElement("td");
                    const qunatity=document.createElement("td");
                    const price=document.createElement("td");

                    item.textContent=i.nameProduct;
                    qunatity.textContent=i.quantity;
                    price.textContent=i.price;

                    tr.appendChild(item);
                    tr.appendChild(qunatity);
                    tr.appendChild(price); 
                    saleItems.appendChild(tr);
                // });
            // }
        });
    
    };



    document.querySelector("#main-page-button").addEventListener("click",function (){
        redirectToMainPage();
    });

    function redirectToMainPage(){
        window.location.href = "/src/Html/customer.html";
    }




});
