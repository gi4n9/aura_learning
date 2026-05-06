import { Controller, Get, Param } from '@nestjs/common';
import { error } from 'console';

@Controller('sign-in')
export class SignInController {
    private users = [
        { id: 1, name: "Nguyen Van A", email: "a@example.com" },
        { id: 2, name: "Nguyen Van B", email: "b@example.com" },
        { id: 3, name: "Nguyen Van C", email: "c@example.com" }
    ];


    @Get()
    getSignIn() {
        return {
            data: this.users,
            count: this.users.length,
            message: 'danh sach nguoi dung'
        };
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        const userId = parseInt(id);
        const user = this.users.find(u => u.id == userId);

        if (!user) {
            return {
                status: error,
                message: 'Khong tim thay nguoi dung',
                code: 404
            }
        }

        return {
            status: 'success',
            data: user
        }
    }
}
