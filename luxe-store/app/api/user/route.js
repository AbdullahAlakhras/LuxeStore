import * as repo from "../../../repos/repository.js";

export async function GET(request, { params }){

    const activeUserName=await repo.getActiveUserName();
    return Response.json(activeUserName);    
};

