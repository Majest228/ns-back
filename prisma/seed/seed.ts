import { Category, PrismaClient, Product, Cities } from '@prisma/client';
import { fieldProducts } from './products';
import { fieldCities } from './cities';
const prisma = new PrismaClient();

const createProducts = async (quantity: number) => {
  const products: Product[] = [];
  const categories: Category[] = [];
  console.log(`Created ${categories.length} categories`);
  console.log(`Created ${products.length} products`);

  await prisma.product.createMany({
    data: fieldProducts,
  });

  await prisma.cities.createMany({
    data: fieldCities,
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
