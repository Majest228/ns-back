import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async getRegions() {
    return await this.prisma.cities.findMany({ where: { parentId: null } });
  }

  async getCities(id: number) {
    return await this.prisma.cities.findMany({ where: { parentId: id } });
  }
}
