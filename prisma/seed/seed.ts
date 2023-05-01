import { Category, PrismaClient, Product } from '@prisma/client';
import { fieldProducts } from './products';
const prisma = new PrismaClient();

const createProducts = async (quantity: number) => {
  const products: Product[] = [];
  const categories: Category[] = [];
  console.log(`Created ${categories.length} categories`);
  console.log(`Created ${products.length} products`);

  await prisma.product.createMany({
    data: fieldProducts,
  });
};

async function main() {
  console.log('Start seeding...');
  await createProducts(1000);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
