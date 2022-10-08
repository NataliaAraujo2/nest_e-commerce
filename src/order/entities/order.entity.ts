/* eslint-disable prettier/prettier */

import { Client } from 'src/client/entities/client.entity';
import { Product } from 'src/product/entities/product.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Client, clients => Client)
  client: Client
  
  @OneToMany(type => Product, product => Product)
  products: Product
}
