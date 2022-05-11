/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Estacionamiento {
  @PrimaryGeneratedColumn()
  id_estacionamiento: number;

  @Column()
  ciudad: string;

  @Column()
  comuna: string;

  @Column()
  calle: string;

  @Column()
  number: string;

  @Column()
  rdDireccion: string;

  @Column({nullable:true})
  numero_estacionamiento: string;

  @Column({nullable:true})
  tipo_estacionamiento: string;

  @Column({nullable:true})
  nivel_estacionamiento: string;

  @Column({nullable:true})
  caracteristicas: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
