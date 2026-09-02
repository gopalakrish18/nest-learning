/*
  Warnings:

  - You are about to drop the `countries` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
ALTER TABLE countries 
ALTER COLUMN status TYPE BOOLEAN USING status::boolean;

