import { Controller, Get, Param } from '@nestjs/common'
import { CategoryService } from './category.service'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get('all')
  async getAll() {
    return await this.categoryService.getAll()
  }

  @Get('by/:id')
  async getById(@Param("id") id: number) {
    return await this.categoryService.getById(+id)
  }
}
