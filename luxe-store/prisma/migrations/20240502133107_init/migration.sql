/*
  Warnings:

  - You are about to drop the column `qunatity` on the `CartItem` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CartItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nameProduct" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL
);
INSERT INTO "new_CartItem" ("id", "nameProduct", "price") SELECT "id", "nameProduct", "price" FROM "CartItem";
DROP TABLE "CartItem";
ALTER TABLE "new_CartItem" RENAME TO "CartItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
