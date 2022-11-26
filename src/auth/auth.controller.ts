import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JWTAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async registerUser(@Body() body: RegisterUserDto): Promise<RegisterUserDto> {
    return await this.authService.registerUser(body);
  }

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async loginUser(@Body() body: LoginUserDto, @Req() request) {
    return this.authService.login(request.user);
  }

  @Get('/profile')
  @UseGuards(JWTAuthGuard)
  async getUserProfile(@Req() request) {
    return request.user;
  }
}
