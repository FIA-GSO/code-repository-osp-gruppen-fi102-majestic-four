/*
  Warnings:

  - Added the required column `ansprechpartner` to the `Vortrag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Vortrag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firma` to the `Vortrag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefon` to the `Vortrag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ansprechpartner` to the `Stand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Stand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firma` to the `Stand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefon` to the `Stand` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vortrag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dauer" INTEGER NOT NULL,
    "thema" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ansprechpartner" TEXT NOT NULL,
    "firma" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "benutzerId" INTEGER,
    "datum" TEXT NOT NULL,
    "uhrzeit" TEXT NOT NULL,
    "statusId" INTEGER,
    CONSTRAINT "Vortrag_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Vortrag_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Vortrag" ("benutzerId", "datum", "dauer", "id", "statusId", "thema", "uhrzeit") SELECT "benutzerId", "datum", "dauer", "id", "statusId", "thema", "uhrzeit" FROM "Vortrag";
DROP TABLE "Vortrag";
ALTER TABLE "new_Vortrag" RENAME TO "Vortrag";
CREATE UNIQUE INDEX "Vortrag_email_key" ON "Vortrag"("email");
CREATE UNIQUE INDEX "Vortrag_benutzerId_key" ON "Vortrag"("benutzerId");
CREATE TABLE "new_Stand" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag1" BOOLEAN NOT NULL,
    "tag2" BOOLEAN NOT NULL,
    "bemerkung" TEXT NOT NULL,
    "datum" TEXT NOT NULL,
    "tisch" INTEGER NOT NULL,
    "stuhl" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "ansprechpartner" TEXT NOT NULL,
    "firma" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "benutzerId" INTEGER,
    "statusId" INTEGER,
    CONSTRAINT "Stand_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Stand_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stand" ("bemerkung", "benutzerId", "datum", "id", "statusId", "stuhl", "tag1", "tag2", "tisch") SELECT "bemerkung", "benutzerId", "datum", "id", "statusId", "stuhl", "tag1", "tag2", "tisch" FROM "Stand";
DROP TABLE "Stand";
ALTER TABLE "new_Stand" RENAME TO "Stand";
CREATE UNIQUE INDEX "Stand_email_key" ON "Stand"("email");
CREATE UNIQUE INDEX "Stand_benutzerId_key" ON "Stand"("benutzerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
