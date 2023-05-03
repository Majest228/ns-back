import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { IUser } from './user.interface';

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

  async updateProfile(id: number, dto: IUser) {
    const user = await this.getById(id);
    return await this.prisma.user.update({
      where: { id },
      data: {
        name: dto.name ? dto.name : user.name,
        login: dto.login ? dto.login : user.login,
        email: dto.email ? dto.email : user.email,
      },
    });
  }
}
