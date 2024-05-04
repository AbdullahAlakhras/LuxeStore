import * as repo from "../../../../repos/repository.js";


export async function GET(request, { params }){
    const nameProduct=params.nameProduct;
    const quantity=await repo.getCartItemQuantity(nameProduct);
    return Response.json(quantity);
};

export async function DELETE(request, { params }){
    const nameProduct = params.nameProduct;
    const cartItem=await repo.removeCartItem(nameProduct);
    return Response.json(cartItem);
};