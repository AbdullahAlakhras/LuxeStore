/*
  Warnings:

  - Added the required column `price` to the `SaleHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `SaleHistory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SaleHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "itemId" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "SaleHistory_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User" ("userName") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SaleHistory_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SaleHistory" ("id", "itemId", "userName") SELECT "id", "itemId", "userName" FROM "SaleHistory";
DROP TABLE "SaleHistory";
ALTER TABLE "new_SaleHistory" RENAME TO "SaleHistory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
