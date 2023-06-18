/*
  Warnings:

  - The values [Доставка,Самовывоз] on the enum `DeliveryType` will be removed. If these variants are still used in the database, this will fail.
  - The values [Создан,Принят] on the enum `STATUS` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DeliveryType_new" AS ENUM ('DELIVERY', 'PICKUP');
ALTER TABLE "Order" ALTER COLUMN "typeDelivery" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "typeDelivery" TYPE "DeliveryType_new" USING ("typeDelivery"::text::"DeliveryType_new");
ALTER TYPE "DeliveryType" RENAME TO "DeliveryType_old";
ALTER TYPE "DeliveryType_new" RENAME TO "DeliveryType";
DROP TYPE "DeliveryType_old";
ALTER TABLE "Order" ALTER COLUMN "typeDelivery" SET DEFAULT 'DELIVERY';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "STATUS_new" AS ENUM ('CREATED', 'ACCEPTED');
ALTER TABLE "Order" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "STATUS_new" USING ("status"::text::"STATUS_new");
ALTER TYPE "STATUS" RENAME TO "STATUS_old";
ALTER TYPE "STATUS_new" RENAME TO "STATUS";
DROP TYPE "STATUS_old";
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'CREATED';
COMMIT;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "typeDelivery" SET DEFAULT 'DELIVERY',
ALTER COLUMN "status" SET DEFAULT 'CREATED';
