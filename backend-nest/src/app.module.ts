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
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'nickomysql',
      database: 'cursos_db',
      entities: [Curso,Cliente,Compra],
      synchronize: false,
    }),
    CursosModule,
    ClientesModule,
    ComprasModule,
  ],
})
export class AppModule {}

