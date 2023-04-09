import { Body, Controller, Get } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  async getAllProducts(@Body() search: string) {
    return await this.productService.getAllProducts(search)
  }
}
