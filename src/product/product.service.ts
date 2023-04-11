import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) { }

  async getAllProducts(search?: string) {

    const products = await this.prisma.product.findMany({ include: { Category: { select: { name: true } } } })

    const filteredProducts = search ? await products.filter(p => p.Category.name == search) : products

    return filteredProducts

  }

  async getById(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } })

    if (!product) throw new BadRequestException("Такого продукта нет")

    return product
  }
}

