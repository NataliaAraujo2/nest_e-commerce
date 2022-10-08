import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
