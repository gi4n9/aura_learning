import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CoursesController } from './modules/courses/courses.controller';
import { SupabaseService } from './supabase/supabase.service';
import { AuthController } from './modules/auth/auth/auth.controller';
import { AuthService } from './modules/auth/auth/auth.service';


@Module({
  imports: [PrismaModule],
  controllers: [AppController, AuthController, CoursesController],
  providers: [AppService, AuthService, SupabaseService],
})
export class AppModule { }
