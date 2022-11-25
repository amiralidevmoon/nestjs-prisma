import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import * as argon2 from 'argon2';
import { OtpService } from '../otp/otp.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private otpService: OtpService,
  ) {}

  async registerUser(userDataBody: RegisterUserDto): Promise<RegisterUserDto> {
    // await this.otpService.sendSmsToUser();

    const hashedPassword = await argon2.hash(userDataBody.password);

    const user = await this.prismaService.user.create({
      data: {
        name: userDataBody.name,
        email: userDataBody.email,
        password: hashedPassword,
      },
    });

    return user;
  }

  async validateUser(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new BadRequestException();
    }

    if (!(await argon2.verify(user.password, password))) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
