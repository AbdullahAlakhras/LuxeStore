import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName=params.name
    const email=await repo.getEmail(userName);
    return Response.json(email);
};