/*
  Warnings:

  - Made the column `createdBy` on table `countries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedBy` on table `countries` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "countries" ALTER COLUMN "createdBy" SET NOT NULL,
ALTER COLUMN "updatedBy" SET NOT NULL;
