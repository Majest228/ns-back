import { Body, Controller, Get, Param } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('all')
  async getAllProducts(@Body('search') search: string) {
    return await this.productService.getAllProducts(search)
  }

  @Get('by/:id')
  async getById(@Param("id") id: number) {
    return await this.productService.getById(+id)
  }

  @Get('many/:name')
  async getManyByIdCategory(@Param('name') name: string) {
    return await this.productService.getManyByIdCategory(name)
  }
}
