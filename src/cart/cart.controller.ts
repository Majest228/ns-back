import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
@Controller('cart')
@ApiBearerAuth()
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Post('/add')
  @Auth('user')
  async addToCart(
    @CurrentUser('id') userId: number,
    @Body('productId') productId: number,
  ) {
    return this.cartService.addToCart(+productId, userId);
  }

  @Get('')
  @Auth('user')
  async getCartItems(@CurrentUser('id') userId: number) {
    return this.cartService.getCartItems(userId);
  }
}
