import { Controller, Post, Body, Put } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Put('create')
  @Auth('user')
  async createFavorite(
    @CurrentUser('id') id: number,
    @Body('productId') productId: number,
  ) {
    return await this.favoriteService.createFavorite(id, productId);
  }
}
