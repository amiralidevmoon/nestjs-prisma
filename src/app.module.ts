import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { OtpModule } from './otp/otp.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    AuthModule,
    OtpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
