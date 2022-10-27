/* eslint-disable prettier/prettier */
import { Cart } from 'src/cart/entities/cart.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
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

  @OneToMany(type=> Cart, cart => cart.id)
  @JoinColumn()
  cart: Cart[];
}
