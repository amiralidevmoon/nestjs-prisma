import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async findAll(): Promise<string> {
    return 'This action returns all cats';
  }

  @Post('/')
  async createUser(@Body() body: CreateUserDto): Promise<CreateUserDto> {
    return await this.usersService.createUser(body);
  }
}
