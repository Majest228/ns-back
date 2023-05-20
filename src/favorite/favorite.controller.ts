import { Controller, Post, Body, Put, Get } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post('create')
  @Auth('user')
  async createFavorite(
    @CurrentUser('id') id: number,
    @Body('productId') productId: number,
  ) {
    return await this.favoriteService.createFavorite(id, productId);
  }

  @Get('by-id')
  @Auth('user')
  async getFavoriteById(@CurrentUser('id') id: number) {
    return await this.favoriteService.getFavoriteById(id);
  }
}
