import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName=params.name
    const firstName=await repo.getFirstName(userName);
    return Response.json(firstName);
};