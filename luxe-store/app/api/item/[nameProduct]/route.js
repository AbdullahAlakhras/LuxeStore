import * as repo from "../../../../repos/repository.js";

export async function GET(request, { params }){
    const nameProduct = params.nameProduct;
    const itemQuantity=await repo.getItemQuantity(nameProduct);
    return Response.json(itemQuantity);
};