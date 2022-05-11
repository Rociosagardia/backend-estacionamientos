import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuarios } from './usuarios/usuarios.entity';
import { EstacionamientoModule } from './estacionamiento/estacionamiento.module';
import { Estacionamiento } from './estacionamiento/estacionamiento.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'estacionamientos',
      entities: [Usuarios, Estacionamiento],
      synchronize: true,
    }),
    UsuariosModule,
    EstacionamientoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
