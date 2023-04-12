import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CategoryService {
	constructor(private readonly prisma: PrismaService) { }

	async getAll() {
		return await this.prisma.category.findMany()
	}


	async getById(id: number) {
		return await this.prisma.category.findUnique({ where: { id }, include: { product: true } })
	}
}
