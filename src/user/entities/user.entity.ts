/* eslint-disable prettier/prettier */

import { Cart } from 'src/cart/entities/cart.entity';
import { Order } from 'src/order/entities/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 8 })
  birthDate: string;

  @Column({ length: 500 })
  email: string;

  @OneToMany(type=>Cart, cart=>cart.id)
  @JoinColumn()
  cart:Cart[]
  
  @OneToOne(type=>Order, order=>order.id)
  @JoinColumn()
  order:Order
}
