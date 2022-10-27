/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @Column()
  quantity: number;

  @ManyToOne(type => Order, order=>order.id)
  @JoinColumn()
  item:Product;

  @ManyToOne(type => User, user => user.id)
  @JoinColumn()
  user: User;
}
