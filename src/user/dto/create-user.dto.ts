import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  birthDate: string;

  @IsString()
  email: string;
}
