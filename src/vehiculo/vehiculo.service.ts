import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Repository } from 'typeorm';
import { Vehiculo } from './vehiculo.entity';

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
    private vehiculoRepository: Repository<Vehiculo>,
    private usuariosService: UsuariosService,
  ) {}

  async crear({ rut_usuario, ...body }: any): Promise<any> {
    const usuario = await this.usuariosService.findOne(rut_usuario);
    return this.vehiculoRepository.save({ usuario, ...body });
  }
}
