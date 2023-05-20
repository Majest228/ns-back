import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('get-regions')
  async getRegions() {
    return await this.cityService.getRegions();
  }

  @Get('get-cities/:id')
  async getCities(@Param('id') id: number) {
    return await this.cityService.getCities(+id);
  }
}
