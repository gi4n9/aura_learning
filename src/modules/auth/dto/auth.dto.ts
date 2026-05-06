import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class SignUpDto {
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;

    @IsNotEmpty()
    fullName: string;

    @IsOptional()
    avatarUrl?: string;
}

export class SignInDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}