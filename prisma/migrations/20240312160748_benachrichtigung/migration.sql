-- CreateTable
CREATE TABLE "Benachrichtigung" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "benutzerId" INTEGER NOT NULL,
    "nachricht" TEXT NOT NULL,
    CONSTRAINT "Benachrichtigung_benutzerId_fkey" FOREIGN KEY ("benutzerId") REFERENCES "Benutzer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Benachrichtigung_benutzerId_key" ON "Benachrichtigung"("benutzerId");
