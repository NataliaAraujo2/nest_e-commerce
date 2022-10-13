/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  category: string;
}
