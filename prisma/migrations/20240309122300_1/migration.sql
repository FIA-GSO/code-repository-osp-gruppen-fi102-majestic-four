/*
  Warnings:

  - You are about to drop the `Firma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `firmaId` on the `Benutzer` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Firma_fax_key";

-- DropIndex
DROP INDEX "Firma_telefon_key";

-- DropIndex
DROP INDEX "Firma_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Firma";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Benutzer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "passwort" TEXT NOT NULL,
    "vorname" TEXT,
    "nachname" TEXT,
    "strasse" TEXT,
    "hausnummer" TEXT,
    "postleitzahl" TEXT,
    "ort" TEXT,
    "firma" TEXT,
    "rolleId" INTEGER,
    CONSTRAINT "Benutzer_rolleId_fkey" FOREIGN KEY ("rolleId") REFERENCES "Rollen" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Benutzer" ("email", "hausnummer", "id", "nachname", "ort", "passwort", "postleitzahl", "rolleId", "strasse", "vorname") SELECT "email", "hausnummer", "id", "nachname", "ort", "passwort", "postleitzahl", "rolleId", "strasse", "vorname" FROM "Benutzer";
DROP TABLE "Benutzer";
ALTER TABLE "new_Benutzer" RENAME TO "Benutzer";
CREATE UNIQUE INDEX "Benutzer_email_key" ON "Benutzer"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
