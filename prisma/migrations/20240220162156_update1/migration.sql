/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Firma` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telefon]` on the table `Firma` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fax]` on the table `Firma` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Stand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telefon]` on the table `Stand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[firma]` on the table `Stand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[benutzerId]` on the table `Stand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[firma]` on the table `Vortrag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[benutzerId]` on the table `Vortrag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Vortrag` will be added. If there are existing duplicate values, this will fail.

*/
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
    "firmaId" INTEGER,
    "rolleId" INTEGER,
    CONSTRAINT "Benutzer_firmaId_fkey" FOREIGN KEY ("firmaId") REFERENCES "Firma" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Benutzer_rolleId_fkey" FOREIGN KEY ("rolleId") REFERENCES "Rollen" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Benutzer" ("email", "firmaId", "hausnummer", "id", "nachname", "ort", "passwort", "postleitzahl", "rolleId", "strasse", "vorname") SELECT "email", "firmaId", "hausnummer", "id", "nachname", "ort", "passwort", "postleitzahl", "rolleId", "strasse", "vorname" FROM "Benutzer";
DROP TABLE "Benutzer";
ALTER TABLE "new_Benutzer" RENAME TO "Benutzer";
CREATE UNIQUE INDEX "Benutzer_email_key" ON "Benutzer"("email");
CREATE UNIQUE INDEX "Benutzer_firmaId_key" ON "Benutzer"("firmaId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Firma_email_key" ON "Firma"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Firma_telefon_key" ON "Firma"("telefon");

-- CreateIndex
CREATE UNIQUE INDEX "Firma_fax_key" ON "Firma"("fax");

-- CreateIndex
CREATE UNIQUE INDEX "Stand_email_key" ON "Stand"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Stand_telefon_key" ON "Stand"("telefon");

-- CreateIndex
CREATE UNIQUE INDEX "Stand_firma_key" ON "Stand"("firma");

-- CreateIndex
CREATE UNIQUE INDEX "Stand_benutzerId_key" ON "Stand"("benutzerId");

-- CreateIndex
CREATE UNIQUE INDEX "Vortrag_firma_key" ON "Vortrag"("firma");

-- CreateIndex
CREATE UNIQUE INDEX "Vortrag_benutzerId_key" ON "Vortrag"("benutzerId");

-- CreateIndex
CREATE UNIQUE INDEX "Vortrag_email_key" ON "Vortrag"("email");
