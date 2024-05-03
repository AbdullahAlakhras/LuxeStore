import * as repo from "../../../../../repos/repository.js";

export async function GET(request, { params }){
    const user= params.name;
    const pass= params.password;
   
    const isUser= await repo.verifyLogin(user,pass);   
   if( isUser =="found"){
        return Response.json({found:true});
   }else{
        return Response.json({found:false});
   }
};

