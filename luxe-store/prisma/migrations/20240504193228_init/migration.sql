-- CreateTable
CREATE TABLE "ModifyItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nameProduct" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ModifyItem_nameProduct_key" ON "ModifyItem"("nameProduct");
