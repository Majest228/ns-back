import { Controller, Get, Body, Patch } from '@nestjs/common';
import { Auth } from 'src/decorators/auth.decorator';
import { CurrentUser } from 'src/decorators/user.decorator';
import { UserService } from './user.service';
import { IUser } from './user.interface';
import { ApiBearerAuth } from '@nestjs/swagger';
@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @Auth('user')
  async getById(@CurrentUser('id') id: number) {
    return await this.userService.getById(id);
  }

  @Patch('update')
  @Auth('user')
  async updateProfile(@CurrentUser('id') id: number, @Body() dto: IUser) {
    return await this.userService.updateProfile(id, dto);
  }
}
