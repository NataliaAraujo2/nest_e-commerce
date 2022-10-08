/* eslint-disable prettier/prettier */
import { type } from 'os';
import { Client } from 'src/client/entities/client.entity';
import { Product } from 'src/product/entities/product.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Client)
  @JoinColumn({ referencedColumnName: "cpf" })
  client: Client
  
  
}
