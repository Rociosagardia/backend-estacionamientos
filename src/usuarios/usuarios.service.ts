import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private usersRepository: Repository<Usuarios>,
  ) { }

  findAll(): Promise<Usuarios[]> {
    return this.usersRepository.find();
  }

  findOne(rut_usuario: string): Promise<Usuarios> {
    return this.usersRepository.findOne({ rut_usuario });
  }

  async remove(rut_usuario: string): Promise<void> {
    await this.usersRepository.delete({ rut_usuario });
  }

  crear(body: any): Promise<any> {
    return this.usersRepository.save(body);
  }

  async login(mail_usuario: string, pass_usuario: string) {
    const usuarioLogin = await this.usersRepository.findOne({ mail_usuario });
    if (pass_usuario === usuarioLogin.pass_usuario) {
      return usuarioLogin;
    } else {
      throw new HttpException('usuario o contraseña invalida', 400);
    }
  }
}
