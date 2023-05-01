import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CurrentUser } from 'src/decorators/user.decorator';
import { AddressDto } from './address.dto';
import { Auth } from 'src/decorators/auth.decorator';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  @Auth('user')
  async create(@CurrentUser('id') userId: number, @Body() dto: AddressDto) {
    return await this.addressService.createAddress(dto, userId);
  }

  @Get('get-for-user')
  @Auth('user')
  async getAdrressForUser(@CurrentUser('id') userId: number) {
    return await this.addressService.getByUser(userId);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return await this.addressService.delete(+id);
  }
}
