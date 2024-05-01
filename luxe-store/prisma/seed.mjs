import { PrismaClient } from "@prisma/client";
import * as json from "../app/repos/jsonRepo.js";
import fs from "fs/promises";
const prisma = new PrismaClient();
const seed = async ()=>{
    const users=await json.readUsers();
    // console.log(users);
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

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}