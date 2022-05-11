import { Module } from '@nestjs/common';
import { EstacionamientoService } from './estacionamiento.service';
import { EstacionamientoController } from './estacionamiento.controller';
import { Estacionamiento } from './estacionamiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Estacionamiento])],
  providers: [EstacionamientoService],
  controllers: [EstacionamientoController]
})
export class EstacionamientoModule {}
