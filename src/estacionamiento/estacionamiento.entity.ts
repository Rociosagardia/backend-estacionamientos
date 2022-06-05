/* eslint-disable prettier/prettier */
import { Usuarios } from 'src/usuarios/usuarios.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Estacionamiento {
  @PrimaryGeneratedColumn()
  id_estacionamiento: number;

  // @Column({type: 'varchar', length: 30, unique: false, nullable: false})
  // ciudad: string;

  @Column({type:'varchar',length: 30, unique: false, nullable: false})
  comuna: string;

  @Column({type:'varchar',length: 30, unique: true, nullable: false})
  calle: string;

  @Column({type:'varchar',length: 6, unique: false, nullable: false})
  numero: string;

  // @Column()
  // rdDireccion: string;

  @Column({type: 'varchar', length: 6, unique: false, nullable:true})
  numero_estacionamiento: string;

  // @Column({type: 'varchar', length: 5, unique: false, nullable:true})
  // tipo_estacionamiento: string;

  @Column({type: 'varchar', length: 6, unique: false, nullable:true})
  nivel_estacionamiento: string;

  @Column({type:'varchar',length: 100, unique: false, nullable:true})
  caracteristicas: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
