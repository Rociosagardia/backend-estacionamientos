/* eslint-disable prettier/prettier */
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Estacionamiento {
  @PrimaryGeneratedColumn()
  id_estacionamiento: number;

  @Column()
  region: string;

  @Column()
  comuna: string;

  @Column()
  calle: string;

  @Column()
  numero: string;

  @Column()
  tipo_estacionamiento: string;

  @Column({nullable:true})
  numero_estacionamiento: string;

  @Column({nullable:true})
  nivel_estacionamiento: string;

  @Column({nullable:true})
  descripcion: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToOne(() => Usuarios)
  @JoinColumn()
  usuario: Usuarios;
}
