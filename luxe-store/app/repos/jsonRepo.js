import fs from "fs/promises";

const userPath="public/src/Jsons/users.json";
const itemsPath="public/src/Jsons/items.json";
const saleHistoryPath="public/src/Jsons/saleHistory.json";
const sellerobjectPath="public/src/Jsons/sellerObject.json";
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

export async function readItems(){
    return await readJson(itemsPath);
}

export async function readsaleHistory(){
    return await readJson(saleHistoryPath);
}

export async function readsellerObject(){
    return await readJson(sellerobjectPath);
}


