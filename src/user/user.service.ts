import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getById(id: number) {
    const currentUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!currentUser)
      throw new BadRequestException('Пользователь не существует');

    return await currentUser;
  }
}
