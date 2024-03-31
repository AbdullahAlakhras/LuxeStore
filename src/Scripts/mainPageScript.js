 let items=localStorage.getItem("items") ?
    JSON.parse(localStorage.getItem("items")): [];   
if(items.length==0){
    fetch('/src/Jsons/items.json').then(res =>res.json()).then(data => {
        items=data;
        localStorage.setItem("items",JSON.stringify(items));    
    });
    
};
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

                const addCartButton =document.createElement("button");
                addCartButton.innerText="Add to Cart";
                addCartButton.classList.add("item-buttons");
                addCartButton.id="add-cart-button";
                itemsButtonDiv.appendChild(addCartButton);

                const removeCartButton =document.createElement("button");
                removeCartButton.innerText="Remove from Cart";
                removeCartButton.classList.add("item-buttons");
                removeCartButton.id="remove-cart-button";
                removeCartButton.disabled=true;
                itemsButtonDiv.appendChild(removeCartButton);
                
                addCartButton.addEventListener("click", ()=>{
                        let warningContainer = document.getElementById('warningContainer');
                        warningContainer.style.display = 'flex';
                        warningContainer.style.top = `${window.innerHeight / 9}px`;
                        setTimeout(function() {
                            warningContainer.style.display = 'none';
                        }, 2000); 
                });

                

                itemDescDiv.addEventListener("click", ()=> {
                    window.open("  ../Html/productDetails.html", "_blank");
                    // window.location.href = "/src/Html/productDetails.html";

                    localStorage.setItem("itemId",JSON.stringify(paraName.textContent.trim()));
                    
                });
                itemImgDiv.addEventListener("click", ()=> {
                    window.open("  ../Html/productDetails.html", "_blank");
                    // window.location.href = "/src/Html/productDetails.html";

                    localStorage.setItem("itemId",JSON.stringify(paraName.textContent.trim()));
                    
                })
            itemDiv.appendChild(itemDescDiv);
            itemDiv.appendChild(itemsButtonDiv);
            main.appendChild(itemDiv);
        });

        let productNames = []
        for (const item of items){
            if(item.nameProduct != ""){
                productNames.push(item.nameProduct);
            }
            
        }

        console.log(productNames) 
        // const resultBox = document.querySelector(".resultBox");
        // document.getElementById("search-box").addEventListener("keyup",(e)=>{
        //     let filteredProductNames = [];
        //     const liveSearch = e.target.value.toLowerCase();
        //     if(productNames.length){
        //         filteredProductNames = productNames.filter((prodName) => {
        //             return prodName.toLowerCase().includes(liveSearch.toLowerCase());
                    
        //         })
        //         console.log(filteredProductNames); 
        //     }
        //     // console.log(liveSearch);
        //     displaySearch(filteredProductNames) 
        // });

        
        // function displaySearch(filteredProductNames){
        //     const dis = filteredProductNames.map((list) => {
        //         return `<li>` + list + `</li>`;
        //     });

        //     resultBox.innerHTML = "<ul>" + dis + "</ul>";
        // }


   
    



const heroBtn = document.getElementById("hero-btn");
const loginButton=document.querySelector("#login-button");
loginButton.addEventListener("click", redirectLoginPage);
console.log(loginButton);


heroBtn.addEventListener("click", ()=>{
    window.location.href = "#main";
})


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