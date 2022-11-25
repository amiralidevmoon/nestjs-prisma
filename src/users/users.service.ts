import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async getUsers(): Promise<CreateUserDto[]> {
    const users = await this.prismaService.user.findMany();

    return users;
  }

  async getUser(id: number): Promise<CreateUserDto> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    return user;
  }

  async createUser(userDataBody: CreateUserDto): Promise<CreateUserDto> {
    const newUser = await this.prismaService.user.create({
      data: userDataBody,
    });

    return newUser;
  }

  async updateUser(
    userDataBody: UpdateUserDto,
    id: number,
  ): Promise<CreateUserDto> {
    const updatedUser = await this.prismaService.user.update({
      where: { id },
      data: userDataBody,
    });

    return updatedUser;
  }

  async deleteUser(id: number): Promise<CreateUserDto> {
    const deletedUser = await this.prismaService.user.delete({
      where: { id },
    });

    return deletedUser;
  }
}
