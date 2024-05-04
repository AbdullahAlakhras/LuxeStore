import * as repo from "../../../repos/repository.js";

export async function GET(request, { params }){

    const activeUserName=await repo.getActiveUserName();
    return Response.json(activeUserName);    
};

export async function PATCH(request, { params }){
    const props= await request.json();
    const updatedUser=await repo.updateUser(props.userName,props.password,props.firstName,props.lastName,props.email,props.shipping,props.bankAccount);
    return Response.json(updatedUser);    
};

