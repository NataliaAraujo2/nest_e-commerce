/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */  
/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  
    
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
    
  ) {}

  async getProducts(category: number) {
    const products = await this.productRepository.find({relations: ['category']});
    return products.filter(products=> products.category.id === category)
    };
  
 

  create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  findAll() {
    return this.productRepository.find();
  }

   findOne(id: number) {
    return this.productRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

 


  }
   
