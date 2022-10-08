import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  product: string;

  @IsNumber()
  price: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsBoolean()
  status: boolean;
}
