import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Cliente } from '../clientes/cliente.entity';
import { Curso } from '../cursos/curso.entity';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name : 'cliente_id'})
  @ManyToOne(() => Cliente, cliente => cliente.compras)
  cliente: Cliente;

  @JoinColumn({ name : 'curso_id'})
  @ManyToOne(() => Curso)
  curso: Curso;

  @CreateDateColumn({ name: 'fecha_compra' })
  fechaCompra: Date;
}
