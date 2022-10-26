import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  birthDate: string;

  @IsString()
  email: string;
}
