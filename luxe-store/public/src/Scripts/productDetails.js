let items = [];
async function getItems() {
  const response = await fetch("../../../../api/item/").then((res) =>
    res.json()
  );
  console.log(response);
  items = response;
}

document.addEventListener("DOMContentLoaded", async () => {
  await getItems();
  //   const items = JSON.parse(localStorage.getItem("items"));
  const itemID = JSON.parse(localStorage.getItem("itemId"));
  const showItem = items.find((i) => i.nameProduct == itemID);
  console.log("The current item is: ", showItem);
  displayProductDetails(showItem);

  function displayProductDetails(item) {
    const itemName = document.querySelector(".featured_text");
    const itemNameH1 = document.createElement("h1");
    itemNameH1.textContent = item.nameProduct;
    itemName.appendChild(itemNameH1);
    const itemTypeP = document.createElement("p");
    itemTypeP.textContent = `Type: ${item.type}`;
    itemTypeP.classList.add("sub");
    itemName.appendChild(itemTypeP);
    const itemPriceP = document.createElement("p");
    itemPriceP.textContent = `Price: ${item.price}$`;
    itemPriceP.classList.add("price");
    itemName.appendChild(itemPriceP);
    const image = document.querySelector(".image");
    const img = document.createElement("img");
    img.src = item.link;
    image.appendChild(img);

    const description = document.querySelector(".description");
    const descriptionP = document.createElement("p");
    descriptionP.textContent = item.description;
    description.appendChild(descriptionP);

    const icon = document.querySelector(".icon");
    icon.addEventListener("click", () => {
      window.close();
    });
  }
});
