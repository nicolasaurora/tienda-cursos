import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cursos')
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nombre: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @Column('double')
  precio: number;

  @Column('text', { nullable: true })
  detalle: string;

  @Column('json', { nullable: true })
  imagenes: string[];
}
