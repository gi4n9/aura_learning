import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { SignInDto, SignUpDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(private readonly supabase: SupabaseService) { }

    async signUp(dto: SignUpDto) {
        const { email, password, fullName, avatarUrl } = dto;

        const { data, error } = await this.supabase.client.auth.signUp({
            email: dto.email!,
            password: dto.password!,
            options: {
                data: {
                    full_name: dto.fullName!,
                    avatar_url: avatarUrl || null,
                }
            }
        })

        if (error) {
            throw new BadRequestException(error.message)
        }

        return { message: 'Sign Up Successfully ' }
    }

    async signIn(dto: SignInDto) {
        const { email, password } = dto;

        const { data, error } = await this.supabase.client.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            throw new UnauthorizedException('Email and password are incorrect')
        }

        return {
            message: 'Sign In Successfully',
            user: data.user,
            session: data.session
        }
    }
}
