import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estacionamiento } from './estacionamiento.entity';

@Injectable()
export class EstacionamientoService {

    constructor(
        @InjectRepository(Estacionamiento)
        private estacionamientoRepository: Repository<Estacionamiento>,
    ) { }


    crear(body: any): Promise<any> {
        return this.estacionamientoRepository.save(body);
    }
}
