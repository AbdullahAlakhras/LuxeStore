-- AlterTable
ALTER TABLE "Item" ADD COLUMN "companyName" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "userName" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "typeOfAccount" TEXT NOT NULL,
    "bankAccount" TEXT NOT NULL,
    "shipping" TEXT NOT NULL,
    "balance" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("balance", "bankAccount", "email", "firstName", "lastName", "password", "shipping", "typeOfAccount", "userName") SELECT "balance", "bankAccount", "email", "firstName", "lastName", "password", "shipping", "typeOfAccount", "userName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
