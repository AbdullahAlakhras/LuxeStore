import * as repo from "../../../repos/repository.js";

export async function GET(request, { params }){
    const result=await repo.getAllItems();
    return Response.json(result);       
};

export async function POST(request, { params }){
   const { link ,description ,quantity, nameProduct,price,type,sellerName,companyName} =await request.json();
   const result=await repo.addItem(link ,description ,Number(quantity), nameProduct,parseFloat(price),type,sellerName,companyName);
   return Response.json(result);        
};