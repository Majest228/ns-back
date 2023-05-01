import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { hash, verify } from 'argon2';
import { PrismaService } from 'src/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async register(dto: AuthDto) {
    const oldUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (oldUser)
      throw new BadRequestException('Такой пользователь уже существует');
    const newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: await hash(dto.password),
        login: dto.login,
      },
    });

    const tokens = await this.createToken(newUser.id, newUser.email);

    return {
      user: this.returnFields(newUser),
      ...tokens,
    };
  }

  async login(dto: AuthDto) {
    const currentUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!currentUser)
      throw new BadRequestException('Неверная почта или пароль');

    const checkPass = await verify(currentUser.password, dto.password);

    if (!checkPass) throw new BadRequestException('Невернные данные');

    const tokens = await this.createToken(currentUser.id, currentUser.email);

    return {
      user: await this.returnFields(currentUser),
      ...tokens,
    };
  }

  async createToken(userId: number, email: string) {
    const data = {
      id: userId,
      email,
    };

    const accessToken = this.jwt.sign(data, {
      expiresIn: '120ms',
    });

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken);

    if (result) throw new UnauthorizedException('Invalid refresh token');

    const user = await this.prisma.user.findUnique({
      where: {
        id: result.id,
      },
    });

    const tokens = await this.createToken(user.id, user.email);

    return {
      user: await this.returnFields(user),
      ...tokens,
    };
  }

  returnFields(user: User) {
    return {
      id: user.id,
      email: user.email,
    };
  }
}
