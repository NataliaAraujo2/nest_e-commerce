import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
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
