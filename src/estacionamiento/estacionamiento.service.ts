import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Repository } from 'typeorm';
import { Estacionamiento } from './estacionamiento.entity';

@Injectable()
export class EstacionamientoService {
  constructor(
    @InjectRepository(Estacionamiento)
    private estacionamientoRepository: Repository<Estacionamiento>,
    private usuariosService: UsuariosService,
  ) {}

  async crear({ rut_usuario, ...body }: any): Promise<any> {
    const usuario = await this.usuariosService.findOne(rut_usuario);
    return this.estacionamientoRepository.save({ usuario, ...body });
  }
}
