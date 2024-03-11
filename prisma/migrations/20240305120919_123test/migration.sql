/*
  Warnings:

  - A unique constraint covering the columns `[telefon]` on the table `Vortrag` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Vortrag" ADD COLUMN "telefon" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Vortrag_telefon_key" ON "Vortrag"("telefon");
