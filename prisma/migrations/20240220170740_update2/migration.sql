-- CreateTable
CREATE TABLE "Status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bezeichnung" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stand" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "ansprechpartner" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "firma" TEXT NOT NULL,
    "tag1" BOOLEAN NOT NULL,
    "tag2" BOOLEAN NOT NULL,
    "bemerkung" TEXT NOT NULL,
    "datum" DATETIME NOT NULL,
    "tisch" INTEGER NOT NULL,
    "stuhl" INTEGER NOT NULL,
    "benutzerId" INTEGER NOT NULL,
    "statusId" INTEGER,
    CONSTRAINT "Stand_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Stand_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stand" ("ansprechpartner", "bemerkung", "benutzerId", "datum", "email", "firma", "id", "stuhl", "tag1", "tag2", "telefon", "tisch") SELECT "ansprechpartner", "bemerkung", "benutzerId", "datum", "email", "firma", "id", "stuhl", "tag1", "tag2", "telefon", "tisch" FROM "Stand";
DROP TABLE "Stand";
ALTER TABLE "new_Stand" RENAME TO "Stand";
CREATE UNIQUE INDEX "Stand_email_key" ON "Stand"("email");
CREATE UNIQUE INDEX "Stand_telefon_key" ON "Stand"("telefon");
CREATE UNIQUE INDEX "Stand_firma_key" ON "Stand"("firma");
CREATE UNIQUE INDEX "Stand_benutzerId_key" ON "Stand"("benutzerId");
CREATE TABLE "new_Vortrag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dauer" INTEGER NOT NULL,
    "ansprechpartner" TEXT NOT NULL,
    "firma" TEXT NOT NULL,
    "thema" TEXT NOT NULL,
    "benutzerId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "datum" TEXT NOT NULL,
    "uhrzeit" TEXT NOT NULL,
    "statusId" INTEGER,
    CONSTRAINT "Vortrag_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Vortrag_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Vortrag" ("ansprechpartner", "benutzerId", "datum", "dauer", "email", "firma", "id", "thema", "uhrzeit") SELECT "ansprechpartner", "benutzerId", "datum", "dauer", "email", "firma", "id", "thema", "uhrzeit" FROM "Vortrag";
DROP TABLE "Vortrag";
ALTER TABLE "new_Vortrag" RENAME TO "Vortrag";
CREATE UNIQUE INDEX "Vortrag_firma_key" ON "Vortrag"("firma");
CREATE UNIQUE INDEX "Vortrag_benutzerId_key" ON "Vortrag"("benutzerId");
CREATE UNIQUE INDEX "Vortrag_email_key" ON "Vortrag"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
