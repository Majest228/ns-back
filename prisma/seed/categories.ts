import { Category, PrismaClient } from "@prisma/client";

export const fieldCategories = [
  {
    name: 'rolls',
  },
  {
    name: 'sushies',
  },
  {
    name: 'sets',
  },
];


const prisma = new PrismaClient();
const categories: Category[] = [];


const createCategories = async (quantity: number) => {
  await prisma.category.createMany({
    data: fieldCategories,
  });
};

async function main() {
  console.log('Start seeding...');
  await createCategories(1000);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    console.log(`Created success`);
  });