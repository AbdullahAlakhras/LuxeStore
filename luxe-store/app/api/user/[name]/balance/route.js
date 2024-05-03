import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName=params.name
    const balance=await repo.getBalance(userName);
    return Response.json(balance);
};