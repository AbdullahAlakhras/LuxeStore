import * as repo from "../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName=params.name
    const typeOfAccount=await repo.getTypeOfAccount(userName);
    return Response.json(typeOfAccount);
};


export async function PATCH(request, { params }){
    const props=await request.json();
    const changeState=await repo.changeUserActive(props.userName,props.isActive);
    return Response.json(changeState);
};