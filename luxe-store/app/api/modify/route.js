import * as repo from "../../../repos/repository.js";

export async function GET(request, { params }){
    const item =await repo.getModifyItemName();
    return Response.json(item );
};


export async function DELETE(request, { params }){
    const items=await repo.clearModifyItem();
    return Response.json(items);
};