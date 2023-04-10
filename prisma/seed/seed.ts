import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()
import { fieldProducts } from './products'

const createProducts = async (quantity: number) => {
	const products: Product[] = []

	console.log(`Created ${products.length} products`)

	for (let i = 0; i < quantity; i++) {
		fieldProducts.forEach(async data => {
			const product = await prisma.product.create({
				data: {
					name: data.name,
					price: data.price,
					weight: data.weight,
					productPath: data.productPath,
					description: data.description,
					Category: {create :{id: data.categoryId}}
				}
			})
			products.push(product)
		})
	}

}

async function main() {
	console.log("Start seeding...")
	await createProducts(1000)
}

main().catch(e => console.error(e)).finally(async () => {
	await prisma.$disconnect()
})