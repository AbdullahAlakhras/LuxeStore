// let items=localStorage.getItem("items") ?
//     JSON.parse(localStorage.getItem("items")): [];

// let saleHistory =localStorage.getItem("saleHistory") ?
//     JSON.parse(localStorage.getItem("saleHistory")): [];

// let user =localStorage.getItem("activeUser") ?
//     JSON.parse(localStorage.getItem("activeUser")): {};

// let allUsers=localStorage.getItem("users") ?
//     JSON.parse(localStorage.getItem("users")): [];
async function changeUserActiveState(name, isActive) {
  const isUser = await fetch(`../../api/user/${name}`, {
    method: "PATCH",

    body: JSON.stringify({
      userName: name,
      isActive: isActive,
    }),
  }).then((res) => res.json());

  return isUser;
}
async function getItems() {
  const items = await fetch("../../api/item", {
    method: "GET",
  }).then((res) => res.json());
  return items;
}

async function getActiveUserName() {
  const data = await fetch(`../../api/user/`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
}

async function getBalance(userName) {
  const data = await fetch(`../../api/user/${userName}/balance/`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
}

async function getEmail(userName) {
  const data = await fetch(`../../api/user/${userName}/email`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
}

async function getFirstName(userName) {
  const dataType = "firstName";
  const data = await fetch(`../../api/user/${userName}/firstName`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
}
async function getLastName(userName) {
  const data = await fetch(`../../api/user/${userName}/lastName`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
}
async function getShippingAddress(userName) {
  const data = await fetch(`../../api/user/${userName}/shipping`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
}

async function getAllCartItems() {
  const data = await fetch(`../../api/cart`, {
    method: "GET",
  }).then((res) => res.json());
  return data;
}

async function addCartItem(nameProduct, price, quantity) {
  const data = await fetch(`../../api/cart`, {
    method: "POST",
    body: JSON.stringify({
      nameProduct,
      price,
      quantity,
    }),
  }).then((res) => res.json());

  return data;
}

async function removeAllCartItems() {
  const data = await fetch(`../../api/cart`, {
    method: "DELETE",
  }).then((res) => res.json());

  return data;
}

async function updateCartItemQuantity(nameProduct, quantity) {
  const data = await fetch(`../../api/cart/${nameProduct}/${quantity}`, {
    method: "PATCH",
  }).then((res) => res.json());

  return data;
}

async function getCartItemSumPrice() {
  const data = await fetch(`../../api/cart`, {
    method: "GET",
  }).then((res) => res.json());

  const totalPrice = data.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);

  return totalPrice;
}

async function getCartItemSumQuantity() {
  const data = await fetch(`../../api/cart/sum`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
}

async function removeItemFromCart(nameProduct) {
  const data = await fetch(`../../api/cart/${nameProduct}`, {
    method: "DELETE",
  }).then((res) => res.json());

  return data;
}

async function getProducts(userName) {
  const data = await fetch(`../../api/products/`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
}
document.addEventListener("DOMContentLoaded", async () => {
  await removeAllCartItems();
  function toggleCart() {
    let cartDiv = document.getElementById("cart-div");
    if (cartDiv.style.right === "0px") {
      cartDiv.style.right = "-100%";
    } else {
      cartDiv.style.right = "0px";
    }
  }
  const activeUserName = await getActiveUserName();
  const balance = await getBalance(activeUserName);
  const email = await getEmail(activeUserName);
  const firstName = await getFirstName(activeUserName);
  const lastName = await getLastName(activeUserName);
  const shippingAddress = await getShippingAddress(activeUserName);
  const items = await getItems();
  let cartItems = await getAllCartItems();
  // await initialzeCart();
  // const cartItem=await addCartItem("Hello1",1200,33);
  // const removedCartItem=await removeAllCartItems();
  // const updatedCartItem=await updateCartItemQuantity("phone",10);
  // const s=await getCartItemSumQuantity();
  // const deletedCartItem=await removeItemFromCart("dad");
  // console.log(deletedCartItem);

  document
    .querySelector("#main-link")
    .setAttribute("href", "/src/Html/customer.html");
  document.querySelector("#balance").textContent += balance + " $";
  document.querySelector("#first-name").textContent += firstName;
  document.querySelector("#last-name").textContent += lastName;
  document.querySelector("#shipping").textContent += shippingAddress;
  document.querySelector("#user-name").textContent += activeUserName;
  document.querySelector("#email").textContent += email;
  document.querySelector("#balance-cart").textContent = balance + " $";

  document.querySelector("#user-label").textContent += activeUserName;
  document.querySelector("#email-label").textContent += email;

  document
    .querySelector("#sale-history-button")
    .addEventListener("click", redirecSaleHistoryPage);
  document
    .querySelector("#add-balance-button")
    .addEventListener("click", redirectToAddBalancePage);
  document
    .querySelector("#modify-button")
    .addEventListener("click", redirecttoModifyAccountPage);
  document
    .querySelector("#filter-button")
    .addEventListener("click", filterAction);
  document.querySelector("#menu-button").addEventListener("click", toggleMenu);
  document
    .querySelector("#account-button")
    .addEventListener("click", toggleAccount);
  document
    .querySelector("#back-button")
    .addEventListener("click", toggleAccount);
  document.querySelector("#cart-button").addEventListener("click", toggleCart);
  document
    .querySelector("#cart-button-a")
    .addEventListener("click", toggleCart);
  document
    .querySelector("#checkout-button")
    .addEventListener("click", redirectToPaymentPage);
  // document.querySelector("#cart-button").addEventListener("click" ,toggleCart);

  // let cartItems =[];
  // localStorage.setItem("cartItems",JSON.stringify(cartItems));

  // if(items.length==0){
  //     fetch('/src/Jsons/items.json').then(res =>res.json()).then(data => {
  //         items=data;
  //         localStorage.setItem("items",JSON.stringify(items));
  //     });

  // };

  initialze(items);

  function initialze(data) {
    const main = document.querySelector("#main");
    data.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");

      const itemImgDiv = document.createElement("div");
      itemImgDiv.classList.add("photo-div");
      const photo = document.createElement("img");
      photo.src = item.link;
      photo.alt = "Item";
      photo.classList.add("photo");
      itemImgDiv.appendChild(photo);
      itemDiv.appendChild(itemImgDiv);

      itemImgDiv.addEventListener("click", () => {
        window.open("  ../Html/productDetails.html", "_blank");
        // window.location.href = "/src/Html/productDetails.html";

        localStorage.setItem(
          "itemId",
          JSON.stringify(paraName.textContent.trim())
        );
      });

      const itemDescDiv = document.createElement("div");

      itemDescDiv.id = "item-desc-div";
      const paraDesc = document.createElement("p");
      paraDesc.textContent = item.description;
      paraDesc.classList.add("disc");
      itemDescDiv.appendChild(paraDesc);
      itemDescDiv.appendChild(paraDesc);
      const quantitySelector = document.createElement("div");
      quantitySelector.classList.add("quantity-selector");

      const decrementButton = document.createElement("button");
      decrementButton.classList.add("decrement");
      decrementButton.textContent = "-";
      decrementButton.addEventListener("click", decrementQuantity);
      decrementButton.classList.add("quantity-buttons");
      function decrementQuantity() {
        const quantityInput = document.getElementById(
          `quantityInput-${item.id}`
        );
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
        }
      }

      quantitySelector.appendChild(decrementButton);

      const quantityInput = document.createElement("input");
      quantityInput.id = `quantityInput-${item.id}`;
      quantityInput.classList.add("quantity");
      quantityInput.setAttribute("type", "number");
      quantityInput.setAttribute("value", "1");
      quantityInput.setAttribute("min", "1");
      quantityInput.style.width = "50px";
      quantitySelector.appendChild(quantityInput);

      const incrementButton = document.createElement("button");
      incrementButton.classList.add("increment");
      incrementButton.textContent = "+";
      incrementButton.addEventListener("click", incrementQuantity);
      incrementButton.classList.add("quantity-buttons");
      function incrementQuantity() {
        const quantityInput = document.getElementById(
          `quantityInput-${item.id}`
        );
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
      }
      quantitySelector.appendChild(incrementButton);

      itemDescDiv.appendChild(quantitySelector);

      const paraName = document.createElement("p");
      paraName.textContent = item.nameProduct;
      paraName.classList.add("name-product");
      itemDescDiv.appendChild(paraName);

      const paraPrice = document.createElement("p");
      paraPrice.textContent = `Price: ${item.price}$`;
      paraPrice.classList.add("item-price");
      const paraSeller = document.createElement("p");
      paraSeller.textContent = `Seller: ${item.companyName}`;
      paraSeller.classList.add("item-price");
      itemDescDiv.appendChild(paraPrice);
      itemDescDiv.appendChild(paraSeller);

      const itemsButtonDiv = document.createElement("div");
      itemsButtonDiv.classList.add("item-button-div");

      const addCartButton = document.createElement("button");
      addCartButton.innerText = "Add to Cart";
      addCartButton.classList.add("item-buttons");
      addCartButton.classList.add("disable-add");
      addCartButton.id = "add-cart-button";
      itemsButtonDiv.appendChild(addCartButton);
      addCartButton.addEventListener("click", async function () {
        await addToCart(
          item.nameProduct,
          item.price,
          document.getElementById(`quantityInput-${item.id}`).value
        );
        removeCartButton.disabled = false;
        addCartButton.disabled = true;
        quantityInput.disabled = true;
        incrementButton.disabled = true;
        decrementButton.disabled = true;
        await changeTotalLabel();
      });

      const removeCartButton = document.createElement("button");
      removeCartButton.innerText = "Remove from Cart";
      removeCartButton.classList.add("item-buttons");
      removeCartButton.classList.add("disable-remove");
      removeCartButton.id = "remove-cart-button";
      removeCartButton.disabled = true;
      removeCartButton.addEventListener("click", async function () {
        await removeFromCart(
          item.nameProduct,
          item.price,
          document.getElementById(`quantityInput-${item.id}`).value
        );
        removeCartButton.disabled = true;
        addCartButton.disabled = false;
        quantityInput.disabled = false;
        incrementButton.disabled = false;
        decrementButton.disabled = false;
        await changeTotalLabel();
      });
      itemsButtonDiv.appendChild(removeCartButton);

      itemDescDiv.appendChild(itemsButtonDiv);

      itemDiv.appendChild(itemDescDiv);
      main.appendChild(itemDiv);
    });
    if (cartItems.length != 0) {
      document.querySelector("#no-items-decleration").classList.add("hidden");
    }
    changeTotalLabel();
    document
      .querySelector("#clear-button")
      .addEventListener("click", clearCartAction);
  }

  const signOutButton = document.querySelector("#sign-out-button");
  signOutButton.addEventListener("click", redirectMainPage);

  async function clearCartAction() {
    document.querySelector("#cart-table-body").replaceChildren();
    // cartItems.splice(0);
    // localStorage.setItem("cartItems",JSON.stringify(cartItems));
    await removeAllCartItems();
    await changeTotalLabel();
    cartItems = [];

    const addButtons = document.querySelectorAll(".disable-add");
    const removeButtons = document.querySelectorAll(".disable-remove");

    Array.from(addButtons).map((i) => {
      i.disabled = false;
    });
    Array.from(removeButtons).map((i) => {
      i.disabled = true;
    });
    changeNoOfCartItems();
    toggleCartEmptyLabel();
  }

  async function changeTotalLabel() {
    const totalLabel = document.querySelector("#total-price");
    if (cartItems.length == 0) {
      totalLabel.textContent = 0;
      return;
    } else {
      sum = await getCartItemSumPrice();
      //    console.log(`sum: ${sum}`);
      totalLabel.textContent = sum;
    }
  }

  function toggleCartEmptyLabel() {
    const label = document.querySelector("#no-items-decleration");
    if (label.classList.contains("hidden")) {
      label.classList.remove("hidden");
    } else {
      label.classList.add("hidden");
    }
  }

  async function removeFromCart(item, price, quantity) {
    // const tBody= document.querySelector("#cart-table-body");
    // const dataRow= document.querySelector(`#${item.replace(/\s/g, "-")}`);
    // tBody.removeChild(dataRow);
    // const index= cartItems.findIndex((i) => i.item==item.replace("-", " "));
    // cartItems.splice(index,1);
    // localStorage.setItem("cartItems",JSON.stringify(cartItems));
    await removeItemFromCart(item);
    cartItems = await getAllCartItems();
    removeAllWebCartItems();
    if (cartItems.length == 0) {
      toggleCartEmptyLabel();
    }
    changeNoOfCartItems();
    await initialzeCart();
    toggleCartEmptyLabel();
  }
  function removeAllWebCartItems() {
    const tBody = document.querySelector("#cart-table-body").replaceChildren();
    changeNoOfCartItems();
  }
  async function initialzeCart() {
    cartItems = await getAllCartItems();
    cartItems.forEach((i) => {
      const tBody = document.querySelector("#cart-table-body");

      const bodyRow = document.createElement("tr");
      bodyRow.id = i.nameProduct.replace(/\s/g, "-");

      const bodyData1 = document.createElement("td");
      const bodyData2 = document.createElement("td");
      const bodyData3 = document.createElement("td");

      bodyData1.textContent = i.nameProduct;
      bodyData2.textContent = i.price;
      bodyData3.textContent = i.quantity;

      bodyRow.appendChild(bodyData1);
      bodyRow.appendChild(bodyData2);
      bodyRow.appendChild(bodyData3);

      tBody.appendChild(bodyRow);
    });
  }

  async function addToCart(item, price, quantity) {
    if (cartItems.length == 0) {
      toggleCartEmptyLabel();
    }

    // const tBody= document.querySelector("#cart-table-body");

    // const bodyRow=document.createElement("tr");
    // bodyRow.id=item.replace(/\s/g, "-");

    // const bodyData1=document.createElement("td");
    // const bodyData2=document.createElement("td");
    // const bodyData3=document.createElement("td");

    // bodyData1.textContent=item;
    // bodyData2.textContent=price;
    // bodyData3.textContent=quantity;

    // bodyRow.appendChild(bodyData1);
    // bodyRow.appendChild(bodyData2);
    // bodyRow.appendChild(bodyData3);

    // tBody.appendChild(bodyRow);

    // cartItems.push({item,price,quantity});
    await addCartItem(item, price, Number(quantity));
    cartItems = await getAllCartItems();
    removeAllWebCartItems();
    await initialzeCart();

    // console.log(cartItems);
    changeNoOfCartItems();
  }

  function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.left === "0px") {
      menu.style.left = "-100%";
    } else {
      menu.style.left = "0px";
    }
  }

  function toggleAccount() {
    let account = document.getElementById("account-div");
    if (account.style.top === "0px") {
      account.style.top = "-100%";
    } else {
      account.style.top = "0px";
    }
  }
  // function clickOutsideAccount(event) {
  //     let accountButton=document.getElementById('account-button');
  //     let account = document.getElementById('account-div');
  //     if (!account.contains(event.target) && event.target !== accountButton) {
  //         account.style.top = '0px';
  //         document.removeEventListener('click', clickOutsideAccount);
  //     }
  // }

  function changeNoOfCartItems() {
    const noOfCartItems = document.querySelector("#counter");
    if (cartItems.length != 0) {
      const counter = cartItems.reduce((sum, i) => {
        return (sum = sum + Number(i.quantity));
      }, 0);
      noOfCartItems.textContent = counter;
    } else {
      noOfCartItems.textContent = 0;
    }
  }

  function redirectLoginPage() {
    window.location.href = "/src/Html/login.html";
  }
  async function redirectMainPage() {
    await changeUserActiveState(activeUserName, false);
    window.location.href = "/src/Html/mainPage.html";
  }

  function redirecttoModifyAccountPage() {
    window.location.href = "/src/Html/modify.html";
  }

  function redirectToPaymentPage() {
    // sendAmount();

    window.location.href = "/src/Html/payment.html";
  }

  function sendAmount() {
    localStorage.setItem(
      "amountFromCustomer",
      document.querySelector("#total-price").textContent
    );
  }

  function redirecSaleHistoryPage() {
    window.location.href = "/src/Html/saleHistory.html";
  }

  function redirectToAddBalancePage() {
    window.location.href = "/src/Html/addBalance.html";
  }

  function filterAction() {
    let selectedItems = [];

    let filteredItems = items.filter((i) => {
      let productType = Array.from(
        document.querySelectorAll(".products-checkboxes-class")
      )
        .filter((j) => j.checked == true)
        .map((checkbox) => checkbox.value);
      let priceRange = document.querySelector(
        `input[name="prices-radio-buttons"]:checked`
      ).value;
      let brand = Array.from(
        document.querySelectorAll(".brands-checkboxes-class")
      )
        .filter((j) => j.checked == true)
        .map((checkbox) => checkbox.value);
      // console.log(productType);
      return (
        (productType.length == 0 ||
          productType.includes(i.type.toLowerCase())) &&
        (priceRange === "all" || i.price <= parseInt(priceRange)) &&
        (brand.length == 0 || brand.includes(i.companyName.toLowerCase()))
      );
    });
    document.querySelector("#main").replaceChildren();
    initialze(filteredItems);
  }

  const modeButton = document.getElementById("mode-button");
  modeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });

  let productNames = await getProducts();

  // console.log(productNames)
  const resultBox = document.querySelector(".resultBox");
  document.getElementById("search-box").addEventListener("keyup", (e) => {
    let filteredProductNames = [];
    const liveSearch = e.target.value.toLowerCase();
    if (productNames.length) {
      filteredProductNames = productNames.filter((prodName) => {
        return prodName.toLowerCase().includes(liveSearch.toLowerCase());
      });
      // console.log(filteredProductNames);
    }

    // console.log(liveSearch)
    if (!liveSearch) {
      filteredProductNames = [];
    }
    displaySearch(filteredProductNames);
  });

  function fan(item) {
    window.open("  ../Html/productDetails.html", "_blank");
    localStorage.setItem("itemId", JSON.stringify(item));
  }
  function displaySearch(filteredProductNames) {
    const dis = filteredProductNames.map((list) => {
      return `<li onClick="fan('${list}')">${list}</li>`;
    });
    resultBox.innerHTML = "<ul>" + dis.join("") + "</ul>";
  }
});
