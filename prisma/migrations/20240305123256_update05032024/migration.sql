-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Firma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ansprechpartner" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefon" TEXT,
    "fax" TEXT
);
INSERT INTO "new_Firma" ("ansprechpartner", "email", "fax", "id", "name", "telefon") SELECT "ansprechpartner", "email", "fax", "id", "name", "telefon" FROM "Firma";
DROP TABLE "Firma";
ALTER TABLE "new_Firma" RENAME TO "Firma";
CREATE UNIQUE INDEX "Firma_email_key" ON "Firma"("email");
CREATE UNIQUE INDEX "Firma_telefon_key" ON "Firma"("telefon");
CREATE UNIQUE INDEX "Firma_fax_key" ON "Firma"("fax");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
