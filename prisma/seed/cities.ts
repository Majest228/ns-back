import { Cities, PrismaClient } from '@prisma/client';

export const fieldCities = [
  {
    name: 'Акмолинская',
    parentId: null,
  },
  {
    name: 'Кокшетау',
    parentId: 1,
  },
  {
    name: 'Щучинск',
    parentId: 1,
  },
  {
    name: 'Алматы, г',
    parentId: null,
  },
  {
    name: 'Алматы',
    parentId: 4,
  },
  // {
  //   name: 'Астана',
  //   parentId: null,
  // },
  // {
  //   name: 'Аккайын',
  //   parentId: 6,
  // },
  // {
  //   name: 'Астана',
  //   parentId: 6,
  // },
  // {
  //   name: 'Жибек Жолы',
  //   parentId: 6,
  // },
  // {
  //   name: 'Кажымукан',
  //   parentId: 6,
  // },
  // {
  //   name: 'Каражар',
  //   parentId: 6,
  // },
  // {
  //   name: 'Караоткель',
  //   parentId: 6,
  // },
  // {
  //   name: 'Косшы',
  //   parentId: 6,
  // },
];

const prisma = new PrismaClient();
const cities: Cities[] = [];

const createProducts = async (quantity: number) => {
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
    console.log(`Created success`);
  });
