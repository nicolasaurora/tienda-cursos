import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Compra } from '../compras/compra.entity';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 200, unique: true })
  email: string;

  @Column({ length: 20 })
  telefono: string;

  @OneToMany(() => Compra, compra => compra.cliente)
  compras: Compra[];
}
