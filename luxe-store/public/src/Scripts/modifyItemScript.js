
async function getCompanyName(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}/company/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
}

async function getLink(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}/link/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
}

async function getDescription(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}/description/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
}

async function getQuantity(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}/quant/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
}

async function getPrice(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}/price/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
}

async function getSellerName(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}/sellerName/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
}

async function getType(nameProduct){
    const data = await fetch(`../../api/item/${nameProduct}/type/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
}

async function getModifyNameProduct(){
    const data = await fetch(`../../api/modify/`,{
        method:"GET", 
       
        
    }).then(res => res.json());
    
    return data;
}

async function modifyItemInServer(currentNameProduct, nameProduct, link, description, quantity, price, type, companyName) {
    try {
        const data = await fetch(`../../api/item/${currentNameProduct}/`, {
            method: "PATCH",
            body: JSON.stringify(
                nameProduct,
                link,
                description,
                quantity,
                price,
                type,
                companyName,
            ),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }
        const jsonResponse = await data.json();
        return jsonResponse;
    } catch (error) {
        console.error("Error modifying item:", error);
        throw error; 
    }
}

async function modifyModifyItemName(oldNameProduct, newNameProduct) {
    try {
        const data = await fetch(`../../api/modify/${oldNameProduct}/`, {
            method: "PATCH",
            body: JSON.stringify(
             { newNameProduct,}
            ),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }
        const jsonResponse = await data.json();
        return jsonResponse;
    } catch (error) {
        console.error("Error modifying item:", error);
        throw error; 
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const nameProduct =await getModifyNameProduct();
    const companyNameValue = await getCompanyName(nameProduct);
    const linkValue = await getLink(nameProduct);
    const descriptionValue = await getDescription(nameProduct);
    const quantityValue = await getQuantity(nameProduct);
    const sellerNameValue = await getSellerName(nameProduct);
    const typeValue = await getType(nameProduct);
    const priceValue = await getPrice(nameProduct);
    // console.log(await modifyModifyItemName("Iphone 44","Iphone x"));
    // const pp = await modifyItemInServer("Iphone 14", {nameProduct: "III"}) ;
    // console.log(pp);
    // let items=localStorage.getItem("items") ?
    //     JSON.parse(localStorage.getItem("items")): [];

    // let activeUser=localStorage.getItem("activeUser") ?
    //     JSON.parse(localStorage.getItem("activeUser")): [];

    // let modifyItemItem=localStorage.getItem("modifyItem") ?
    //     JSON.parse(localStorage.getItem("modifyItem")): {};

    // let index11=-1;

    initialize();


    // if(items.length==0){
    //     fetch('/src/Jsons/items.json').then(res =>res.json()).then(data => {
    //         items=data;
    //         localStorage.setItem("items",JSON.stringify(items));
    //     });
        
    // };

    document.querySelector("#browse-button").addEventListener("click",browseAction);
    document.querySelector("#clear-button").addEventListener("click", clearAction);
    document.querySelector("#reset-button").addEventListener("click", resetAction);
    document.querySelector("#link").addEventListener("input", linkAction);
    document.querySelector("#modify-item-button").addEventListener("click", modifyItemAction);


    function browseAction(){
        document.getElementById('fileInput').click();
    };

    function clearAction(){
        document.querySelector("#link").value=""; 
        document.querySelector("#image").src="";
    };

   async function modifyItemAction(){
        const productName= document.querySelector("#product-name").value; 
        if(productName.trim().length===0){
            document.querySelector("#warning").classList.remove("hidden");
            return;    
        }
        const company= document.querySelector("#company-name").value; 
        if(company.trim().length===0){
            document.querySelector("#warning").classList.remove("hidden"); 
            return;   
        }
        const description= document.querySelector("#description").value; 
        if(description.trim().length===0){
            document.querySelector("#warning").classList.remove("hidden");
            return;    
        }
        let quantity= document.querySelector("#quantity").value; 
        quantity=Number(quantity);
        if(quantity<=0){
            document.querySelector("#warning").classList.remove("hidden");
            return;    
        }
        const price= document.querySelector("#price").value; 
        if(price.trim().length===0){
            document.querySelector("#warning").classList.remove("hidden");
            return;    
        }
        const typeOfProduct= document.querySelector("#type-of-product").value;
        if(typeOfProduct.trim().length===0){
            document.querySelector("#warning").classList.remove("hidden");
            return;    
        } 
        //
        const link= document.querySelector("#link").value; 
        if(link.trim().length===0){
            document.querySelector("#warning").classList.remove("hidden");
            return;    
        }
        const image= document.querySelector("#image");
        await modifyItemInServer(nameProduct,{
            nameProduct:productName,
            companyName:company,
            description,
            quantity,
            price,
            type:typeOfProduct,
            link,

        });
       await  modifyModifyItemName(nameProduct,productName);

        // const seller={
        //     companyName: company ,
        //     userName: activeUser.userName,
        //     password: activeUser.password ,
        //     bankAccount: activeUser.bankAccount
        // }

        // const item={
        //     id : items.length+1,
        //     link : link,
        //     description:description,
        //     quantity:Number(quantity),
        //     nameProduct: productName,
        //     price: Number(price),
        //     seller: seller,
        //     type: typeOfProduct
        // }
        // items.splice(index11,1);
        // items.push(item);
        // localStorage.setItem("items",JSON.stringify(items));
        
    };

    function resetAction(){
        document.querySelector("#product-name").value=""; 
        document.querySelector("#company-name").value=""; 
        document.querySelector("#description").value=""; 
        document.querySelector("#quantity").value=0; 
        document.querySelector("#price").value=""; 
        document.querySelector("#type-of-product").value=""; 
        //
        document.querySelector("#link").value=""; 
        document.querySelector("#image").src="";
    };

    function linkAction(){
        const link= document.querySelector("#link").value;
        const image= document.querySelector("#image");
        
        if(link.trim().length===0){
            return;
        }

        image.src=link;
    }

    async function initialize(){
        // if (Object.keys(modifyItemItem).length === 0) {
        //     return;
        // }
        const productName= document.querySelector("#product-name"); 
        const company= document.querySelector("#company-name"); 
        const description= document.querySelector("#description"); 
        let quantity= document.querySelector("#quantity"); 
        const price= document.querySelector("#price"); 
        const typeOfProduct= document.querySelector("#type-of-product");
        //
        const link= document.querySelector("#link"); 
        const image= document.querySelector("#image");
        
        productName.value=nameProduct;
        company.value=companyNameValue;
        description.value=descriptionValue;
        quantity.value=quantityValue;
        price.value=priceValue;
        typeOfProduct.value=typeValue;
        link.value=linkValue;
        image.src=linkValue;

        
        // index11=items.findIndex((i) => i.nameProduct ==modifyItemItem.nameProduct); 
        
    };
});
