/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import {
    Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Product, item => item.id)
   items: Product[];

  @OneToOne(type => User, user => user.id)
  @JoinColumn()
  user: User;

  @Column()
  subtotal: number;

  @Column({default:false})
  pending: boolean;

}
