import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from './compra.entity';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { ClientesModule } from '../clientes/clientes.module';
import { CursosModule } from '../cursos/cursos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Compra]),
    ClientesModule,
    CursosModule,
  ],
  providers: [ComprasService],
  controllers: [ComprasController],
})
export class ComprasModule {}

