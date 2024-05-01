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
    "sellerName" TEXT NOT NULL,
    CONSTRAINT "Item_sellerName_fkey" FOREIGN KEY ("sellerName") REFERENCES "Seller" ("userName") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("description", "id", "link", "nameProduct", "price", "quantity", "sellerName", "type") SELECT "description", "id", "link", "nameProduct", "price", "quantity", "sellerName", "type" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE UNIQUE INDEX "Item_nameProduct_key" ON "Item"("nameProduct");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
