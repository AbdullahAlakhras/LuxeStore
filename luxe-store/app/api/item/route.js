import * as repo from "../../../repos/repository.js";

export async function GET(request, { params }){
    const result=await repo.getAllItems();
    return Response.json(result);       
};

export async function POST(request, { params }){
      
};