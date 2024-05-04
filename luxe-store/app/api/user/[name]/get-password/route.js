import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const user= params.name;
    const password= await repo.getPassword(user);   
   
    return Response.json(password);

};
