

async function getItems(){
    const items = await fetch("../../api/item",{
        method:"GET",
    }).then(res => res.json());
    return items;
} 

async function removeItem(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}`,{
        method:"DELETE", 
       
        
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

async function getActiveUserName(){
    const data = await fetch(`../../api/user/`,{
        method:"GET",
        
    }).then(res => res.json());
    
    return data;
}
document.addEventListener("DOMContentLoaded", async () => {
    // let items=localStorage.getItem("items") ?
    //     JSON.parse(localStorage.getItem("items")): [];
    // if(items.length==0){
    //     fetch('/src/Jsons/items.json').then(res =>res.json()).then(data => {
    //         items=data;
    //         localStorage.setItem("items",JSON.stringify(items));
    //     });
    
    // };
    let items =await getItems();
    let activeUser= await getActiveUserName();
    document.querySelector("#menu-button").addEventListener("click",toggleMenu);
    document.querySelector("#main-link").setAttribute("href","/src/Html/admin.html");
    document.querySelector("#filter-button").addEventListener("click",filterAction);
           
    const main =document.querySelector("#main");
    initialize(items);
    function initialize(items){
         items.forEach(item => {
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

                    const paraName =document.createElement("p");
                    paraName.textContent=item.nameProduct;
                    paraName.classList.add("name-product");
                    itemDescDiv.appendChild(paraName);


                // const spanDiv=document.createElement("span");
                    // spanDiv.id="span-div";
                    const paraPrice =document.createElement("p");
                    paraPrice.textContent=`Price: ${item.price}$`;
                    paraPrice.classList.add("item-price");
                    const paraSeller =document.createElement("p");
                    paraSeller.textContent=`Seller: ${item.companyName}`;
                    paraSeller.classList.add("item-price");
                    // spanDiv.appendChild(paraPrice);
                    // spanDiv.appendChild(paraSeller);
                    itemDescDiv.appendChild(paraPrice);
                    itemDescDiv.appendChild(paraSeller);

                    const itemsButtonDiv =document.createElement("div");
                    itemsButtonDiv.classList.add("item-button-div");

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
                
                // itemDescDiv.appendChild(itemsButtonDiv);

                    

                

                    

                    itemImgDiv.addEventListener("click", ()=> {
                        window.open("  ../Html/productDetails.html", "_blank");
                        // window.location.href = "/src/Html/productDetails.html";

                        localStorage.setItem("itemId",JSON.stringify(paraName.textContent.trim()));
                        
                    })
                    itemDescDiv.addEventListener("click", ()=> {
                        window.open("  ../Html/productDetails.html", "_blank");
                        // window.location.href = "/src/Html/productDetails.html";

                        localStorage.setItem("itemId",JSON.stringify(paraName.textContent.trim()));
                        
                    })
                itemDiv.appendChild(itemDescDiv);
                itemDiv.appendChild(itemsButtonDiv);
                main.appendChild(itemDiv);
            });
        


    }
           



    const signOutButton=document.querySelector("#sign-out-button");
    signOutButton.addEventListener("click",()=>{
        changeUserActiveState(activeUser,false);
        window.location.href = "/src/Html/mainPage.html";
    });





    function toggleMenu() {
        let menu = document.getElementById('menu');
        if (menu.style.left === '0px') {
            menu.style.left = '-100%'; 
        } else {
            menu.style.left = '0px'; 
        }
    }

    function redirectLoginPage(){
        window.location.href = "/src/Html/login.html";
    }

    const modeButton = document.getElementById("mode-button");
    modeButton.addEventListener("click", ()=>{
        document.body.classList.toggle("dark-theme")
    })

    function filterAction(){
        let filteredItems = items.filter(i => {
            let productType = Array.from(document.querySelectorAll(".products-checkboxes-class")).filter((j) => j.checked==true).map(checkbox => checkbox.value);
            let priceRange = document.querySelector(`input[name="prices-radio-buttons"]:checked`).value;
            let brand = Array.from(document.querySelectorAll(".brands-checkboxes-class")).filter((j) => j.checked==true).map(checkbox => checkbox.value);
            // console.log(productType);
            return (productType.length==0 || productType.includes(i.type.toLowerCase()))
                && (priceRange === 'all' || i.price <= parseInt(priceRange))
                && (brand.length==0 ||brand.includes(i.companyName.toLowerCase()));
        });
        // console.log(filteredItems);
        document.querySelector("#main").replaceChildren();
        initialize(filteredItems);

    };
});
    