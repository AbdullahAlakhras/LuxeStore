-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "sellerUserName" TEXT NOT NULL,
    CONSTRAINT "Item_sellerUserName_fkey" FOREIGN KEY ("sellerUserName") REFERENCES "Seller" ("userName") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Seller" (
    "companyName" TEXT NOT NULL,
    "userName" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "bankAccount" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "userName" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "typeOfAccount" TEXT NOT NULL,
    "bankAccount" TEXT NOT NULL,
    "shipping" TEXT NOT NULL,
    "balance" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "SaleHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "itemId" INTEGER NOT NULL,
    CONSTRAINT "SaleHistory_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User" ("userName") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SaleHistory_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemId" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "qunatity" INTEGER NOT NULL,
    CONSTRAINT "CartItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_nameProduct_key" ON "Item"("nameProduct");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_userName_key" ON "Seller"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_itemId_key" ON "CartItem"("itemId");
