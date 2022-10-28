/* eslint-disable prettier/prettier */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

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

 @ManyToOne(() => Category, category=> category.id)
 @JoinColumn()
 category: Category
}
