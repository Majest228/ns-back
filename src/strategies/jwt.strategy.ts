import { ConfigService } from '@nestjs/config';
import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy, ExtractJwt } from 'passport-jwt'
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private prisma: PrismaService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: "24242fdfsvcxvds_zsd",
        })
    }
    async validate({ id }: Pick<User, 'id'>) {
        return this.prisma.user.findUnique({ where: { id } })
    }
}