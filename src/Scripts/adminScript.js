

    let items=localStorage.getItem("items") ?
        JSON.parse(localStorage.getItem("items")): [];
        if(items.length==0){
    fetch('/src/Jsons/items.json').then(res =>res.json()).then(data => {
        items=data;
        localStorage.setItem("items",JSON.stringify(items));
    });
    
};
        console.log(); 
        const main =document.querySelector("#main");
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
                paraSeller.textContent=`Seller: ${item.seller.companyName}`;
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
                removeItemButton.addEventListener("click",function(){
                const index=items.findIndex((i)=> i.nameProduct==paraName.textContent);
                items.splice(index,1);
                localStorage.setItem("items",JSON.stringify(items));
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
      





const signOutButton=document.querySelector("#sign-out-button");
signOutButton.addEventListener("click",()=>{
    window.location.href = "/src/Html/mainPage.html";
});





function toggleMenu() {
    let menu = document.getElementById('menu');
    if (menu.style.left === '0px') {
        menu.style.left = '-100%'; // Slide out
    } else {
        menu.style.left = '0px'; // Slide in
    }
}

function redirectLoginPage(){
    window.location.href = "/src/Html/login.html";
}