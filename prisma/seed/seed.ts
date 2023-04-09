import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()

const createProducts = async (quantity: number) => {
	const products: Product[] = []

	console.log(`Created ${products.length} products`)

	for (let i = 0; i < quantity; i++) {
			// tableProducts.forEach(async item => {
			//     const product = await prisma.product.create({
			//         data: {
			//             title: item.title,
			//             slug: item.slug,
			//             price: item.price,
			//             articul: item.articul
			//         }
			//     })
			//     products.push(product)
			// })

	}

}

async function main() {
	console.log("Start seeding...")
	await createProducts(15)
}

main().catch(e => console.error(e)).finally(async () => {
	await prisma.$disconnect()
})