import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './cursos/curso.entity';
import { Cliente } from './clientes/cliente.entity';
import { Compra } from './compras/compra.entity';
import { CursosModule } from './cursos/cursos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ComprasModule } from './compras/compras.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      serveRoot: '/public', 
    }),


    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Curso,Cliente,Compra],
      synchronize: false,
    }),
    CursosModule,
    ClientesModule,
    ComprasModule,
  ],
})
export class AppModule {}

