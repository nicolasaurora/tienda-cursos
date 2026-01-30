import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './compra.entity';
import { ClientesService } from '../clientes/clientes.service';
import { CursosService } from '../cursos/cursos.service';
import { CrearCompraDto } from './dto/crear-compra.dto';

@Injectable()
export class ComprasService {

  constructor(
    @InjectRepository(Compra)
    private readonly compraRepository: Repository<Compra>,
    private clientesService: ClientesService,
    private cursosService: CursosService,
  ) {}

  async crearCompra(dto: CrearCompraDto) {
    
    let cliente = await this.clientesService.findByEmail(dto.email);

    if (!cliente) {
      cliente = await this.clientesService.create({
        nombre: dto.nombre,
        email: dto.email,
        telefono: dto.telefono,
      });
    }

    
    const compraExistente = await this.compraRepository.findOne({
      where: {
        cliente: { id: cliente.id },
        curso: { id: dto.cursoId }
      }
    });

    if (compraExistente) {
      throw new ConflictException('El cliente ya adquirió este curso anteriormente.');
    }

    const curso = await this.cursosService.findById(dto.cursoId);
    if (!curso) {
      throw new NotFoundException('Curso no encontrado');
    }

    const compra = this.compraRepository.create({
      cliente,
      curso,
      fechaCompra: new Date(), 
    });

    return this.compraRepository.save(compra);
  }

  async findByClienteEmail(email: string) {
    return this.compraRepository.find({
      relations: ['cliente', 'curso'],
      where: {
        cliente: {
          email: email,
        },
      },
      order: {
        fechaCompra: 'DESC',
      },
    });
  }

}

