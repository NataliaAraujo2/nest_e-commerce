import { IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  birthDate: string;

  @IsString()
  email: string;
}
