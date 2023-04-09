import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) { }

    async getAllProducts(search) {
      return await this.prisma.product.findMany()
    }

    async getById(id: number) {
        const product = await this.prisma.product.findUnique({ where: { id } })

        if (!product) throw new BadRequestException("Такого продукта нет")

        return product
    }
}

