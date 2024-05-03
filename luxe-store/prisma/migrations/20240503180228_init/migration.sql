/*
  Warnings:

  - A unique constraint covering the columns `[nameProduct]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CartItem_nameProduct_key" ON "CartItem"("nameProduct");
