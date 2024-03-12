/*
  Warnings:

  - You are about to drop the column `ansprechpartner` on the `Vortrag` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Vortrag` table. All the data in the column will be lost.
  - You are about to drop the column `firma` on the `Vortrag` table. All the data in the column will be lost.
  - You are about to drop the column `telefon` on the `Vortrag` table. All the data in the column will be lost.
  - You are about to drop the column `ansprechpartner` on the `Stand` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Stand` table. All the data in the column will be lost.
  - You are about to drop the column `firma` on the `Stand` table. All the data in the column will be lost.
  - You are about to drop the column `telefon` on the `Stand` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Benutzer" ADD COLUMN "telefon" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vortrag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dauer" INTEGER NOT NULL,
    "thema" TEXT NOT NULL,
    "benutzerId" INTEGER NOT NULL,
    "datum" TEXT NOT NULL,
    "uhrzeit" TEXT NOT NULL,
    "statusId" INTEGER,
    CONSTRAINT "Vortrag_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Vortrag_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Vortrag" ("benutzerId", "datum", "dauer", "id", "statusId", "thema", "uhrzeit") SELECT "benutzerId", "datum", "dauer", "id", "statusId", "thema", "uhrzeit" FROM "Vortrag";
DROP TABLE "Vortrag";
ALTER TABLE "new_Vortrag" RENAME TO "Vortrag";
CREATE UNIQUE INDEX "Vortrag_benutzerId_key" ON "Vortrag"("benutzerId");
CREATE TABLE "new_Stand" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag1" BOOLEAN NOT NULL,
    "tag2" BOOLEAN NOT NULL,
    "bemerkung" TEXT NOT NULL,
    "datum" TEXT NOT NULL,
    "tisch" INTEGER NOT NULL,
    "stuhl" INTEGER NOT NULL,
    "benutzerId" INTEGER NOT NULL,
    "statusId" INTEGER,
    CONSTRAINT "Stand_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Stand_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stand" ("bemerkung", "benutzerId", "datum", "id", "statusId", "stuhl", "tag1", "tag2", "tisch") SELECT "bemerkung", "benutzerId", "datum", "id", "statusId", "stuhl", "tag1", "tag2", "tisch" FROM "Stand";
DROP TABLE "Stand";
ALTER TABLE "new_Stand" RENAME TO "Stand";
CREATE UNIQUE INDEX "Stand_benutzerId_key" ON "Stand"("benutzerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
