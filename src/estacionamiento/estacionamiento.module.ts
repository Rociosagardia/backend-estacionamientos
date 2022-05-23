import { Module } from '@nestjs/common';
import { EstacionamientoService } from './estacionamiento.service';
import { EstacionamientoController } from './estacionamiento.controller';
import { Estacionamiento } from './estacionamiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Estacionamiento]), UsuariosModule],
  providers: [EstacionamientoService],
  controllers: [EstacionamientoController],
})
export class EstacionamientoModule {}
