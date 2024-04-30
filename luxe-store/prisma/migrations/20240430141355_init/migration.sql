-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "saleHistoryId" INTEGER,
    CONSTRAINT "Item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Item_saleHistoryId_fkey" FOREIGN KEY ("saleHistoryId") REFERENCES "SaleHistory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("description", "id", "link", "nameProduct", "price", "quantity", "sellerId", "type") SELECT "description", "id", "link", "nameProduct", "price", "quantity", "sellerId", "type" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE UNIQUE INDEX "Item_nameProduct_key" ON "Item"("nameProduct");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
