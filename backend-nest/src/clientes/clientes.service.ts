import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private repo: Repository<Cliente>,
  ) {}

  findByEmail(email: string) {
    return this.repo.findOneBy({ email });
  }

  create(data: Partial<Cliente>) {
    const cliente = this.repo.create(data);
    return this.repo.save(cliente);
  }

  findAll() {
    return this.repo.find();
  }

}
