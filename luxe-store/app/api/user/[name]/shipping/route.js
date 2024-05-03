import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName=params.name
    const shippingAddress=await repo.getShippingAddress(userName);
    return Response.json(shippingAddress);
};