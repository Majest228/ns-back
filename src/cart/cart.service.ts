import { Injectable } from '@nestjs/common';
import { Cart } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartService {
  constructor(readonly prisma: PrismaService) {}

  async addToCart(productId: number, userId: number): Promise<Cart> {
    const existingCart = await this.prisma.cart.findFirst({
      where: {
        productId,
        userId,
      },
    });

    if (existingCart) {
      // Если товар уже есть в корзине, увеличиваем количество на 1
      return this.prisma.cart.update({
        where: {
          id: existingCart.id,
        },
        data: {
          quantity: existingCart.quantity + 1,
        },
      });
    }

    // Если товара нет в корзине, создаем новую запись
    return this.prisma.cart.create({
      data: {
        productId,
        userId,
        quantity: 1,
      },
    });
  }

  async incrementCartItem(cartItemId: number): Promise<Cart> {
    return this.prisma.cart.update({
      where: {
        id: cartItemId,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });
  }

  async decrementCartItem(cartItemId: number): Promise<Cart> {
    const cartItem = await this.prisma.cart.findUnique({
      where: {
        id: cartItemId,
      },
    });

    if (cartItem.quantity === 1) {
      await this.prisma.cart.delete({
        where: {
          id: cartItemId,
        },
      });
      return null;
    }

    return this.prisma.cart.update({
      where: {
        id: cartItemId,
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });
  }

  async getCartItems(userId: number): Promise<Cart[]> {
    return this.prisma.cart.findMany({
      where: {
        userId,
      },
      include: {
        product: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  async removeCartItem(cartItemId: number): Promise<void> {
    await this.prisma.cart.delete({
      where: {
        id: cartItemId,
      },
    });
  }

  async removeAllCartItems(userId: number): Promise<void> {
    await this.prisma.cart.deleteMany({
      where: {
        userId,
      },
    });
  }
}
