import * as repo from "../../../../../../../repos/repository.js";

export async function PATCH(request, { params }){
    const userName=params.name
    const amount=params.amount
    const updatedBalance=await repo.reduceBalance(userName,parseFloat(amount));
    return Response.json(updatedBalance);
};