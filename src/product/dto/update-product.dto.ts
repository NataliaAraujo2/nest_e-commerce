/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  product: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

}
