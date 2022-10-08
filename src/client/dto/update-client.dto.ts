import { PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  birthDate: string;

  @IsString()
  email: string;

  @IsBoolean()
  status: boolean;
}