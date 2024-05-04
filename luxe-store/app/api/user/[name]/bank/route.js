import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const user= params.name;
    const bankAccount= await repo.getBankAccount(user);   
   
    return Response.json(bankAccount);

};