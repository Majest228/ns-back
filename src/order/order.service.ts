import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: number) {
    const cartItems = await this.prisma.cart.findMany({
      where: {
        userId,
      },
      include: {
        product: true,
      },
    });
    const orderItems = cartItems.map((cartItem) => ({
      productId: cartItem.productId,
      quantity: cartItem.quantity,
      price: cartItem.product.price,
    }));

    const createdOrder = await this.prisma.order.create({
      data: {
        userId,
        items: {
          create: orderItems,
        },
        status: 'CREATED',
      },
      include: {
        items: true,
      },
    });
    await this.prisma.cart.deleteMany({
      where: {
        userId,
      },
    });

    return createdOrder;
  }
  async getOrders(userId: number) {
    return this.prisma.order.findMany({
      where: {
        userId,
      },
      include: {
        items: true,
      },
    });
  }
}
