import { IsDefined, IsString, Length } from 'class-validator';

export class LoginUserDto {
  @IsDefined()
  @IsString()
  readonly email: string;

  @IsDefined()
  @IsString()
  @Length(5, 20, { message: 'Tol kafi nist' })
  readonly password: string;
}
