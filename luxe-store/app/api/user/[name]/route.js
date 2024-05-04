import * as repo from "../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName=params.name
    const changeState=await repo.getTypeOfAccount(userName);
    return Response.json(changeState);
};


export async function PATCH(request, { params }){
    const props=await request.json();
    const changeState=await repo.changeUserActive(props.userName,props.isActive);
    return Response.json(changeState);
};

export async function POST(request, { params }){
    const userName=params.name
    const props=await request.json();
    const nameProduct=props.nameProduct
    const price=props.price
    const quantity=props.quantity
    const saleHistory=await repo.createSaleHistory(userName,nameProduct,parseFloat(price),Number(quantity));
    return Response.json(saleHistory);
};

export async function DELETE(request, { params }){
    const userName=params.name
   
    const userRecord=await repo.removeUser(userName);
    return Response.json(userRecord);
};