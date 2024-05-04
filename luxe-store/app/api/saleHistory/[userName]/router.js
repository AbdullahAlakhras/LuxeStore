import * as repo from "../../../../repos/repository.js";

export async function GET(request, { params }){
    const userName=params.userName
    const saleHistory=await repo.getSaleHistoryPerUser(userName);
    console.log("sss");
    return Response.json(saleHistory);
};