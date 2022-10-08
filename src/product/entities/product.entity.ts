import { Order } from 'src/order/entities/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  product: string;

  @Column({ length: 4 })
  price: string;

  @Column({ length: 8 })
  description: string;

  @Column({ length: 500 })
  category: string;

  @Column()
  status: boolean;

  @ManyToOne(type => Product, products => Product)
  products: Product[];
}
