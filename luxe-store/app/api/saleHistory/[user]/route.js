import * as repo from "../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName = params.user;
    console.log(userName);
    const saleHistoryRecords=await repo.getSaleHistoryPerUser(userName);
    return Response.json(saleHistoryRecords);
};