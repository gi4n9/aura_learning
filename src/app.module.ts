import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignInController } from './modules/auth/sign_in/sign_in.controller';
import { PrismaModule } from './prisma/prisma.module';
import { CoursesController } from './modules/courses/courses.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, SignInController, CoursesController],
  providers: [AppService],
})
export class AppModule { }
