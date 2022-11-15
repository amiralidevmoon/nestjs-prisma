import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(5, 20, { message: 'Tol kafi nist' })
  password: string;
}
