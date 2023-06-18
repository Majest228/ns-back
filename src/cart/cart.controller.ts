import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put('/increment')
  @Auth('user')
  async incrementCartItem(
    @CurrentUser('id') userId: number,
    @Body('cartItemId') cartItemId: number,
  ) {
    return this.cartService.incrementCartItem(cartItemId);
  }

  @Put('/decrement')
  @Auth('user')
  async decrementCartItem(
    @CurrentUser('id') userId: number,
    @Body('cartItemId') cartItemId: number,
  ) {
    return this.cartService.decrementCartItem(cartItemId);
  }

  @Delete('delete-by-id')
  @Auth('user')
  async removeCartItem(@Body('cartItemId') cartItemId: number) {
    return this.cartService.removeCartItem(cartItemId);
  }

  @Delete('delete-all')
  @Auth('user')
  async removeAllCartItems(@CurrentUser('id') userId: number) {
    return this.cartService.removeAllCartItems(userId);
  }
}
