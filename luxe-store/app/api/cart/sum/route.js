import * as repo from "../../../../repos/repository.js";

export async function GET(request, { params }){

    const sum=await repo.getCartItemSumQuantity();
    return Response.json(sum.quantity);    
};