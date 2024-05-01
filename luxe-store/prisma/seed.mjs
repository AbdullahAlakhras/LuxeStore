import { PrismaClient } from "@prisma/client";
import * as json from "../app/repos/jsonRepo.js";
import fs from "fs/promises";
const prisma = new PrismaClient();
const userSeed = async ()=>{
  const users=await json.readUsers();
  users.forEach(async(user) =>  {
      await prisma.user.create({
          data:{
              userName: user.userName,
              firstName: user.firstName,
              lastName: user.lastName,
              password: user.password,
              email: user.email,
              typeOfAccount: user.typeOfAccount,
              bankAccount: user.bankAccount,
              shipping: user.shipping,
              balance: user.balance
          }
      })
  });
  
 
}
const sellerSeed =async ()=> {
  const sellers=await json.readSeller();
  sellers.forEach(async(seller) =>  {
      await prisma.seller.create({
          data:{
              companyName: seller.companyName,
              userName: seller.userName,
              password: seller.password,
              bankAccount: seller.bankAccount,
              
          }
      })
  });
}
const itemsSeed =async ()=> {
  
   const items=await json.readItems();
  // console.log(items[10]);
  items.forEach(async(item) =>  {
      await prisma.item.create({
          data:{
              id: item.id,
              link: item.link,
              description: item.description,
              quantity: item.quantity,
              nameProduct: item.nameProduct,
              price: item.price,
              type: item.type,
              sellerName: item.seller.userName,             
          }
      })
  });
}

async function seedData(){
  try {
    // await sellerSeed();
    // await userSeed();
   
    await itemsSeed();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
}
await seedData()

