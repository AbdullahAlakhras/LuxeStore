import * as repo from "../../../../repos/repository.js";

export async function POST(request, { params }){
    const nameProduct =params.product;
    const result=await repo.createModifyItem(nameProduct);
    return Response.json(result);       
};

export async function PATCH(request, { params }){
    const oldNameProduct =params.product;
    const props = await request.json();
    // console.log(props);
    const result=await repo.changeModifyItemName(oldNameProduct,props.newNameProduct);
    return Response.json("");       
};