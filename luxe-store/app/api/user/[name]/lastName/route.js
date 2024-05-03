import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName=params.name
    const lastName=await repo.getLastName(userName);
    return Response.json(lastName);
};