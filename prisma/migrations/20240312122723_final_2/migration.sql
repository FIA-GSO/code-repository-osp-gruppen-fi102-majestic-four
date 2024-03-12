/*
  Warnings:

  - Made the column `rolleId` on table `Benutzer` required. This step will fail if there are existing NULL values in that column.

*/
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
    CONSTRAINT "Vortrag_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Vortrag_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Vortrag" ("benutzerId", "datum", "dauer", "id", "statusId", "thema", "uhrzeit") SELECT "benutzerId", "datum", "dauer", "id", "statusId", "thema", "uhrzeit" FROM "Vortrag";
DROP TABLE "Vortrag";
ALTER TABLE "new_Vortrag" RENAME TO "Vortrag";
CREATE UNIQUE INDEX "Vortrag_benutzerId_key" ON "Vortrag"("benutzerId");
CREATE TABLE "new_Benutzer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "passwort" TEXT NOT NULL,
    "vorname" TEXT,
    "nachname" TEXT,
    "firma" TEXT,
    "telefon" TEXT,
    "rolleId" INTEGER NOT NULL,
    CONSTRAINT "Benutzer_rolleId_fkey" FOREIGN KEY ("rolleId") REFERENCES "Rollen" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Benutzer" ("email", "firma", "id", "nachname", "passwort", "rolleId", "telefon", "vorname") SELECT "email", "firma", "id", "nachname", "passwort", "rolleId", "telefon", "vorname" FROM "Benutzer";
DROP TABLE "Benutzer";
ALTER TABLE "new_Benutzer" RENAME TO "Benutzer";
CREATE UNIQUE INDEX "Benutzer_email_key" ON "Benutzer"("email");
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
    CONSTRAINT "Stand_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Stand_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stand" ("bemerkung", "benutzerId", "datum", "id", "statusId", "stuhl", "tag1", "tag2", "tisch") SELECT "bemerkung", "benutzerId", "datum", "id", "statusId", "stuhl", "tag1", "tag2", "tisch" FROM "Stand";
DROP TABLE "Stand";
ALTER TABLE "new_Stand" RENAME TO "Stand";
CREATE UNIQUE INDEX "Stand_benutzerId_key" ON "Stand"("benutzerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
