import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {hash, verify} from 'argon2'
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor (private prisma: PrismaService) {}

    async register(dto :AuthDto) {
        const oldUser = await this.prisma.user.findUnique({where: {email: dto.email}})
        if (oldUser) throw new BadRequestException("Такой пользователь уже существует")

        return await this.prisma.user.create({data : {email: dto.email, password: await hash(dto.password), login: dto.login  }})
    }

    async login(dto: AuthDto) {
        const currentUser = await this.prisma.user.findUnique({where: {email: dto.email}})

        if (!currentUser) throw new BadRequestException("Неверная почта или пароль мажест лох")
    }
}
