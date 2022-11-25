import { IsDefined, IsEmail, IsString, Length } from 'class-validator';

export class RegisterUserDto {
  @IsDefined()
  @IsString()
  readonly name: string;

  @IsDefined()
  @IsEmail()
  readonly email: string;

  @IsDefined()
  @IsString()
  @Length(5, 20, { message: 'Tol kafi nist' })
  readonly password: string;
}
