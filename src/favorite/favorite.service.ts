import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private prisma: PrismaService) {}

  async createFavorite(userId: number, productId: number) {
    const favourites = await this.prisma.favorite.findMany();
    let checked = false;

    const currentFavorite = favourites.find(
      (item) => item.productId == productId && item.userId == userId,
    );
    favourites.forEach((favorite) => {
      if (favorite.productId == productId && favorite.userId == userId) {
        checked = true;
      }
    });
    if (checked) {
      return await this.prisma.favorite.delete({
        where: { id: currentFavorite.id },
      });
    } else {
      return await this.prisma.favorite.create({ data: { productId, userId } });
    }
  }
}
