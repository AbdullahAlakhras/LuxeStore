async function getItemsOfSeller(userName){
    const data = await fetch(`../../api/seller/${userName}`,{
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

async function getCompanyName(userName){
    const data = await fetch(`../../api/seller/${userName}/company/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
} 

async function getBankAccount(userName){
    const data = await fetch(`../../api/seller/${userName}/bank/`,{
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

async function createModfiy(nameProduct){
    const data = await fetch(`../../api/modify/${nameProduct}`,{
        method:"POST", 
       
        
    }).then(res => res.json());
    
    return data;
}; 

async function clearModfiy(){
    const data = await fetch(`../../api/modify`,{
        method:"DELETE", 
       
        
    }).then(res => res.json());
    
    return data;
}; 

async function removeItem(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}`,{
        method:"DELETE", 
       
        
    }).then(res => res.json());
    
    return data;
}

document.addEventListener("DOMContentLoaded", async () => {
    await clearModfiy();
    // let items=localStorage.getItem("items") ?
    // JSON.parse(localStorage.getItem("items")): [];




    // let saleHistory =localStorage.getItem("saleHistory") ?
    //     JSON.parse(localStorage.getItem("saleHistory")): [];

    // let user =localStorage.getItem("activeUser") ?
    //     JSON.parse(localStorage.getItem("activeUser")): {};

    // let sellerItems=getSellerItems();
    const activeUser =await getActiveUserName();
    const sellerItems= await getItemsOfSeller(activeUser);
    const companyName= await getCompanyName(activeUser);
    const email= await getEmail(activeUser);
    const bankAccount= await getBankAccount(activeUser);
    console.log(bankAccount);

    // if(!Object.keys(user).length==0){
    document.querySelector("#user-label").textContent+=activeUser;
    document.querySelector("#email-label").textContent+=email;
    document.querySelector("#company-name").textContent+=companyName;
    document.querySelector("#email").textContent+=email;
    document.querySelector("#username").textContent+=activeUser;
    document.querySelector("#bank-account").textContent+=bankAccount;
    document.querySelector("#account-button").addEventListener("click",toggleAccount);
    document.querySelector("#back-button").addEventListener("click",toggleAccount);
    document.getElementById('account-div').style.top="-100%";
    // };

    // let cartItems =[];
    // localStorage.setItem("cartItems",JSON.stringify(cartItems));
    document.querySelector("#main-link").setAttribute("href","/src/Html/seller.html");

        
        
    // if(items.length==0){
    //     fetch('/src/Jsons/items.json').then(res =>res.json()).then(data => {
    //         items=data;
    //         localStorage.setItem("items",JSON.stringify(items));
    //     });
        
    // };
    initialze(sellerItems);

        
    function initialze(data){
        const main =document.querySelector("#main");
        data.forEach(item => {
            const itemDiv=document.createElement("div");
                itemDiv.classList.add("item");
            
            const itemImgDiv=document.createElement("div");
                itemImgDiv.classList.add('photo-div');
                const photo=document.createElement("img");
                photo.src=item.link;
                photo.alt="Item";
                photo.classList.add("photo");
                itemImgDiv.appendChild(photo);
            itemDiv.appendChild(itemImgDiv);

            const itemDescDiv=document.createElement("div");    
                

                itemDescDiv.id="item-desc-div";
                const paraDesc =document.createElement("p");
                paraDesc.textContent=item.description;
                paraDesc.classList.add("disc");
                itemDescDiv.appendChild(paraDesc);
                itemDescDiv.appendChild(paraDesc);
                
                const paraName =document.createElement("p");
                paraName.textContent=item.nameProduct;
                paraName.classList.add("name-product");
                itemDescDiv.appendChild(paraName);

                
                const paraPrice =document.createElement("p");
                paraPrice.textContent=`Price: ${item.price}$`;
                paraPrice.classList.add("item-price");
                const paraSeller =document.createElement("p");
                paraSeller.textContent=`Quantity: ${item.quantity}`;
                paraSeller.classList.add("item-price");
                itemDescDiv.appendChild(paraPrice);
                itemDescDiv.appendChild(paraSeller);

                const itemsButtonDiv =document.createElement("div");
                itemsButtonDiv.classList.add("item-button-div");

                const ModifyItemButton =document.createElement("button");
                ModifyItemButton.innerText="Modify Item";
                ModifyItemButton.classList.add("item-buttons");
                ModifyItemButton.id="add-cart-button";
                itemsButtonDiv.appendChild(ModifyItemButton);
                ModifyItemButton.addEventListener("click", async function (){
                    // const index=items.findIndex((i)=> i.nameProduct==paraName.textContent);
                    // localStorage.setItem("modifyItem",JSON.stringify(items[index]));
                    await createModfiy(item.nameProduct);
                    redirectToModifyPage();
                });

                const removeItemButton =document.createElement("button");
                removeItemButton.innerText="Take off market";
                removeItemButton.classList.add("item-buttons");
                removeItemButton.id="remove-cart-button";
                removeItemButton.addEventListener("click",async function(){
                    // const index=items.findIndex((i)=> i.nameProduct==paraName.textContent);
                    // items.splice(index,1);
                    // localStorage.setItem("items",JSON.stringify(items));
                    await removeItem(item.nameProduct);
                    location.reload();

                });
                itemsButtonDiv.appendChild(removeItemButton);
                
                itemDescDiv.appendChild(itemsButtonDiv);

                


            itemDiv.appendChild(itemDescDiv);
            main.appendChild(itemDiv);
        });
        // if (cartItems.length!=0){
        //     document.querySelector("#no-items-decleration").classList.add("hidden");
        // };
        
        
    };

    let productNames = []
            for (const item of sellerItems){
                if(item.nameProduct != ""){
                    productNames.push(item.nameProduct);
                }
                
            }

            console.log(productNames) 
            const resultBox = document.querySelector(".resultBox");
            document.getElementById("search-box").addEventListener("keyup",(e)=>{
                let filteredProductNames = [];
                const liveSearch = e.target.value.toLowerCase();
                if(productNames.length){
                    filteredProductNames = productNames.filter((prodName) => {
                        return prodName.toLowerCase().includes(liveSearch.toLowerCase());
                        
                    })
                    // console.log(filteredProductNames); 
                }

                // console.log(liveSearch)
                if(!liveSearch){
                    filteredProductNames = [];
                }
                displaySearch(filteredProductNames) 
            });

            function fan(item){
                window.open("  ../Html/productDetails.html", "_blank");
                localStorage.setItem("itemId",JSON.stringify(item));                
        }
            function displaySearch(filteredProductNames){
                const dis = filteredProductNames.map((list) => {
                    return `<li onClick="fan('${list}')">${list}</li>`;
                });
                resultBox.innerHTML = "<ul>" + dis.join("")+ "</ul>";
            }

    const loginButton=document.querySelector("#sign-out-button");
    loginButton.addEventListener("click", redirectMainPage);
    console.log(loginButton);

    const addItemsButton=document.querySelector("#add-items-button");
    addItemsButton.addEventListener("click", redirectToAddItemsPage);

    document.querySelector("#modify-account-button").addEventListener("click",redirectToModifyUserPage);
        

    function toggleMenu() {
        let menu = document.getElementById('menu');
        if (menu.style.left === '0px') {
            menu.style.left = '-100%'; 
        } else {
            menu.style.left = '0px'; 
        }
    }

    function toggleAccount(){
        let account = document.getElementById('account-div');
        if (account.style.top === '0px') {
            account.style.top = '-100%'; 
            
        } else {
            account.style.top = '0px'; 
            
        }
    }

    const modeButton = document.getElementById("mode-button");
    modeButton.addEventListener("click", ()=>{
        document.body.classList.toggle("dark-theme")
    })


    function redirectLoginPage(){
        window.location.href = "/src/Html/login.html";
    }
    async function redirectMainPage(){
        await changeUserActiveState(activeUser,false);
        window.location.href = "/src/Html/mainPage.html";
    }

    function redirectToAddItemsPage(){
        window.location.href = "/src/Html/addItemsPage.html";
    }

    function getSellerItems(){
        const array=[];
        items.forEach((item)=>{
            if(item.seller.userName==user.userName){
                array.push(item);
            }
        });
        return array;
    };

    function redirectToModifyPage(){
        window.location.href = "/src/Html/modifyItemPage.html";
    }
    function redirectToModifyUserPage(){
        window.location.href = "/src/Html/modify.html";
    }
});
