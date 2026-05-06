import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.course.findMany({
            include: { chapters: true },
        })
    }
}
