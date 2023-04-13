import { Controller, Get } from '@nestjs/common'
import { Auth } from 'src/decorators/auth.decorator'
import { CurrentUser } from 'src/decorators/user.decorator'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('profile')
  @Auth('user')
  async getById(@CurrentUser('id') id: number) {
    return await this.userService.getById(id)
  }
}
