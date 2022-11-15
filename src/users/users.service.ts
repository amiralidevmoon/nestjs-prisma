import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async createUser(userDataBody: CreateUserDto) {
    try {
      const newUser = await this.prismaService.user.create({
        data: userDataBody,
      });

      return newUser;
    } catch (e) {
      return e;
    }
  }
}
