document.addEventListener("DOMContentLoaded", () => {
   

    const items = JSON.parse(localStorage.getItem("items"));
    const itemID = JSON.parse(localStorage.getItem("itemId"));

    const item = items.find((i) =>i.nameProduct == itemID);
    console.log("The current item is: ");
    console.log(item);

    
   
});
// i added a basic script to try and display the items, doesnt work :( - faisal
function displayProductDetails(item) {
    document.getElementById('product-name').textContent = item.nameProduct;
    document.getElementById('product-image').src = item.link;
    document.getElementById('product-image').alt = item.description;
    document.getElementById('product-price').textContent = `$${item.price}`;
    document.getElementById('product-manufacturer').textContent = item.seller.companyName;
    document.getElementById('product-seller').textContent = item.seller.userName; // Or another relevant field
    document.getElementById('product-description').textContent = item.description;
}


