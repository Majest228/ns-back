import { PrismaClient, Product } from '@prisma/client';

export const fieldProducts = [
  {
    name: 'Филадельфия с лососем и чеддером',
    weight: 330,
    description:
      'филадельфия с лососем и чеддером, рис, сыр сливочный, авокадо, икра, сыр чеддер, красная икра, маринованный',
    price: 6444,
    productPath: 'roll1.png',
    categoryId: 1,
  },
  {
    name: 'Фукуро',
    weight: 320,
    description:
      'лосось, нори, рис, соус унаги, авокадо, крабовый замес, фисташки, пате из утки',
    price: 4864,
    productPath: 'roll2.png',
    categoryId: 1,
  },
  {
    name: 'Киану',
    weight: 295,
    description:
      'нори, рис, тунец, авокадо, соус спайси, креветка, крабовый замес, зеленый лук, чипсы',
    price: 4864,
    productPath: 'roll3.png',
    categoryId: 1,
  },
  {
    name: 'Энигма',
    weight: 295,
    description:
      'нори, рис, сливочный сыр, соус унаги, тунец, авокадо, манго, японский омлет тамаго',
    price: 4256,
    productPath: 'roll4.png',
    categoryId: 1,
  },
  {
    name: 'Сакура',
    weight: 290,
    description:
      'лосось, огурец, рис, авокадо, икра, крабовый замес, сыр пармезан, японский омлет',
    price: 5827,
    productPath: 'roll5.png',
    categoryId: 1,
  },
  {
    name: 'Кодзима',
    weight: 340,
    description:
      'нори, огурец, рис, сыр сливочный, авокадо, креветка, крабовый замес, японский омлет',
    price: 5463,
    productPath: 'roll6.png',
    categoryId: 1,
  },
  {
    name: 'Мориарти',
    weight: 350,
    description:
      'лосось, нори, огурец, рис, сыр сливочный, авокадо, икра, манго, зеленый лук, сыр',
    price: 5584,
    productPath: 'roll7.png',
    categoryId: 1,
  },
  {
    name: 'Запеченный с чеддером',
    weight: 335,
    description:
      'нори, рис, авокадо, креветка, крабовый замес, чернила каракатицы, зеленая',
    price: 5948,
    productPath: 'roll8.png',
    categoryId: 1,
  },
  {
    name: 'Запеченный с пармезаном',
    weight: 330,
    description:
      'лосось, нори, огурец, рис, кунжут, авокадо, икра, салат айсберг, сыр пармезан, соус',
    price: 5107,
    productPath: 'roll9.png',
    categoryId: 1,
  },
  {
    name: 'Феликс лосось с крабом',
    weight: 305,
    description:
      'лосось, нори, огурец, рис, кунжут, икра, крабовый замес, японский омлет тамаго, соус',
    price: 4620,
    productPath: 'roll10.png',
    categoryId: 1,
  },
  {
    name: 'Tropical Ninja',
    weight: 270,
    description:
      'сыр сливочный, манго, банан, рисовое тесто, кешью, арахис, какао, консервированный',
    price: 2918,
    productPath: 'roll11.png',
    categoryId: 1,
  },
  {
    name: 'Ханами',
    weight: 305,
    description:
      'лосось, огурец, рис, салат айсберг, манго, водоросли чука, японский омлет тамаго',
    price: 5228,
    productPath: 'roll12.png',
    categoryId: 1,
  },
  {
    name: 'Мидори',
    weight: 290,
    description:
      'лосось, рис, авокадо, крабовый замес, водоросли чука, плавленый сыр, японский',
    price: 5593,
    productPath: 'roll13.png',
    categoryId: 1,
  },
  {
    name: 'Филадельфия с лососем',
    weight: 320,
    description: 'лосось, нори, огурец, рис, сливочный сыр',
    price: 4985,
    productPath: 'roll14.png',
    categoryId: 1,
  },
  {
    name: 'Филадельфия с лососем и авокадо',
    weight: 330,
    description: 'лосось, нори, огурец, рис, сливочный сыр',
    price: 4985,
    productPath: 'roll15.png',
    categoryId: 1,
  },
  {
    name: 'Филадельфия с лососем и авокадо',
    weight: 330,
    description: 'лосось, нори, рис, сыр сливочный, авокадо, икра',
    price: 5350,
    productPath: 'roll16.png',
    categoryId: 1,
  },
  {
    name: 'Запечена креветка',
    weight: 350,
    description:
      'нори, рис, сыр сливочный, авокадо, икра, креветка, сырная шапочка',
    price: 5228,
    productPath: 'roll17.png',
    categoryId: 1,
  },
  {
    name: 'Филадельфия с угрем',
    weight: 350,
    description: 'нори, огурец, рис, сыр сливочный, кунжут, соус унаги, угорь',
    price: 5532,
    productPath: 'roll18.png',
    categoryId: 1,
  },
  {
    name: 'Комбо Филадельфия',
    weight: 325,
    description:
      'лосось, нори, огурец, рис, сыр сливочный, кунжут, соус унаги, угорь',
    price: 5472,
    productPath: 'roll19.png',
    categoryId: 1,
  },
  {
    name: 'Ямамото',
    weight: 365,
    description:
      'лосось, нори, рис, сыр сливочный, авокадо, икра, креветка, крабовый замес',
    price: 6080,
    productPath: 'roll120.png',
    categoryId: 1,
  },
  {
    name: 'Гункан с осьминогом',
    weight: 55,
    description:
      'лосось, нори, кунжут, авокадо, икра, крабовый замес, соус шрирача, японский',
    price: 1578,
    productPath: 'sushi1.png',
    categoryId: 2,
  },
  {
    name: 'Гункан с тунцом и трюфелем',
    weight: 40,
    description:
      'нори, рис, японский майонез, бальзамик, трюфельная сальса, лук шнитт',
    price: 1638,
    productPath: 'sushi2.png',
    categoryId: 2,
  },
  {
    name: 'Гункан тунец спайси',
    weight: 40,
    description:
      'нори, рис, тунец, соус шрирача, японский майонез, кунжутное масло, лук шнитт, соус',
    price: 1517,
    productPath: 'sushi3.png',
    categoryId: 2,
  },
  {
    name: 'Гункан лосось спайси',
    weight: 40,
    description:
      'лосось, нори, соус шрирача, японский майонез, кунжутное масло, лук шнитт, соус ворчестер',
    price: 1517,
    productPath: 'sushi4.png',
    categoryId: 2,
  },
  {
    name: 'Гункан гребешок',
    weight: 40,
    description:
      'нори, рис, икра, морские гребешки, соус шрирача, японский майонез',
    price: 1396,
    productPath: 'sushi5.png',
    categoryId: 2,
  },
  {
    name: 'Гункан лосось',
    weight: 40,
    description: 'лосось, нори, рис, икра, соус шрирача, японский майонез',
    price: 1335,
    productPath: 'sushi6.png',
    categoryId: 2,
  },
  {
    name: 'Гункан с креветками',
    weight: 40,
    description: 'нори, рис, икра, креветка, соус шрирача, японский майонез',
    price: 1214,
    productPath: 'sushi7.png',
    categoryId: 2,
  },
  {
    name: 'Гункан угорь',
    weight: 40,
    description: 'нори, рис, угорь, икра, соус шрирача, японский майонез',
    price: 1396,
    productPath: 'sushi8.png',
    categoryId: 2,
  },
  {
    name: 'Гункан тунец',
    weight: 40,
    description: 'нори, рис, тунец, икра, соус шрирача, японский майонез',
    price: 1335,
    productPath: 'sushi9.png',
    categoryId: 2,
  },
  {
    name: 'Нигири лосось',
    weight: 40,
    description: 'лосось, рис',
    price: 1335,
    productPath: 'sushi10.png',
    categoryId: 2,
  },
  {
    name: 'Нигири угорь',
    weight: 45,
    description: 'нори, рис, кунжут, соус унаги, угорь',
    price: 1396,
    productPath: 'sushi11.png',
    categoryId: 2,
  },
  {
    name: 'Нигири креветка',
    weight: 35,
    description: 'рис, креветка',
    price: 1214,
    productPath: 'sushi12.png',
    categoryId: 2,
  },
  {
    name: 'Нигири с лососем и икрой',
    weight: 40,
    description: 'лосось, рис, зеленый лук, красная икра',
    price: 1456,
    productPath: 'sushi13.png',
    categoryId: 2,
  },
  {
    name: 'Нигири тунец',
    weight: 35,
    description: 'рис, тунец',
    price: 1335,
    productPath: 'sushi14.png',
    categoryId: 2,
  },
  {
    name: 'Сет #3',
    weight: 950,
    description: 'филадельфия с лососем, Филадельфия с угрем, зеленый дракон',
    price: 15331,
    productPath: 'set1.png',
    categoryId: 3,
  },
  {
    name: 'Сет #1',
    weight: 590,
    description: 'маки лосось, нигири лосось, филадельфия с лососем',
    price: 12544,
    productPath: 'set2.png',
    categoryId: 3,
  },
  {
    name: 'Сет #2',
    weight: 895,
    description:
      'нигири лосось, филадельфия с лососем, нигири угорь, филадельфия с угрем',
    price: 18664,
    productPath: 'set3.png',
    categoryId: 3,
  },
  {
    name: 'Сет #4',
    weight: 2120,
    description:
      'нигири лосось, филадельфия с лососем, нигири угорь, филадельфия с угрем',
    price: 39996,
    productPath: 'set4.png',
    categoryId: 3,
  },
  {
    name: 'Ninja сет',
    weight: 480,
    description:
      'лосось, рис, кунжут, соус унаги, угорь, авокадо, икра, креветка, морской гребешок',
    price: 14544,
    productPath: 'set5.png',
    categoryId: 3,
  },
  {
    name: 'Сет #6',
    weight: 1315,
    description:
      'зеленый дракон, сливочный угорь, филадельфия с лососем и авокадо,',
    price: 21331,
    productPath: 'set6.png',
    categoryId: 3,
  },
  {
    name: 'Сет DJ FM',
    weight: 950,
    description: 'канада, 4 сыра, Химавари',
    price: 15513,
    productPath: 'set7.png',
    categoryId: 3,
  },
  {
    name: 'Запечений сет',
    weight: 1000,
    description: 'запеченная креветка, запеченный лосось, апетито',
    price: 15331,
    productPath: 'set8.png',
    categoryId: 3,
  },
  {
    name: 'Сет #5',
    weight: 1600,
    description:
      'Зеленый дракон, канада, аляска, сливочный угорь, Филадельфия с лососем и авокадо',
    price: 27451,
    productPath: 'set9.png',
    categoryId: 3,
  },
  {
    name: 'Сет #7',
    weight: 650,
    description:
      'нигири лосось, Филадельфия с лососем и авокадо, гункан гребешок',
    price: 16240,
    productPath: 'set10.png',
    categoryId: 3,
  },
  {
    name: 'Сет #7',
    weight: 650,
    description:
      'нигири лосось, Филадельфия с лососем и авокадо, гункан гребешок',
    price: 16240,
    productPath: 'set11.png',
    categoryId: 3,
  },
  {
    name: 'Гункан сет',
    weight: 800,
    description:
      'гункан гребінець, гункан лосось, гункан тунець, гункан вугор, гункан креветка',
    price: 26664,
    productPath: 'set12.png',
    categoryId: 3,
  },
];

const prisma = new PrismaClient();
const products: Product[] = [];

const createProducts = async (quantity: number) => {
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
    console.log(`Created success`);
  });
