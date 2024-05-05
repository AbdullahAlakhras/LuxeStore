import * as repo from "../../../repos/repository.js";

export async function GET(request, { params }){
    const result=await repo.getAllNameProduct();
    // console.log(result);
    return Response.json(result);       
};