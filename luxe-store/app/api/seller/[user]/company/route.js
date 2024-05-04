import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName =params.user;
    const result=await repo.getCompanyNameFromSeller(userName);
    return Response.json(result);       
};
