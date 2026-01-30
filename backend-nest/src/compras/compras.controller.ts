import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { CrearCompraDto } from './dto/crear-compra.dto';



@Controller('compras')
export class ComprasController {
  constructor(private readonly compraService: ComprasService) {}

  @Post()
  crear(@Body() dto: CrearCompraDto) {
    return this.compraService.crearCompra(dto);
  }

  @Get('cliente/:email')
  async getComprasPorCliente(@Param('email') email: string) {
  const compras = await this.compraService.findByClienteEmail(email);

    return {
      email,
      total: compras.length,
      compras: compras.map(compra => ({
        curso: compra.curso.nombre,
        precio: compra.curso.precio,
        fechaCompra: compra.fechaCompra,
      })),
    };
  }
}
