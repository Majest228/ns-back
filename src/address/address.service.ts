import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AddressDto } from './address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async createAddress(dto: AddressDto, userId: number) {
    return await this.prisma.address.create({
      data: {
        entrance: dto.entrance,
        flat: dto.flat,
        floor: dto.floor,
        street: dto.street,
        streetNumber: dto.streetNumber,
        User: { connect: { id: userId } },
      },
    });
  }
  async getByUser(userId: number) {
    return await this.prisma.address.findMany({ where: { userId } });
  }

  async delete(id: number) {
    return await this.prisma.address.delete({ where: { id } });
  }
}
