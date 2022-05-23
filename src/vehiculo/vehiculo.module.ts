import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { Vehiculo } from './vehiculo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo]), UsuariosModule],
  providers: [VehiculoService],
  controllers: [VehiculoController],
})
export class VehiculoModule {}
