import { Controller, Get, Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClientesService) {}

  @Get()
  getAll(@Query('email') email?: string) {
  if (email) {
    return this.service.findByEmail(email);
  }
  return this.service.findAll();
}

}
