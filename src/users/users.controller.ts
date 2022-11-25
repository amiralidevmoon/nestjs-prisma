import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async getUsers(): Promise<CreateUserDto[]> {
    const users = await this.usersService.getUsers();
    if (!users) {
      throw new NotFoundException('User Not Found!');
    }
    return users;
  }

  @Get('/:id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<CreateUserDto> {
    const user = await this.usersService.getUser(id);
    if (!user) {
      throw new NotFoundException('User Not Found!');
    }
    return user;
  }

  @Post('/')
  async createUser(@Body() body: CreateUserDto): Promise<CreateUserDto> {
    return await this.usersService.createUser(body);
  }

  @Patch('/:id')
  async updateUser(
    @Body() body: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CreateUserDto> {
    return await this.usersService.updateUser(body, id);
  }

  @Delete('/:id')
  async deleteUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CreateUserDto> {
    return await this.usersService.deleteUser(id);
  }
}
