/*
  Warnings:

  - You are about to drop the column `itemId` on the `SaleHistory` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SaleHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "SaleHistory_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User" ("userName") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SaleHistory" ("id", "nameProduct", "price", "quantity", "userName") SELECT "id", "nameProduct", "price", "quantity", "userName" FROM "SaleHistory";
DROP TABLE "SaleHistory";
ALTER TABLE "new_SaleHistory" RENAME TO "SaleHistory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
