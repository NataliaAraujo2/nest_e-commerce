/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  product: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  category: string;
}
