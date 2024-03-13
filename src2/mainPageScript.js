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
                const photo=document.createElement("img");
                photo.src=item.link;
                
            console.log(photo);
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