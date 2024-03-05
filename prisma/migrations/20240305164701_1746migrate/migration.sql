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
    "datum" TEXT NOT NULL,
    "tisch" INTEGER NOT NULL,
    "stuhl" INTEGER NOT NULL,
    "benutzerId" INTEGER NOT NULL,
    "statusId" INTEGER,
    CONSTRAINT "Stand_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Stand_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stand" ("ansprechpartner", "bemerkung", "benutzerId", "datum", "email", "firma", "id", "statusId", "stuhl", "tag1", "tag2", "telefon", "tisch") SELECT "ansprechpartner", "bemerkung", "benutzerId", "datum", "email", "firma", "id", "statusId", "stuhl", "tag1", "tag2", "telefon", "tisch" FROM "Stand";
DROP TABLE "Stand";
ALTER TABLE "new_Stand" RENAME TO "Stand";
CREATE UNIQUE INDEX "Stand_email_key" ON "Stand"("email");
CREATE UNIQUE INDEX "Stand_telefon_key" ON "Stand"("telefon");
CREATE UNIQUE INDEX "Stand_firma_key" ON "Stand"("firma");
CREATE UNIQUE INDEX "Stand_benutzerId_key" ON "Stand"("benutzerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
