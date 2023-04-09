import { IsString, IsNotEmpty, MinLength, IsEmail, IsOptional } from "class-validator"

export class AuthDto {
    @IsString()
    @IsEmail()
    email: string
    @IsString()
    @MinLength(4, { message: "Минимальная длина пароля - 4 символа " })
    password: string

    @IsString()
    @IsOptional()
    login: string
}