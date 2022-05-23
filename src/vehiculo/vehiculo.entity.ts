/* eslint-disable prettier/prettier */
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id_vehiculo: number;

  @Column()
  marca: string;

  @Column()
  anio: string;

  @Column()
  modelo: string;

  @Column()
  color: string;

  @Column()
  patente: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToOne(() => Usuarios)
  @JoinColumn()
  usuario: Usuarios;

}
