/*
  Warnings:

  - Added the required column `itemId` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CartItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemId" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "qunatity" INTEGER NOT NULL,
    CONSTRAINT "CartItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CartItem" ("id", "price", "qunatity") SELECT "id", "price", "qunatity" FROM "CartItem";
DROP TABLE "CartItem";
ALTER TABLE "new_CartItem" RENAME TO "CartItem";
CREATE UNIQUE INDEX "CartItem_itemId_key" ON "CartItem"("itemId");
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "sellerId" INTEGER NOT NULL,
    CONSTRAINT "Item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("description", "id", "link", "nameProduct", "price", "quantity", "type") SELECT "description", "id", "link", "nameProduct", "price", "quantity", "type" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE UNIQUE INDEX "Item_nameProduct_key" ON "Item"("nameProduct");
CREATE TABLE "new_SaleHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    CONSTRAINT "SaleHistory_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User" ("userName") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SaleHistory" ("id", "userName") SELECT "id", "userName" FROM "SaleHistory";
DROP TABLE "SaleHistory";
ALTER TABLE "new_SaleHistory" RENAME TO "SaleHistory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
