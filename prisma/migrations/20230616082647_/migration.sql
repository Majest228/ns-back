/*
  Warnings:

  - The `status` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "DeliveryType" AS ENUM ('Доставка', 'Самовывоз');

-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('Создан', 'Принят');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "typeDelivery" "DeliveryType" NOT NULL DEFAULT 'Доставка',
DROP COLUMN "status",
ADD COLUMN     "status" "STATUS" NOT NULL DEFAULT 'Создан';
