import * as repo from "../../../../repos/repository";

export async function GET(request, { params }){
    const userName =params.user;
    const result=await repo.getItemsPerSeller(userName);
    return Response.json(result);       
};
