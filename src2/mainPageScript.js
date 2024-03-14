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
                const para =document.createElement("p");
                para.textContent=item.description;
                para.classList.add("disc");
                itemDescDiv.appendChild(para);
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