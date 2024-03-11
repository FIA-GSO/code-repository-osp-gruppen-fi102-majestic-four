/*
  Warnings:

  - You are about to drop the column `hausnummer` on the `Benutzer` table. All the data in the column will be lost.
  - You are about to drop the column `ort` on the `Benutzer` table. All the data in the column will be lost.
  - You are about to drop the column `postleitzahl` on the `Benutzer` table. All the data in the column will be lost.
  - You are about to drop the column `strasse` on the `Benutzer` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Benutzer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "passwort" TEXT NOT NULL,
    "vorname" TEXT,
    "nachname" TEXT,
    "firma" TEXT,
    "rolleId" INTEGER,
    CONSTRAINT "Benutzer_rolleId_fkey" FOREIGN KEY ("rolleId") REFERENCES "Rollen" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Benutzer" ("email", "firma", "id", "nachname", "passwort", "rolleId", "vorname") SELECT "email", "firma", "id", "nachname", "passwort", "rolleId", "vorname" FROM "Benutzer";
DROP TABLE "Benutzer";
ALTER TABLE "new_Benutzer" RENAME TO "Benutzer";
CREATE UNIQUE INDEX "Benutzer_email_key" ON "Benutzer"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
