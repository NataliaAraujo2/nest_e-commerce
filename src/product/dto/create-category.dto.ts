/* eslint-disable prettier/prettier */
import { IsArray, IsString } from 'class-validator';
import { Product } from '../entities/product.entity';


export class CreateCategoryDto {
  @IsString()
  category: string;

}
