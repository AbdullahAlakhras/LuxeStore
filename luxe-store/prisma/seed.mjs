import { PrismaClient } from "@prisma/client";
import * as json from "../repos/jsonRepo.js";
import fs from "fs/promises";
// const prisma = new PrismaClient();
const userSeed = async ()=>{
  const prisma = new PrismaClient();
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
  
  await prisma.$disconnect();
}
const sellerSeed =async ()=> {
  const prisma = new PrismaClient();
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
    await prisma.$disconnect();
  });
}
const itemsSeed =async ()=> {
  const prisma = new PrismaClient();
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
              companyName: item.seller.companyName,              
          }
      })
    
  });
  await prisma.$disconnect();
}

const saleHistorySeed= async () => {
  const prisma = new PrismaClient();
  const slaHistories=await json.readsaleHistory();
  slaHistories.map(async(sale) =>  {
      await prisma.saleHistory.create({
          data:{
              userName: sale.userName,
              nameProduct: sale.items[0].name,
              price:sale.items[0].price,
              quantity: sale.items[0].quantity
          }
      })
  });
  await prisma.$disconnect();
}
async function seedData(){
  try {
   
  // await sellerSeed();

  // await userSeed();
  
  // await itemsSeed();
  
  await saleHistorySeed();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
}

async function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
await seedData()

