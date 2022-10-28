/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/product/entities/product.entity'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @OneToMany(() => Product, (product) => product.id)
  @JoinColumn()
  products: Product[];
}
