/* eslint-disable prettier/prettier */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  product: string;

  @Column()
  price: number;

  @Column({ length: 100 })
  description: string;

 @ManyToOne(()=> Category, category=>category.category)
 category: Category
}
