/* eslint-disable prettier/prettier */
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Vehiculo {
  @PrimaryGeneratedColumn()
  id_vehiculo: number;

  @Column({length: 40, nullable:false, type:'varchar'})
  marca: string;

  @Column({length:20, nullable:false, type:'varchar'})
  anio: string;

  @Column({length:30, nullable:false, type:'varchar'})
  modelo: string;

  @Column({length:20, nullable:false, type:'varchar'})
  color: string;

  @Column({length:6, nullable:false, type:'varchar', unique:true})
  patente: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToOne(() => Usuarios)
  @JoinColumn()
  usuario: Usuarios;
}
