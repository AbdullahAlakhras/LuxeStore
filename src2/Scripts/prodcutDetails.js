document.addEventListener("DOMContentLoaded", () => {
   

    const items = JSON.parse(localStorage.getItem("items"));
    const itemID = JSON.parse(localStorage.getItem("itemId"));

    const item = items.find((i) =>i.nameProduct == itemID);
    console.log("The current item is: ");
    console.log(item);

    
   
});