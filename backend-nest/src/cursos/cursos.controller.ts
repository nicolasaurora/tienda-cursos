import { Controller, Get, Param } from '@nestjs/common';
import { CursosService } from './cursos.service';


@Controller('cursos')
export class CursosController {
  constructor(private service: CursosService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.findById(id);
  }
}

