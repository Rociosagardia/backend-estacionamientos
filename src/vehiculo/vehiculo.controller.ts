import { Body, Controller, Post } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';

@Controller('vehiculo')
export class VehiculoController {
  constructor(private vechiculoService: VehiculoService) {}

  @Post()
  agregarVehiculo(@Body() body) {
    return this.vechiculoService.crear(body);
  }
}
