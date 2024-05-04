import * as repo from "../../../../repos/repository.js";

export async function GET(request, { params }){
    const nameProduct = params.nameProduct;
    const itemQuantity=await repo.getItemQuantity(nameProduct);
    return Response.json(itemQuantity);
};

export async function DELETE(request, { params }){
    const nameProduct = params.nameProduct;
    const item=await repo.removeItem(nameProduct);
    return Response.json(item);
};

export async function PATCH(request, { params }) {
    const currentNameProduct = params.nameProduct;
    const { nameProduct, link, description, quantity, price, type, companyName } = await request.json();
    const item = await repo.modifyItem(currentNameProduct, nameProduct, link, description, Number(quantity), parseFloat(price), type, companyName);
    return Response.json(item);
};


// props.nameProduct,props.link,props.description,
        // props.quantity,props.price,props.type,props.companyName