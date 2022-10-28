/* eslint-disable prettier/prettier */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column({ length: 100 })
  category: string;
}
