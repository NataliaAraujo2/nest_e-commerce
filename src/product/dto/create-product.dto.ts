/* eslint-disable prettier/prettier */
import { IsDecimal, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  product: string;

  @IsNumber()
  price: number;

  @IsDecimal()
  description: string;

  @IsString()
  category: string;
}
