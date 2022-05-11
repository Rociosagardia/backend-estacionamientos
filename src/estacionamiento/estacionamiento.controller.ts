import { Body, Controller, Post } from '@nestjs/common';
import { EstacionamientoService } from './estacionamiento.service';

@Controller('estacionamiento')
export class EstacionamientoController {
    constructor(private estacionamiento: EstacionamientoService) {}


    
  @Post()
  agregarUsuario(@Body() body) {
    return this.estacionamiento.crear(body);
  }

}
