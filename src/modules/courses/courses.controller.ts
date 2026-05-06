import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly prisma: PrismaService) { }
    @Get('db')
    async testDatabase() {
        try {
            const data = await this.prisma.course.findMany({
                take: 5,
            });
            return {
                message: 'Successfully connected',
                count: data.length,
                data: data
            }
        } catch (error: any) {
            return {
                message: 'Error connection',
                error: error.message,
            }
        }
    }
}
