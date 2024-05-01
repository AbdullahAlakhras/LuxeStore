import fs from "fs/promises";

const userPath="public/src/Jsons/users.json";
async function readJson(path){
    try{
        return JSON.parse(await fs.readFile(path));
    }catch(error){
        console.log(`Error Reading from ${path} and the error is: ${error.message}`);
        return [];
    }
};

export async function readUsers(){
    return await readJson(userPath);
}

