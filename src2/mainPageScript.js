document.addEventListener("DOMContentLoaded", () => {
    fetch('./items.json')
        .then(response => response.json())
        .then(data => {
        console.log(data); 
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
                const paraDesc =document.createElement("p");
                paraDesc.textContent=item.description;
                paraDesc.classList.add("disc");
                itemDescDiv.appendChild(paraDesc);

                const paraName =document.createElement("p");
                paraName.textContent=item.nameProduct;
                paraName.classList.add("name-product");
                itemDescDiv.appendChild(paraName);


                const paraPrice =document.createElement("p");
                paraPrice.textContent=`Price: ${item.price}$`;
                paraPrice.classList.add("item-price");
                itemDescDiv.appendChild(paraPrice);

                const itemsButtonDiv =document.createElement("div");
                itemsButtonDiv.classList.add("item-button-div");

                const addCartButton =document.createElement("button");
                addCartButton.innerText="Add to Cart";
                addCartButton.classList.add("item-buttons");
                addCartButton.id="add-cart-button";
                itemsButtonDiv.appendChild(addCartButton);
                


                itemDescDiv.appendChild(itemsButtonDiv);
                


            itemDiv.appendChild(itemDescDiv);
            console.log(photo);
            main.appendChild(itemDiv);
        });

        });
});



    

function toggleMenu() {
            var menu = document.getElementById('menu');
            if (menu.style.left === '0px') {
                menu.style.left = '-100%'; // Slide out
            } else {
                menu.style.left = '0px'; // Slide in
            }
        }