import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { OtpModule } from '../otp/otp.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  imports: [PrismaModule, OtpModule, PassportModule],
})
export class AuthModule {}
