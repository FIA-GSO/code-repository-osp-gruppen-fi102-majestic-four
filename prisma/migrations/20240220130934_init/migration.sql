-- CreateTable
CREATE TABLE "Benutzer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "passwort" TEXT NOT NULL,
    "vorname" TEXT NOT NULL,
    "nachname" TEXT NOT NULL,
    "strasse" TEXT NOT NULL,
    "hausnummer" TEXT NOT NULL,
    "postleitzahl" TEXT NOT NULL,
    "ort" TEXT NOT NULL,
    "firmaId" INTEGER NOT NULL,
    "rolleId" INTEGER NOT NULL,
    CONSTRAINT "Benutzer_firmaId_fkey" FOREIGN KEY ("firmaId") REFERENCES "Firma" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Benutzer_rolleId_fkey" FOREIGN KEY ("rolleId") REFERENCES "Rollen" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Firma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ansprechpartner" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "fax" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Stand" (
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
    CONSTRAINT "Stand_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rollen" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bezeichnung" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Vortrag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dauer" INTEGER NOT NULL,
    "ansprechpartner" TEXT NOT NULL,
    "firma" TEXT NOT NULL,
    "thema" TEXT NOT NULL,
    "benutzerId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "datum" TEXT NOT NULL,
    "uhrzeit" TEXT NOT NULL,
    CONSTRAINT "Vortrag_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Benutzer_firmaId_key" ON "Benutzer"("firmaId");
