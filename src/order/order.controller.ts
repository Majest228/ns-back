import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Auth } from '../decorators/auth.decorator';
import { CurrentUser } from '../decorators/user.decorator';

@Controller('order')
@ApiBearerAuth()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/add')
  @Auth('user')
  async addToCart(@CurrentUser('id') userId: number) {
    return this.orderService.createOrder(userId);
  }

  @Get('get')
  @Auth('user')
  async getOrders(@CurrentUser('id') userId: number) {
    return this.orderService.getOrders(userId);
  }
}
