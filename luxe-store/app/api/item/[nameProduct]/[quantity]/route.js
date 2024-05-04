import * as repo from "../../../../../repos/repository.js";

export async function PATCH(request, { params }){
    const nameProduct = params.nameProduct;
    const quantity = params.quantity;
    const item=await repo.updateItemQuantity(nameProduct,Number(quantity));
    return Response.json(item);
};