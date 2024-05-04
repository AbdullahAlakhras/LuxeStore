import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const nameProduct =params.nameProduct;
    const result=await repo.getTypeFromItem(nameProduct);
    return Response.json(result);       
};