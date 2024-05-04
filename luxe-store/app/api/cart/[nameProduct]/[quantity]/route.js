import * as repo from "../../../../../repos/repository.js";





export async function PATCH(request, { params }){
    const nameProduct=params.nameProduct;
    const quantity=params.quantity;
    const cartItem=await repo.updateCartItemQuantity(nameProduct,Number(quantity));
    return Response.json(cartItem);
};