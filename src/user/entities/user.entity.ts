/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

}
